import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/dist/Draggable";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, isMinimized, zIndex } = windows[windowKey];
    const ref = useRef(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      if (isMinimized) {
        gsap.to(el, {
          scale: 0,
          opacity: 0,
          y: "80vh",
          x: "50%",
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            el.style.display = "none";
          },
        });
      } else {
        el.style.display = "block";
        gsap.fromTo(
          el,
          { scale: 0, opacity: 0, y: "80vh", x: "50%" },
          { scale: 1, opacity: 1, y: 0, x: 0, duration: 0.5, ease: "power2.out" },
        );
      }
    }, [isMinimized, isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, { onPress: () => focusWindow(windowKey) });

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
