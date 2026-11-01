import * as React from "react";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { SERVICES } from "@data/services";
import { REGIONS } from "@data/regions";

const PHONE_NUMBER = "0614149298";

const SECTION_LINKS = [
  { label: "Over mij", to: "/#over-mij" },
  { label: "Reviews", to: "/#reviews" },
  { label: "Diensten", to: "/#diensten" },
  { label: "FAQ", to: "/#faq" },
];

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
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
          spacing={4}
          sx={{
            py: { xs: 8, md: 10 },
            borderBottom: `1px solid ${alpha("#FFFFFF", 0.1)}`,
          }}
        >
          <Box>
            <Typography variant="overline" sx={{ color: "accent.300" }}>
              Direct contact
            </Typography>
            <Typography variant="h3" sx={{ color: "common.white", mt: 1 }}>
              Lekkage of ander loodgieterswerk?
            </Typography>
            <Typography sx={{ color: "ink.200", mt: 1.5, maxWidth: 480 }}>
              Bel gerust voor advies of een vrijblijvende offerte — u spreekt
              altijd direct met de vakman zelf.
            </Typography>
          </Box>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              component="a"
              href={`tel:${PHONE_NUMBER}`}
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<PhoneRoundedIcon />}
            >
              06 14 14 92 98
            </Button>
            <Button
              component="a"
              href="mailto:ronjut@hotmail.nl"
              variant="outlined"
              size="large"
              startIcon={<MailOutlineRoundedIcon />}
              sx={{
                color: "common.white",
                borderColor: alpha("#FFFFFF", 0.35),
                "&:hover": {
                  borderColor: "common.white",
                  backgroundColor: alpha("#FFFFFF", 0.08),
                },
              }}
            >
              E-mail
            </Button>
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
                fontFamily: '"Fraunces", Georgia, serif',
                fontSize: "1.5rem",
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
              Secties
            </Typography>
            <Stack spacing={1.25}>
              {SECTION_LINKS.map((l) => (
                <Link
                  key={l.to}
                  component={RouterLink}
                  to={l.to}
                  sx={footerLinkSx}
                >
                  {l.label}
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
              Diensten &amp; regio
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
              {REGIONS.map((region) => (
                <Link
                  key={region.slug}
                  component={RouterLink}
                  to={`/regio/${region.slug}`}
                  sx={footerLinkSx}
                >
                  Loodgieter {region.name}
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
                  href={`tel:${PHONE_NUMBER}`}
                  sx={{ color: "ink.200", fontWeight: 400, "&:hover": { color: "accent.300" } }}
                >
                  06 14 14 92 98
                </Link>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <MailOutlineRoundedIcon sx={{ fontSize: 18, color: "accent.300" }} />
                <Link
                  href="mailto:ronjut@hotmail.nl"
                  sx={{ color: "ink.200", fontWeight: 400, "&:hover": { color: "accent.300" } }}
                >
                  ronjut@hotmail.nl
                </Link>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PlaceOutlinedIcon sx={{ fontSize: 18, color: "accent.300" }} />
                <Typography variant="body2" sx={{ color: "ink.200" }}>
                  Haarlem, Heemstede e.o.
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        {/* Bottom bar */}
        <Box
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
        </Box>
      </Container>
    </Box>
  );
}
