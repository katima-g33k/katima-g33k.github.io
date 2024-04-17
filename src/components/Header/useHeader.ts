import { useEffect, useState } from "react";

export const useHeader = () => {
  const [isTransparent, setIsTransparent] = useState(true);

  const setTransparency = () => setIsTransparent(window.scrollY < 50);

  useEffect(() => {
    window.addEventListener("scroll", setTransparency);

    return () => {
      window.removeEventListener("scroll", setTransparency);
    };
  }, []);

  return { isTransparent };
};
