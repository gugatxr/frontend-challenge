import { useState, useEffect } from "react";

export default function useIntersection(
  element,
  rootMargin,
  threshold,
  rootElement
) {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    if (!rootElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry.isIntersecting);
        setState(entry.isIntersecting);
      },
      { rootMargin, threshold, root: rootElement ?? document }
    );

    element && observer.observe(element);

    return () => element && observer.unobserve(element);
  }, [element, rootElement]);

  return isVisible;
}
