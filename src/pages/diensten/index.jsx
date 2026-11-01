import * as React from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Section from "@components/Section";
import Seo from "@components/Seo";
import Reveal from "@components/Reveal";
import NotFound from "@pages/not-found";
import { SERVICES, getServiceBySlug } from "@data/services";

const PHONE_NUMBER = "0614149298";
const HEADER_HEIGHT = 88;

export default function DienstPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <NotFound />;
  }

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <Box sx={{ pt: `${HEADER_HEIGHT}px` }}>
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/diensten/${service.slug}`}
      />

      <Section.Container tone="paper">
        <Reveal>
        <Link
          component={RouterLink}
          to="/#diensten"
          variant="body2"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            color: "accent.700",
            fontWeight: 600,
            mb: 3,
            "& > svg": { fontSize: 18 },
          }}
        >
          <ArrowBackRoundedIcon />
          Alle diensten
        </Link>

        <Section.Eyebrow>Dienst</Section.Eyebrow>
        <Typography variant="h2" component="h1" sx={{ color: "text.primary", mb: 3 }}>
          {service.title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 5, md: 10 },
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ flex: 1 }}>
            {service.intro.map((paragraph) => (
              <Section.Text key={paragraph}>{paragraph}</Section.Text>
            ))}

            <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
              {service.tasksTitle}
            </Typography>
            <Stack spacing={1.5}>
              {service.tasks.map((task) => (
                <Stack key={task} direction="row" spacing={1.5} alignItems="center">
                  <CheckCircleOutlineRoundedIcon
                    sx={{ color: "accent.500", fontSize: 22 }}
                  />
                  <Typography sx={{ color: "text.primary", fontWeight: 500 }}>
                    {task}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 5 }}
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
              >
                Vraag een offerte aan
              </Button>
            </Stack>
          </Box>

          <Box sx={{ width: { xs: "100%", md: "42%" }, flexShrink: 0 }}>
            <Box
              component="img"
              src={service.detailImage}
              alt={service.imageAlt}
              loading="lazy"
              decoding="async"
              sx={{
                width: "100%",
                aspectRatio: "4 / 5",
                objectFit: "cover",
                borderRadius: "24px",
                display: "block",
                boxShadow: (theme) =>
                  `0 24px 60px -24px ${theme.palette.ink[900]}66`,
              }}
            />
          </Box>
        </Box>
        </Reveal>
      </Section.Container>

      <Section.Container tone="light" sx={{ borderTop: 1, borderColor: "divider" }}>
        <Section.Eyebrow>Meer diensten</Section.Eyebrow>
        <Section.Heading>Ook interessant voor u</Section.Heading>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 6 }}
        >
          {otherServices.map((other) => (
            <Link
              key={other.slug}
              component={RouterLink}
              to={`/diensten/${other.slug}`}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                fontWeight: 600,
                color: "accent.700",
                "& > svg": { transition: "transform 150ms ease", fontSize: 18 },
                "&:hover > svg": { transform: "translateX(3px)" },
              }}
            >
              {other.title}
              <ArrowForwardRoundedIcon />
            </Link>
          ))}
        </Stack>
      </Section.Container>
    </Box>
  );
}
