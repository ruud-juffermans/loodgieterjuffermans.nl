import { CssBaseline, GlobalStyles as MuiGlobalStyles } from "@mui/material";
import { alpha } from "@mui/material/styles";

const GlobalStyles = () => {
  return (
    <>
      <CssBaseline />
      <MuiGlobalStyles
        styles={(theme) => ({
          html: {
            scrollBehavior: "smooth",
          },
          body: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          },
          "::selection": {
            backgroundColor: alpha(theme.palette.accent[300], 0.45),
          },
          img: {
            maxWidth: "100%",
          },
          // Headings and sections receive focus after a route change so the
          // page is announced; they are not interactive, so no ring.
          "main [tabindex='-1']:focus": {
            outline: "none",
          },
          "@keyframes fadeUp": {
            from: { opacity: 0, transform: "translateY(28px)" },
            to: { opacity: 1, transform: "none" },
          },
          "@keyframes heroZoom": {
            from: { transform: "scale(1)" },
            to: { transform: "scale(1.08)" },
          },
          "@media (prefers-reduced-motion: reduce)": {
            "*, *::before, *::after": {
              animationDuration: "0.01ms !important",
              animationIterationCount: "1 !important",
              transitionDuration: "0.01ms !important",
            },
            html: {
              scrollBehavior: "auto",
            },
          },
        })}
      />
    </>
  );
};

export default GlobalStyles;
