import * as React from "react";
import { Box, ButtonBase, Link, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Section from "@components/Section";
import Reveal from "@components/Reveal";
import { SERVICES } from "@data/services";
import { PHONE_TEL } from "@data/contact";

function ReadMoreLink({ to, title }) {
  return (
    <Link
      component={RouterLink}
      to={to}
      variant="body2"
      fontWeight={600}
      aria-label={`Lees meer over ${title}`}
      sx={{
        // Sits above the tile's full-size select button
        position: "relative",
        zIndex: 1,
        display: "inline-flex",
        alignItems: "center",
        gap: 0.5,
        color: "accent.700",
        "& > svg": { transition: "transform 150ms ease", fontSize: 18 },
        "&:hover > svg": { transform: "translateX(3px)" },
      }}
    >
      Lees meer
      <ArrowForwardRoundedIcon />
    </Link>
  );
}

export default function Diensten() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const selected = SERVICES[selectedIndex];

  return (
    <Section.Container id="diensten" tone="paper">
      <Reveal>
        <Section.Eyebrow>Diensten</Section.Eyebrow>
        <Section.Heading>Waar ik u mee van dienst kan zijn</Section.Heading>
        <Section.Subheading>
          Hieronder vindt u enkele van mijn gespecialiseerde diensten. Voor een
          compleet overzicht sta ik u graag persoonlijk te woord.
        </Section.Subheading>
        <Typography sx={{ color: "text.primary", fontWeight: 600, mb: 5 }}>
          Lekkage of stormschade?{" "}
          <Link href={`tel:${PHONE_TEL}`} sx={{ color: "accent.700" }}>
            Bel direct
          </Link>
          , dan kom ik zo snel mogelijk kijken.
        </Typography>
      </Reveal>

      <Reveal
        delay={150}
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: { xs: 4, md: 8 },
          alignItems: "stretch",
        }}
      >
        {/* Service tiles */}
        <Stack spacing={2.5} sx={{ flex: 1 }}>
          {SERVICES.map((item, i) => {
            const isActive = selectedIndex === i;

            return (
              <Box
                key={item.slug}
                component="article"
                sx={(theme) => ({
                  position: "relative",
                  display: "flex",
                  gap: { xs: 2, sm: 3 },
                  alignItems: "flex-start",
                  p: { xs: 2.5, sm: 3 },
                  borderRadius: "20px",
                  backgroundColor: "background.default",
                  border: "1px solid",
                  borderColor: isActive
                    ? "accent.700"
                    : alpha(theme.palette.ink[900], 0.08),
                  boxShadow: isActive
                    ? `0 18px 40px -22px ${alpha(theme.palette.brand[700], 0.45)}`
                    : `0 1px 2px ${alpha(theme.palette.ink[900], 0.04)}`,
                  transition:
                    "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    borderColor: "accent.400",
                    boxShadow: `0 18px 40px -22px ${alpha(theme.palette.brand[700], 0.45)}`,
                  },
                })}
              >
                {/* Photo tile: a crop of the service's own job photo */}
                <Box
                  component="img"
                  src={item.thumb}
                  alt=""
                  width={60}
                  height={60}
                  loading="lazy"
                  decoding="async"
                  sx={{
                    width: 60,
                    height: 60,
                    flexShrink: 0,
                    display: "block",
                    objectFit: "cover",
                    borderRadius: "16px",
                    border: "2px solid",
                    borderColor: isActive ? "accent.700" : "transparent",
                    transition: "border-color 200ms ease",
                  }}
                />

                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      mb: 0.75,
                      fontSize: "1.25rem",
                      color: isActive ? "brand.500" : "text.primary",
                      transition: "color 200ms ease",
                    }}
                  >
                    {/* The real control: a button named by the title alone.
                        Its ::after covers the whole tile for mouse users. */}
                    <ButtonBase
                      onClick={() => setSelectedIndex(i)}
                      aria-pressed={isActive}
                      sx={{
                        font: "inherit",
                        color: "inherit",
                        textAlign: "left",
                        borderRadius: 1,
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          inset: 0,
                          borderRadius: "20px",
                        },
                      }}
                    >
                      {item.title}
                    </ButtonBase>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 1.5, maxWidth: 480 }}
                  >
                    {item.shortDescription}
                  </Typography>
                  <ReadMoreLink to={`/diensten/${item.slug}`} title={item.title} />
                </Box>
              </Box>
            );
          })}
        </Stack>

        {/* Selected image */}
        <Box
          sx={{
            flex: 1,
            minHeight: { xs: 260, md: "auto" },
          }}
        >
          <Box
            component="img"
            src={selected.image}
            srcSet={selected.imageSrcSet}
            sizes="(min-width: 768px) 50vw, 100vw"
            alt={selected.imageAlt}
            loading="lazy"
            decoding="async"
            sx={{
              width: "100%",
              height: "100%",
              maxHeight: { xs: 300, md: 560 },
              objectFit: "cover",
              borderRadius: "24px",
              display: "block",
              boxShadow: (theme) =>
                `0 24px 60px -28px ${theme.palette.ink[900]}59`,
            }}
          />
        </Box>
      </Reveal>
    </Section.Container>
  );
}
