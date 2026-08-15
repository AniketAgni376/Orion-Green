import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

function SmoothScroll() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      smooth: true,
      lerp: 0.08,
      multiplier: 0.9,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return null;
}

export default SmoothScroll;