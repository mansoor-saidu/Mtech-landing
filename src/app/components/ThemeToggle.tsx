import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-8 right-8 z-50"
      aria-label="Toggle theme"
    >
      <div className="relative w-12 h-6 rounded-full bg-muted border border-border overflow-hidden">
        <motion.div
          className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-card shadow-md flex items-center justify-center"
          animate={{
            x: isDark ? 24 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 35,
          }}
        >
          {isDark ? (
            <Moon className="w-3 h-3 text-foreground" />
          ) : (
            <Sun className="w-3 h-3 text-foreground" />
          )}
        </motion.div>
      </div>
    </motion.button>
  );
}
