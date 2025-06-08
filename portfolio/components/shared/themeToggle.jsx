"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`h-[50px] px-4 py-2 rounded transition-colors duration-300 
        ${isDark ? "bg-bgDark text-textGray400" : "bg-bgLight text-textPrimary"} 
        hover:text-hoverTextGray600 border border-gray-300 dark:border-gray-600`}
    >
      {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
