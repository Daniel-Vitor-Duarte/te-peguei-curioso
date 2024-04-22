import { useEffect, useState, useRef, RefObject } from "react";

export default function useOnScreen(
  ref: RefObject<HTMLElement>,
  initialState = false
) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(initialState);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    );
  }, []);

  useEffect(() => {
    if (!ref.current || !observerRef.current) {
      return;
    }
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current && observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
