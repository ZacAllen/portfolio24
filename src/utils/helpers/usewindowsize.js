import { useState, useEffect } from "react";

function useWindowSize() {
  const windowAvailable = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState({
    pageWidth: windowAvailable && window.innerWidth,
    pageHeight: windowAvailable && window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        pageWidth: windowAvailable && window.innerWidth,
        pageHeight: windowAvailable && window.innerHeight,
      });
    }

    windowAvailable && window.addEventListener("resize", handleResize);

    return () => windowAvailable && window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
