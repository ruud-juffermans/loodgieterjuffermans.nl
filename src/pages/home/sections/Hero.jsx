import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { BelDirectButton, WhatsAppButton } from "@components/CtaButtons";

import heroImage from "@assets/hero1.jpeg?w=1600&format=webp&quality=72";
import heroImageSet from "@assets/hero1.jpeg?w=800;1200;1600;1920&format=webp&quality=72&as=srcset";

// Trust badges, copied from the live site.
const TRUST_BADGES = [
  { label: "Vakkundig & Betrouwbaar", icon: VerifiedUserOutlinedIcon },
  { label: "Snel ter plaatse", icon: AccessTimeRoundedIcon },
  { label: "Garantie op werk", icon: CheckCircleOutlineRoundedIcon },
];

export default function Hero() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "100svh", md: "92vh" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: "ink.900",
      }}
    >
      {/* Background photo with a slow zoom that settles after one run */}
      <Box
        component="img"
        src={heroImage}
        srcSet={heroImageSet}
        sizes="100vw"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          animation: "heroZoom 20s ease-out 1 forwards",
          willChange: "transform",
        }}
      />

      {/* Ink overlay for legibility. On desktop it darkens the left where the
          text sits and leaves the right open so the lead-dressing photo shows. */}
      <Box
        aria-hidden="true"
        sx={(theme) => ({
          position: "absolute",
          inset: 0,
          background: {
            xs: `linear-gradient(180deg, ${alpha(theme.palette.ink[900], 0.82)} 0%, ${alpha(theme.palette.ink[900], 0.68)} 55%, ${alpha(theme.palette.ink[900], 0.88)} 100%)`,
            md: `linear-gradient(90deg, ${alpha(theme.palette.ink[900], 0.94)} 0%, ${alpha(theme.palette.ink[900], 0.86)} 42%, ${alpha(theme.palette.ink[900], 0.35)} 100%),
              linear-gradient(180deg, ${alpha(theme.palette.ink[900], 0.25)} 0%, transparent 30%, transparent 70%, ${alpha(theme.palette.ink[900], 0.55)} 100%)`,
          },
        })}
      />
      <Box
        aria-hidden="true"
        sx={(theme) => ({
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(1200px 600px at 15% 100%, ${alpha(theme.palette.accent[400], 0.28)}, transparent 60%),
            radial-gradient(900px 500px at 90% 0%, ${alpha(theme.palette.brand[400], 0.18)}, transparent 60%)
          `,
        })}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          spacing={4}
          sx={{
            py: { xs: 16, md: 20 },
            maxWidth: { xs: 1860, md: 760 },
            mx: { xs: "auto", md: 0 },
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            // Staggered entrance
            "& > *": {
              animation: "fadeUp 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
            },
            "& > *:nth-of-type(2)": { animationDelay: "120ms" },
            "& > *:nth-of-type(3)": { animationDelay: "240ms" },
            "& > *:nth-of-type(4)": { animationDelay: "360ms" },
            "& > *:nth-of-type(5)": { animationDelay: "480ms" },
            "& > *:nth-of-type(6)": { animationDelay: "600ms" },
            "& > *:nth-of-type(7)": { animationDelay: "720ms" },
          }}
        >
          <Typography
            variant="overline"
            sx={{ color: "accent.400", fontWeight: 800, fontSize: "0.875rem" }}
          >
            Waterdicht de beste — Haarlem &amp; omgeving
          </Typography>

          <Typography variant="h1" sx={{ color: "common.white" }}>
            Loodgieter en dakdekker in Haarlem, Heemstede en Bennebroek
          </Typography>

          <Typography
            sx={{
              color: "ink.100",
              fontSize: { xs: "1.0625rem", md: "1.1875rem" },
              lineHeight: 1.7,
              maxWidth: 620,
            }}
          >
            Loodgietersbedrijf Juffermans: specialist in zinkwerk, loodwerk en
            dakdekken. Ook voor lekkages en dakgoten, snel ter plaatse in de regio.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ pt: 1, width: { xs: "100%", sm: "auto" } }}
          >
            <BelDirectButton />
            <WhatsAppButton />
          </Stack>

          <Typography
            sx={{
              color: "ink.200",
              fontSize: "0.9375rem",
              lineHeight: 1.6,
              maxWidth: 560,
              mt: "12px !important",
            }}
          >
            Stuur gerust een foto via WhatsApp. Spoed? Ook buiten kantoortijden
            bereikbaar. De offerte is gratis.
          </Typography>

          <Stack
            spacing={0.5}
            sx={{ pt: 2, alignItems: { xs: "center", md: "flex-start" } }}
          >
            <Rating
              value={5}
              readOnly
              size="small"
              getLabelText={(v) => `${v} van 5 sterren`}
            />
            <Typography variant="caption" sx={{ color: "ink.200" }}>
              5.0 — beoordeeld door klanten uit de regio
            </Typography>
          </Stack>

          {/* Trust badges */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 4 }}
            alignItems="center"
            flexWrap="wrap"
            sx={{
              justifyContent: { xs: "center", md: "flex-start" },
              mt: 4,
              width: "100%",
              maxWidth: 720,
              borderTop: `1px solid ${alpha("#FFFFFF", 0.15)}`,
              pt: 4,
            }}
          >
            {TRUST_BADGES.map((badge) => (
              <Stack
                key={badge.label}
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ color: "common.white", opacity: 0.9 }}
              >
                <badge.icon sx={{ fontSize: 24, color: "accent.400" }} />
                <Typography sx={{ fontSize: "0.9375rem", fontWeight: 600 }}>
                  {badge.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
