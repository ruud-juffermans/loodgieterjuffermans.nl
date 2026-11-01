import * as React from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Box, Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Section from "@components/Section";
import Seo, { SITE_URL } from "@components/Seo";
import { breadcrumbJsonLd } from "@components/Seo/jsonLd";
import JsonLd from "@components/JsonLd";
import Reveal from "@components/Reveal";
import { BelDirectButton, WhatsAppButton } from "@components/CtaButtons";
import NotFound from "@pages/not-found";
import { SERVICES, getServiceBySlug } from "@data/services";
import { REGIONS } from "@data/regions";

const HEADER_HEIGHT = 88;

export default function DienstPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <NotFound />;
  }

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);
  const path = `/diensten/${service.slug}`;
  const heading = service.h1 ?? service.title;

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Diensten", path: "/#diensten" },
      { name: service.title, path },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      serviceType: service.title,
      description: service.metaDescription,
      url: `${SITE_URL}${path}`,
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: REGIONS.map((r) => ({ "@type": "City", name: r.name })),
    },
  ];

  return (
    <Box sx={{ pt: `${HEADER_HEIGHT}px` }}>
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={path}
      />
      <JsonLd data={jsonLd} />

      <Section.Container tone="paper">
        <Reveal>
        <Breadcrumbs aria-label="Kruimelpad" sx={{ mb: 3, fontSize: "0.9375rem" }}>
          <Link component={RouterLink} to="/" sx={{ color: "accent.700", fontWeight: 600 }}>
            Home
          </Link>
          <Link
            component={RouterLink}
            to="/#diensten"
            sx={{ color: "accent.700", fontWeight: 600 }}
          >
            Diensten
          </Link>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            {service.title}
          </Typography>
        </Breadcrumbs>

        <Section.Eyebrow>Dienst</Section.Eyebrow>
        <Typography variant="h2" component="h1" sx={{ color: "text.primary", mb: 3 }}>
          {heading}
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

            <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
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
              <BelDirectButton />
              <WhatsAppButton />
            </Stack>
          </Box>

          <Box sx={{ width: { xs: "100%", md: "42%" }, flexShrink: 0 }}>
            <Box
              component="img"
              src={service.detailImage}
              srcSet={service.detailImageSrcSet}
              sizes="(min-width: 768px) 42vw, 100vw"
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
        <Section.Eyebrow>Werkgebied</Section.Eyebrow>
        <Section.Heading>{service.title} bij u in de buurt</Section.Heading>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 6 }}
          sx={{ mb: { xs: 6, sm: 8 } }}
        >
          {REGIONS.map((region) => (
            <Link
              key={region.slug}
              component={RouterLink}
              to={`/regio/${region.slug}`}
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
              {service.title} in {region.name}
              <ArrowForwardRoundedIcon />
            </Link>
          ))}
        </Stack>

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
