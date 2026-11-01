import * as React from "react";
import { Box, Rating, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import Section from "@components/Section";
import Reveal from "@components/Reveal";

const TESTIMONIALS = [
  {
    name: "A. Heemskerk",
    job: "Nieuwe zinken dakgoot",
    testimonial:
      "Aardige man, komt afspraken na, werkt goed door, nieuwe dakgoot zit er goed in, net werk. Kon snel komen. Kortom: wat ik hoopte.",
  },
  {
    name: "Marieke van Delden",
    testimonial:
      "Betrouwbare en zeer goede vakman. Kan hem iedereen aanraden. Prima werk geleverd en meerwerk in goed overleg en aan de hand van foto's.",
  },
  {
    name: "Ludwig Fauser",
    testimonial:
      "Goede communicatie en alles keurig op tijd en volgens afspraak.",
  },
];

export default function Reviews() {
  return (
    <Section.Container id="reviews" tone="light">
      <Reveal sx={{ textAlign: "center" }}>
        <Section.Eyebrow>Reviews</Section.Eyebrow>
        <Section.Heading align="center">
          Wat klanten over mij zeggen
        </Section.Heading>
        <Section.Subheading align="center">
          Bij mij spreken de resultaten. Lees wat klanten te zeggen hebben over
          hun ervaring met Loodgietersbedrijf Juffermans.
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
        {TESTIMONIALS.map((t) => (
          <Stack
            key={t.name}
            justifyContent="space-between"
            sx={(theme) => ({
              p: 4,
              borderRadius: "20px",
              backgroundColor: "paperTone.50",
              border: `1px solid ${alpha(theme.palette.ink[900], 0.08)}`,
              boxShadow: `0 1px 2px ${alpha(theme.palette.ink[900], 0.04)}`,
              transition: "border-color 200ms ease, transform 200ms ease, box-shadow 200ms ease",
              "&:hover": {
                borderColor: "accent.400",
                transform: "translateY(-4px)",
                boxShadow: `0 18px 40px -22px ${alpha(theme.palette.brand[700], 0.45)}`,
              },
            })}
          >
            <Box>
              <FormatQuoteRoundedIcon
                sx={{ fontSize: 40, color: "accent.500", mb: 1 }}
              />
              <Typography
                sx={{
                  color: "text.secondary",
                  fontStyle: "italic",
                  lineHeight: 1.75,
                }}
              >
                {t.testimonial}
              </Typography>
            </Box>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
              spacing={2}
              sx={(theme) => ({
                mt: 4,
                pt: 2.5,
                borderTop: `1px solid ${alpha(theme.palette.ink[900], 0.08)}`,
              })}
            >
              <Box>
                <Typography
                  sx={{ color: "text.primary", fontWeight: 600, fontSize: "0.9375rem" }}
                >
                  {t.name}
                </Typography>
                {t.job ? (
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {t.job}
                  </Typography>
                ) : null}
              </Box>
              <Rating
                value={5}
                readOnly
                size="small"
                getLabelText={(v) => `${v} van 5 sterren`}
              />
            </Stack>
          </Stack>
        ))}
      </Reveal>
    </Section.Container>
  );
}
