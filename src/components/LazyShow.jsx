import React, { useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";

function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let currentRef = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIntersecting(entry?.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref && ref?.current) {
      currentRef = ref.current;
      observer.observe(currentRef);
    }
    return () => {
      observer.unobserve(currentRef);
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}

function LazyShow( { children, position }) {
  const controls = useAnimation();
  const rootRef = React.useRef(null);
  const onScreen = useOnScreen(rootRef);


  useEffect(() => {
    if (onScreen) {
      controls.start({
        y: 0,
        opacity: 1,
        animate: {
          y: 100,
        },
        transition: {
          type: "spring",
          bounce: 0.6,
        },
      });
    }
  }, [onScreen, controls]);

  return (
    <motion.div
      className="lazy-div"
      ref={rootRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      style={{
        position: position ?? "relative",
        display: 'grid',
      }}
    >
      {children}
    </motion.div>
  );
}

export default LazyShow;
