import gsap from "gsap";
import { useEffect } from "react";

export const useGsapCardHook = (ref) => {
  useEffect(() => {
    gsap.to(ref.current, {
      overflow: "hidden",
      maxHeight: "700px",

      opacity: 1,
      duration: 3,
      ease: "power2.out",
    });
  }, []);
};
