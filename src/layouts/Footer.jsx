import * as React from "react";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { BelDirectButton, WhatsAppButton } from "@components/CtaButtons";
import { SERVICES } from "@data/services";
import { REGIONS } from "@data/regions";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@data/contact";

const footerLinkSx = {
  color: "ink.200",
  fontWeight: 400,
  "&:hover": { color: "accent.300" },
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        bgcolor: "ink.900",
        color: "ink.200",
        backgroundImage: `radial-gradient(1100px 550px at 12% 0%, ${alpha(theme.palette.accent[400], 0.12)}, transparent 60%)`,
      })}
    >
      {/* Contact band */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
          spacing={4}
          sx={{
            pb: { xs: 6, md: 8 },
            borderBottom: `1px solid ${alpha("#FFFFFF", 0.1)}`,
          }}
        >
          <Box>
            <Typography variant="overline" sx={{ color: "accent.300" }}>
              Direct contact
            </Typography>
            <Typography variant="h3" component="h2" sx={{ color: "common.white", mt: 1 }}>
              Lekkage of ander loodgieterswerk?
            </Typography>
            <Typography sx={{ color: "ink.200", mt: 1.5, maxWidth: 480 }}>
              Bel gerust voor advies of een vrijblijvende offerte — u spreekt
              altijd direct met de vakman zelf.
            </Typography>
          </Box>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <BelDirectButton />
            <WhatsAppButton />
          </Stack>

        </Stack>

        {/* Link columns */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "2fr 1fr 1fr 1fr",
            },
            gap: { xs: 5, md: 8 },
            py: { xs: 6, md: 8 },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "common.white",
              }}
            >
              Juffermans
            </Typography>
            <Typography
              variant="overline"
              sx={{ color: "accent.300", display: "block", mb: 2 }}
            >
              Loodgietersbedrijf
            </Typography>
            <Typography variant="body2" sx={{ color: "ink.300", maxWidth: 320 }}>
              Ambachtelijk lood-, zink- en dakwerk. Waterdicht de beste, al
              generaties lang.
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="caption"
              sx={{
                color: "ink.300",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                display: "block",
                mb: 2,
              }}
            >
              Diensten
            </Typography>
            <Stack spacing={1.25}>
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  component={RouterLink}
                  to={`/diensten/${service.slug}`}
                  sx={footerLinkSx}
                >
                  {service.title}
                </Link>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography
              variant="caption"
              sx={{
                color: "ink.300",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                display: "block",
                mb: 2,
              }}
            >
              Werkgebied
            </Typography>
            <Stack spacing={1.25}>
              {REGIONS.map((region) => (
                <Link
                  key={region.slug}
                  component={RouterLink}
                  to={`/regio/${region.slug}`}
                  sx={footerLinkSx}
                >
                  {region.name}
                </Link>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography
              variant="caption"
              sx={{
                color: "ink.300",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                display: "block",
                mb: 2,
              }}
            >
              Contact
            </Typography>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneRoundedIcon sx={{ fontSize: 18, color: "accent.300" }} />
                <Link
                  href={`tel:${PHONE_TEL}`}
                  sx={{ color: "ink.200", fontWeight: 400, "&:hover": { color: "accent.300" } }}
                >
                  {PHONE_DISPLAY}
                </Link>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <MailOutlineRoundedIcon sx={{ fontSize: 18, color: "accent.300" }} />
                <Link
                  href={`mailto:${EMAIL}`}
                  sx={{ color: "ink.200", fontWeight: 400, "&:hover": { color: "accent.300" } }}
                >
                  {EMAIL}
                </Link>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <WhatsAppIcon sx={{ fontSize: 18, color: "accent.300" }} />
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "ink.200", fontWeight: 400, "&:hover": { color: "accent.300" } }}
                >
                  WhatsApp
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Box>

        {/* Bottom bar */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={1.5}
          sx={{
            py: 3,
            borderTop: `1px solid ${alpha("#FFFFFF", 0.1)}`,
          }}
        >
          <Typography variant="caption" sx={{ color: "ink.300" }}>
            © {new Date().getFullYear()}{" "}
            <Link
              href="https://www.loodgieterjuffermans.nl/"
              sx={{ color: "ink.200", "&:hover": { color: "accent.300" } }}
            >
              Loodgietersbedrijf Juffermans
            </Link>
            . Alle rechten voorbehouden.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link
              component={RouterLink}
              to="/privacy"
              variant="caption"
              sx={{ color: "ink.300", "&:hover": { color: "accent.300" } }}
            >
              Privacy
            </Link>
            <Link
              href="/sitemap.xml"
              variant="caption"
              sx={{ color: "ink.300", "&:hover": { color: "accent.300" } }}
            >
              Sitemap
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
