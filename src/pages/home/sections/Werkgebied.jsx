import * as React from "react";
import { Box, Link, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Section from "@components/Section";
import Reveal from "@components/Reveal";
import { REGIONS } from "@data/regions";

/** "Werkgebied" region cards, copied from the live site. */
export default function Werkgebied() {
  return (
    <Section.Container id="werkgebied" tone="paper">
      <Reveal sx={{ textAlign: "center" }}>
        <Section.Eyebrow>Werkgebied</Section.Eyebrow>
        <Section.Heading align="center">Haarlem, Heemstede en Bennebroek</Section.Heading>
        <Section.Subheading align="center">
          Actief in heel Noord-Holland. Ik kom graag bij u langs voor een
          vrijblijvende offerte.
        </Section.Subheading>
      </Reveal>

      <Reveal
        delay={150}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 3,
        }}
      >
        {REGIONS.map((region) => (
          <Box
            key={region.slug}
            component="article"
            sx={(theme) => ({
              p: 3,
              borderRadius: "20px",
              backgroundColor: "background.default",
              border: `1px solid ${alpha(theme.palette.ink[900], 0.08)}`,
              textAlign: "center",
              transition: "border-color 200ms ease, transform 200ms ease",
              "&:hover": {
                borderColor: "accent.400",
                transform: "translateY(-4px)",
              },
            })}
          >
            <PlaceOutlinedIcon sx={{ fontSize: 32, color: "brand.500", mb: 1.5 }} />
            <Typography
              component="h3"
              sx={{
                fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "brand.500",
                mb: 1,
              }}
            >
              <Link
                component={RouterLink}
                to={`/regio/${region.slug}`}
                sx={{ color: "inherit", "&:hover": { color: "accent.600" } }}
              >
                Loodgieter {region.name}
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {region.shortDescription}
            </Typography>
          </Box>
        ))}
      </Reveal>
        <Typography sx={{ color: "text.secondary", mt: 2, fontStyle: "italic" }}>
          Ook actief in omliggende plaatsen in{" "}
          <Box component="strong" sx={{ color: "text.primary" }}>
            Noord-Holland
          </Box>
          . Twijfelt u of ik bij u in de buurt werk?{" "}
          <Link component={RouterLink} to="/#contact" sx={{ color: "text.primary", fontWeight: 700 }}>
            Neem gerust contact op!
          </Link>
        </Typography>
  
    </Section.Container>
  );
}
