import * as React from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Box, Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Section from "@components/Section";
import Seo from "@components/Seo";
import { breadcrumbJsonLd } from "@components/Seo/jsonLd";
import JsonLd from "@components/JsonLd";
import Reveal from "@components/Reveal";
import { BelDirectButton, WhatsAppButton } from "@components/CtaButtons";
import NotFound from "@pages/not-found";
import { REGIONS, getRegionBySlug } from "@data/regions";
import { SERVICES } from "@data/services";

import regioImage from "@assets/hero3.jpeg?w=1200&format=webp";
import regioImageSet from "@assets/hero3.jpeg?w=480;800;1200&format=webp&as=srcset";

const HEADER_HEIGHT = 88;

export default function RegioPage() {
  const { slug } = useParams();
  const region = getRegionBySlug(slug);

  if (!region) {
    return <NotFound />;
  }

  const otherRegions = REGIONS.filter((r) => r.slug !== region.slug);
  const path = `/regio/${region.slug}`;
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Werkgebied", path: "/#werkgebied" },
    { name: region.name, path },
  ]);

  return (
    <Box sx={{ pt: `${HEADER_HEIGHT}px` }}>
      <Seo
        title={region.metaTitle}
        description={region.metaDescription}
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
            to="/#werkgebied"
            sx={{ color: "accent.700", fontWeight: 600 }}
          >
            Werkgebied
          </Link>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            {region.name}
          </Typography>
        </Breadcrumbs>

        <Section.Eyebrow>Werkgebied</Section.Eyebrow>
        <Typography variant="h2" component="h1" sx={{ color: "text.primary", mb: 3 }}>
          Loodgieter in {region.name}
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
            {region.intro.map((paragraph) => (
              <Section.Text key={paragraph}>{paragraph}</Section.Text>
            ))}

            {SERVICES.map((service) => {
              const copy = region.serviceCopy?.[service.slug];
              if (!copy) return null;
              return (
                <Box key={service.slug} sx={{ mt: 4 }}>
                  <Typography variant="h4" component="h2" sx={{ mb: 1.5 }}>
                    {copy.heading}
                  </Typography>
                  <Section.Text>{copy.text}</Section.Text>
                  <Link
                    component={RouterLink}
                    to={`/diensten/${service.slug}`}
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
                    Meer over {service.title.toLowerCase()} in {region.name}
                    <ArrowForwardRoundedIcon />
                  </Link>
                </Box>
              );
            })}

            {region.housing ? (
              <Box sx={{ mt: 4 }}>
                <Typography variant="h4" component="h2" sx={{ mb: 1.5 }}>
                  Woningen in {region.name}
                </Typography>
                <Section.Text>{region.housing}</Section.Text>
              </Box>
            ) : null}

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
              src={regioImage}
              srcSet={regioImageSet}
              sizes="(min-width: 768px) 42vw, 100vw"
              alt={`Lood-, zink- en dakwerk in ${region.name}`}
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
        <Section.Heading>Ook actief in</Section.Heading>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, sm: 6 }}>
          {otherRegions.map((other) => (
            <Link
              key={other.slug}
              component={RouterLink}
              to={`/regio/${other.slug}`}
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
              {other.name}
              <ArrowForwardRoundedIcon />
            </Link>
          ))}
        </Stack>
      </Section.Container>
    </Box>
  );
}
