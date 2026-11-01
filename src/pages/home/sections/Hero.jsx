import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

import heroImage from "@assets/hero1.jpeg";

const PHONE_NUMBER = "0614149298";

const TRUST_ITEMS = [
  { value: "70+", label: "jaar familie-vakmanschap" },
  { value: "1", label: "vast aanspreekpunt" },
  { value: "Gratis", label: "offerte aan huis" },
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
      {/* Background photo with a slow Ken Burns zoom */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "heroZoom 26s ease-in-out infinite alternate",
          willChange: "transform",
        }}
      />

      {/* Ink overlay for legibility, with drifting water-blue glows */}
      <Box
        aria-hidden="true"
        sx={(theme) => ({
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(180deg, ${alpha(theme.palette.ink[900], 0.82)} 0%, ${alpha(theme.palette.ink[900], 0.68)} 55%, ${alpha(theme.palette.ink[900], 0.88)} 100%)
          `,
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
          animation: "glowDrift 18s ease-in-out infinite",
        })}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          spacing={4}
          alignItems="center"
          textAlign="center"
          sx={{
            py: { xs: 16, md: 20 },
            maxWidth: 860,
            mx: "auto",
            // Staggered entrance
            "& > *": {
              animation: "fadeUp 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
            },
            "& > *:nth-of-type(2)": { animationDelay: "120ms" },
            "& > *:nth-of-type(3)": { animationDelay: "240ms" },
            "& > *:nth-of-type(4)": { animationDelay: "360ms" },
            "& > *:nth-of-type(5)": { animationDelay: "480ms" },
            "& > *:nth-of-type(6)": { animationDelay: "600ms" },
          }}
        >
          <Typography variant="overline" sx={{ color: "accent.300" }}>
            Waterdicht de beste — Haarlem &amp; omgeving
          </Typography>

          <Typography variant="h1" sx={{ color: "common.white" }}>
            Vakwerk in lood, zink{" "}
            <Box
              component="span"
              sx={(theme) => ({
                fontStyle: "italic",
                background: `linear-gradient(100deg, ${theme.palette.accent[200]} 0%, ${theme.palette.accent[400]} 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "accent.200",
              })}
            >
              &amp; dakbedekking
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "ink.100",
              fontSize: { xs: "1.0625rem", md: "1.1875rem" },
              lineHeight: 1.7,
              maxWidth: 620,
            }}
          >
            Loodgietersbedrijf Juffermans staat voor ambachtelijk werk dat de
            tand des tijds doorstaat. Persoonlijk, betrouwbaar en altijd met
            oog voor detail.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ pt: 1, width: { xs: "100%", sm: "auto" } }}
          >
            <Button
              component="a"
              href={`tel:${PHONE_NUMBER}`}
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<PhoneRoundedIcon />}
            >
              Bel 06 14 14 92 98
            </Button>
            <Button
              component="a"
              href="mailto:ronjut@hotmail.nl"
              variant="outlined"
              size="large"
              startIcon={<MailOutlineRoundedIcon />}
              sx={{
                color: "common.white",
                borderColor: alpha("#FFFFFF", 0.4),
                "&:hover": {
                  borderColor: "common.white",
                  backgroundColor: alpha("#FFFFFF", 0.08),
                },
              }}
            >
              Stuur een e-mail
            </Button>
          </Stack>

          <Stack alignItems="center" spacing={0.5} sx={{ pt: 2 }}>
            <Rating value={5} readOnly size="small" />
            <Typography variant="caption" sx={{ color: "ink.200" }}>
              5.0 — beoordeeld door klanten uit de regio
            </Typography>
          </Stack>

          {/* Trust bar */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2.5, sm: 0 }}
            sx={{
              mt: 4,
              width: "100%",
              maxWidth: 720,
              borderTop: `1px solid ${alpha("#FFFFFF", 0.15)}`,
              pt: 4,
              "& > *": {
                flex: 1,
              },
            }}
          >
            {TRUST_ITEMS.map((item) => (
              <Stack key={item.label} spacing={0.5} alignItems="center">
                <Typography
                  sx={{
                    fontFamily: '"Fraunces", Georgia, serif',
                    fontSize: "1.75rem",
                    fontWeight: 500,
                    color: "common.white",
                    lineHeight: 1,
                  }}
                >
                  {item.value}
                </Typography>
                <Typography variant="caption" sx={{ color: "ink.200" }}>
                  {item.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
