import { Link as RouterLink } from "react-router-dom";
import { Box, Button } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Section from "@components/Section";
import Reveal from "@components/Reveal";
import ProjectCard from "@components/ProjectCard";
import { PROJECTS } from "@data/projects";

const PREVIEW = PROJECTS.slice(0, 4);

/** Homepage preview of the gallery: four tiles and a link to the full page. */
export default function Galerij() {
  return (
    <Section.Container id="galerij" tone="light">
      <Reveal sx={{ textAlign: "center" }}>
        <Section.Eyebrow>Galerij</Section.Eyebrow>
        <Section.Heading align="center">Mijn werk in beeld</Section.Heading>
        <Section.Subheading align="center">
          Een selectie van recent uitgevoerde projecten in zinkwerk, loodwerk
          en dakdekken.
        </Section.Subheading>
      </Reveal>

      <Reveal
        delay={150}
        component="ul"
        sx={{
          listStyle: "none",
          m: 0,
          p: 0,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 3,
        }}
      >
        {PREVIEW.map((project) => (
          <Box component="li" key={project.id}>
            <ProjectCard project={project} />
          </Box>
        ))}
      </Reveal>

      <Reveal delay={250} sx={{ textAlign: "center", mt: { xs: 4, sm: 6 } }}>
        <Button
          component={RouterLink}
          to="/galerij"
          variant="outlined"
          size="large"
          endIcon={<ArrowForwardRoundedIcon />}
          sx={{
            borderRadius: "8px",
            borderColor: "brand.500",
            color: "brand.500",
            fontWeight: 700,
            px: 3,
            "&:hover": { borderColor: "brand.700", backgroundColor: "accent.50" },
          }}
        >
          Bekijk alle projecten
        </Button>
      </Reveal>
    </Section.Container>
  );
}
