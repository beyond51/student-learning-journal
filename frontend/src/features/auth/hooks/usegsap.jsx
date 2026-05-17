import gsap from "gsap";
import { useEffect } from "react";

export const useloginGsap = (LoginRef) => {
  useEffect(() => {
    gsap.to(LoginRef.current, {
      maxHeight: "700px",
      duration: 2,
      ease: "power2.out",
    });
  }, []);
};

// export const useRegisterGsap = (registerRef) => {
//   useEffect(() => {
//     gsap.to(registerRef.current, {
//       maxHeight: "800px",
//       duration: 2,
//       ease: "power2.out",
//     });
//   }, []);
// };
