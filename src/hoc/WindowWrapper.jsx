import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/dist/Draggable";

const DOCK_MAP = {
  resume: "finder",
  txtfile: "finder",
  imgfile: "photos",
};

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows, setLastPos, setLastSize } = useWindowStore();
    const { isOpen, isMinimized, lastPos, zIndex, isMaximized, lastSize } = windows[windowKey];
    const ref = useRef(null);
    const draggableRef = useRef(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      gsap.killTweensOf(el);

      const iconId = DOCK_MAP[windowKey] || windowKey;
      const icon = document.getElementById(`dock-icon-${iconId}`);
      const iconRect = icon?.getBoundingClientRect();

      const currentX = gsap.getProperty(el, "x") || 0;
      const currentY = gsap.getProperty(el, "y") || 0;
      if (isMinimized) {
        const windowRect = el.getBoundingClientRect();
        const destX = iconRect
          ? iconRect.left + iconRect.width / 2 - (windowRect.left + windowRect.width / 2)
          : 0;
        const destY = iconRect
          ? iconRect.top + iconRect.height / 2 - (windowRect.top + windowRect.height / 2)
          : window.innerHeight;

        const currentScale = gsap.getProperty(el, "scale");
        if (currentScale > 0.99 && !isMaximized) {
          setLastPos(windowKey, { x: gsap.getProperty(el, "x"), y: gsap.getProperty(el, "y") });
        }

        gsap.to(el, {
          x: `+=${destX}`,
          y: `+=${destY}`,
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            el.style.display = "none";
          },
        });
      } else {
        // Not minimized: could be Maximized or Restored/Opening
        const wasHidden = el.style.display === "none" || gsap.getProperty(el, "opacity") === 0;
        el.style.display = "block";

        const windowRect = el.getBoundingClientRect();
        const baseLeft = windowRect.left - currentX;
        const baseTop = windowRect.top - currentY;

        const startX = iconRect
          ? iconRect.left + iconRect.width / 2 - (baseLeft + (lastSize?.width || windowRect.width) / 2)
          : 0;
        const startY = iconRect
          ? iconRect.top + iconRect.height / 2 - (baseTop + (lastSize?.height || windowRect.height) / 2)
          : window.innerHeight;

        if (isMaximized) {
          draggableRef.current?.disable();

          // Capture state before animating
          const currentScale = gsap.getProperty(el, "scale");
          if (currentScale > 0.99) {
            setLastPos(windowKey, { x: currentX, y: currentY });
            setLastSize(windowKey, { width: el.offsetWidth, height: el.offsetHeight });
          }

          const navHeight = document.querySelector("nav")?.offsetHeight || 30;

          if (wasHidden) {
            gsap.set(el, { x: startX, y: startY, scale: 0, opacity: 0 });
          }

          gsap.to(el, {
            top: navHeight,
            left: 0,
            x: 0,
            y: 0,
            width: "100%",
            height: `calc(100% - ${navHeight}px)`,
            maxWidth: "none",
            xPercent: 0,
            yPercent: 0,
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power3.inOut",
            onComplete: () => draggableRef.current?.update(),
          });
        } else {
          // Restore/Unmaximize/Opening
          const targetX = lastPos?.x || 0;
          const targetY = lastPos?.y || 0;

          if (wasHidden) {
            gsap.set(el, { x: startX, y: startY, scale: 0, opacity: 0 });
          }

          gsap.to(el, {
            x: targetX,
            y: targetY,
            width: lastSize?.width || "",
            height: lastSize?.height || "",
            top: "", 
            left: "",
            maxWidth: "",
            xPercent: "",
            yPercent: "",
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
              draggableRef.current?.enable();
              draggableRef.current?.update();
            },
          });
        }
      }
    }, [isMinimized, isOpen, isMaximized]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, { onPress: () => focusWindow(windowKey) });
      draggableRef.current = instance;

      return () => instance.kill();
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      // We handle display in the animation useGSAP, but as a fallback/initial state:
      if (!isOpen) el.style.display = "none";
    }, [isOpen]);

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};

export default WindowWrapper;
