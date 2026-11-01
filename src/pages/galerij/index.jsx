import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Breadcrumbs, Chip, Link, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Section from "@components/Section";
import Seo from "@components/Seo";
import { breadcrumbJsonLd } from "@components/Seo/jsonLd";
import JsonLd from "@components/JsonLd";
import Reveal from "@components/Reveal";
import ProjectCard from "@components/ProjectCard";
import { BelDirectButton, WhatsAppButton } from "@components/CtaButtons";
import { PROJECTS, PROJECT_CATEGORIES } from "@data/projects";

const HEADER_HEIGHT = 88;
const FILTERS = [{ slug: "alle", label: "Alle projecten" }, ...PROJECT_CATEGORIES];

export default function GalerijPage() {
  const [filter, setFilter] = React.useState("alle");
  const visible =
    filter === "alle" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Galerij", path: "/galerij" },
  ]);

  return (
    <Box sx={{ pt: `${HEADER_HEIGHT}px` }}>
      <Seo
        title="Galerij: zinkwerk, loodwerk en dakdekken | Juffermans"
        description="Foto's van uitgevoerd werk: zinken dakgoten, loodwerk rond schoorstenen en dakkapellen en vernieuwde platte daken in Haarlem, Heemstede en Bennebroek."
        path="/galerij"
      />
      <JsonLd data={jsonLd} />

      <Section.Container tone="paper">
        <Reveal>
          <Breadcrumbs aria-label="Kruimelpad" sx={{ mb: 3, fontSize: "0.9375rem" }}>
            <Link component={RouterLink} to="/" sx={{ color: "accent.700", fontWeight: 600 }}>
              Home
            </Link>
            <Typography component="span" sx={{ color: "text.secondary" }}>
              Galerij
            </Typography>
          </Breadcrumbs>

          <Section.Eyebrow>Galerij</Section.Eyebrow>
          <Typography variant="h2" component="h1" sx={{ color: "text.primary", mb: 3 }}>
            Mijn werk in beeld
          </Typography>
          <Section.Subheading>
            Een selectie van uitgevoerd werk in zinkwerk, loodwerk en dakdekken.
            Elk project is met vakmanschap en oog voor detail uitgevoerd.
          </Section.Subheading>
        </Reveal>

        {/* Category filter */}
        <Reveal delay={100}>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            flexWrap="wrap"
            role="group"
            aria-label="Filter op dienst"
            sx={{ mb: { xs: 4, sm: 6 } }}
          >
            {FILTERS.map((f) => {
              const selected = filter === f.slug;
              return (
                <Chip
                  key={f.slug}
                  label={f.label}
                  clickable
                  onClick={() => setFilter(f.slug)}
                  aria-pressed={selected}
                  sx={(theme) => ({
                    height: 40,
                    px: 1,
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    borderRadius: "999px",
                    border: "1px solid",
                    borderColor: selected ? "brand.500" : alpha(theme.palette.ink[900], 0.12),
                    backgroundColor: selected ? "brand.500" : "background.default",
                    color: selected ? "common.white" : "text.primary",
                    "&:hover": {
                      backgroundColor: selected ? "brand.700" : alpha(theme.palette.accent[100], 0.6),
                    },
                  })}
                />
              );
            })}
          </Stack>
        </Reveal>

        <Box
          component="ul"
          aria-live="polite"
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            },
            gap: 3,
          }}
        >
          {visible.map((project) => (
            <Box component="li" key={project.id}>
              <ProjectCard project={project} />
            </Box>
          ))}
        </Box>

        {/* CTA card */}
        <Box
          sx={(theme) => ({
            mt: { xs: 6, sm: 8 },
            p: { xs: 3, sm: 5 },
            borderRadius: "20px",
            textAlign: "center",
            backgroundColor: "background.default",
            border: `1px solid ${alpha(theme.palette.ink[900], 0.08)}`,
          })}
        >
          <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
            Ge&iuml;nteresseerd in mijn werk?
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 3 }}>
            Neem contact op voor een vrijblijvende offerte.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <BelDirectButton />
            <WhatsAppButton />
          </Stack>
        </Box>
      </Section.Container>
    </Box>
  );
}
