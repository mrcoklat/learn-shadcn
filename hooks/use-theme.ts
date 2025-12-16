// hooks/useTheme.ts
"use client";
import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const update = () =>
      setTheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);
  return theme;
}
