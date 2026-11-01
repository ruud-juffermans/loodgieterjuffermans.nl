import { Box, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import { getCategoryLabel } from "@data/projects";

/**
 * One gallery tile. Shows the project photo when there is one, otherwise a
 * labelled placeholder so the layout can be judged before the photos exist.
 */
export default function ProjectCard({ project, sizes = "(min-width: 1024px) 25vw, (min-width: 480px) 50vw, 100vw" }) {
  const label = getCategoryLabel(project.category);

  return (
    <Box
      component="figure"
      sx={(theme) => ({
        m: 0,
        position: "relative",
        overflow: "hidden",
        borderRadius: "20px",
        aspectRatio: "4 / 3",
        backgroundColor: "paperTone.100",
        border: `1px solid ${alpha(theme.palette.ink[900], 0.08)}`,
        transition: "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "accent.400",
          boxShadow: `0 18px 40px -22px ${alpha(theme.palette.brand[700], 0.45)}`,
        },
      })}
    >
      {project.image ? (
        <Box
          component="img"
          src={project.image}
          srcSet={project.imageSrcSet}
          sizes={sizes}
          alt={project.imageAlt ?? `${project.title} in ${project.place}`}
          loading="lazy"
          decoding="async"
          sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        <Box
          aria-hidden="true"
          sx={(theme) => ({
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: alpha(theme.palette.ink[900], 0.25),
            background: `linear-gradient(135deg, ${theme.palette.paperTone[100]} 0%, ${alpha(theme.palette.accent[100], 0.6)} 100%)`,
          })}
        >
          <PhotoCameraOutlinedIcon sx={{ fontSize: 40 }} />
        </Box>
      )}

      <Typography
        component="figcaption"
        sx={(theme) => ({
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          p: 2,
          pt: 5,
          color: "common.white",
          background: `linear-gradient(180deg, transparent 0%, ${alpha(theme.palette.ink[900], 0.85)} 100%)`,
        })}
      >
        <Box
          component="span"
          sx={{
            display: "block",
            fontSize: "0.6875rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "accent.300",
            mb: 0.5,
          }}
        >
          {label}
        </Box>
        <Box
          component="span"
          sx={{
            display: "block",
            fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
            fontWeight: 700,
            fontSize: "1rem",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </Box>
        <Box component="span" sx={{ display: "block", fontSize: "0.875rem", color: "ink.200" }}>
          {project.place}
        </Box>
      </Typography>
    </Box>
  );
}
