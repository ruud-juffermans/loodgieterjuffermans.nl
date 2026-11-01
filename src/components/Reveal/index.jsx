import * as React from "react";
import { Box } from "@mui/material";

/**
 * Fades content up into view the first time it scrolls into the viewport.
 * Falls back to instantly visible when the user prefers reduced motion.
 */
export default function Reveal({ children, delay = 0, sx, ...props }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={(theme) => ({
        // Prerendered HTML stays visible without JavaScript; the inline
        // script in index.html adds html.js, which enables the hidden start.
        ".js &": {
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(28px)",
        },
        transition: `opacity 700ms ease ${delay}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        // sx may be an object or a theme callback, like any MUI sx prop
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
      {...props}
    >
      {children}
    </Box>
  );
}
