import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/dist/Draggable";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows, setLastPos } = useWindowStore();
    const { isOpen, isMinimized, lastPos, zIndex } = windows[windowKey];
    const ref = useRef(null);
    const draggableRef = useRef(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      gsap.killTweensOf(el);

      const icon = document.getElementById(`dock-icon-${windowKey}`);
      const iconRect = icon?.getBoundingClientRect();

      if (isMinimized) {
        const windowRect = el.getBoundingClientRect();

        // Calculate delta to dock icon center
        const destX = iconRect
          ? iconRect.left + iconRect.width / 2 - (windowRect.left + windowRect.width / 2)
          : 0;
        const destY = iconRect
          ? iconRect.top + iconRect.height / 2 - (windowRect.top + windowRect.height / 2)
          : window.innerHeight;

        // Save current position before animating away
        setLastPos(windowKey, { x: gsap.getProperty(el, "x"), y: gsap.getProperty(el, "y") });

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
        // Initial open or Restore (merged logic)
        el.style.display = "block";
        
        // Ensure we measure the window's base position (where x=0, y=0)
        const currentX = gsap.getProperty(el, "x") || 0;
        const currentY = gsap.getProperty(el, "y") || 0;
        const windowRect = el.getBoundingClientRect();
        const baseLeft = windowRect.left - currentX;
        const baseTop = windowRect.top - currentY;

        const startX = iconRect
          ? iconRect.left + iconRect.width / 2 - (baseLeft + windowRect.width / 2)
          : 0;
        const startY = iconRect
          ? iconRect.top + iconRect.height / 2 - (baseTop + windowRect.height / 2)
          : window.innerHeight;

        const targetX = lastPos?.x || 0;
        const targetY = lastPos?.y || 0;

        gsap.fromTo(
          el,
          { x: startX, y: startY, scale: 0, opacity: 0 },
          {
            x: targetX,
            y: targetY,
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => draggableRef.current?.update(),
          },
        );
      }
    }, [isMinimized, isOpen]);

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
