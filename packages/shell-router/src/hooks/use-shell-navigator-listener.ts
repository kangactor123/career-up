import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 쉘 간 Navigate 이벤트를 Listen
export default function useShellNavigateListener() {
  const navigate = useNavigate();
  useEffect(() => {
    const shellNavigateListener = (event: Event) => {
      const pathname = (event as CustomEvent).detail;
      navigate(pathname);
    };

    window.addEventListener("[shell] navigate", shellNavigateListener);

    return () => {
      window.removeEventListener("[shell] navigate", shellNavigateListener);
    };
  }, [navigate]);
}
