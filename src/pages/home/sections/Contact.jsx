import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import Section from "@components/Section";
import Reveal from "@components/Reveal";
import {
  ADDRESS,
  EMAIL,
  OPENING_HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@data/contact";

const CONTACT_METHODS = [
  {
    label: "Telefoon",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
    icon: PhoneRoundedIcon,
    color: "brand.500",
  },
  {
    label: "WhatsApp",
    value: "Stuur een bericht",
    href: WHATSAPP_URL,
    icon: WhatsAppIcon,
    color: "whatsapp.main",
    external: true,
  },
  {
    label: "E-mail",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: MailOutlineRoundedIcon,
    color: "brand.500",
  },
];

function ContactMethod(props) {
  const { label, value, href, icon: Icon, color, external } = props;
  return (
    <Stack
      component="a"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      direction="row"
      spacing={2}
      alignItems="center"
      sx={(theme) => ({
        p: 2,
        borderRadius: "12px",
        textDecoration: "none",
        backgroundColor: "background.default",
        border: `1px solid ${alpha(theme.palette.ink[900], 0.08)}`,
        transition: "border-color 200ms ease",
        "&:hover": { borderColor: "brand.500" },
      })}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "12px",
          bgcolor: color,
          color: "common.white",
          flexShrink: 0,
        }}
      >
        <Icon />
      </Box>
      <Box>
        <Typography sx={{ fontWeight: 600, color: "text.primary" }}>
          {label}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {value}
        </Typography>
      </Box>
    </Stack>
  );
}

function SubHeading({ children }) {
  return (
    <Typography
      component="h3"
      sx={{
        fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
        fontSize: "1.5rem",
        fontWeight: 700,
        color: "brand.500",
        mb: 3,
      }}
    >
      {children}
    </Typography>
  );
}

function Label({ children }) {
  return (
    <Typography
      component="h4"
      sx={{ fontSize: "1rem", fontWeight: 600, color: "text.primary", mb: 0.75 }}
    >
      {children}
    </Typography>
  );
}

/**
 * "Contact" section copied from the live site: contact methods on the left,
 * address and opening hours on the right.
 */
export default function Contact() {
  return (
    <Section.Container id="contact" tone="paper">
      <Reveal sx={{ textAlign: "center" }}>
        <Section.Eyebrow>Contact</Section.Eyebrow>
        <Section.Heading align="center">Bel, app of mail, u spreekt mij direct</Section.Heading>
        <Section.Subheading align="center">
          Neem vrijblijvend contact met mij op voor een offerte of advies.
        </Section.Subheading>
      </Reveal>

      <Reveal
        delay={150}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 5, md: 6 },
          alignItems: "start",
        }}
      >
        {/* Contact info */}
        <Box>
          <SubHeading>Neem Contact Op</SubHeading>
          <Stack spacing={2}>
            {CONTACT_METHODS.map((method) => (
              <ContactMethod key={method.label} {...method} />
            ))}
          </Stack>

        </Box>

        {/* Address and opening hours */}
        <Box
          sx={(theme) => ({
            p: { xs: 3, sm: 4 },
            borderRadius: "20px",
            backgroundColor: "background.default",
            border: `1px solid ${alpha(theme.palette.ink[900], 0.08)}`,
          })}
        >
          <SubHeading>Bezoekadres &amp; openingstijden</SubHeading>

          <Box sx={{ mb: 3 }}>
            <Label>Adres</Label>
            <Typography
              component="address"
              sx={{ fontStyle: "normal", color: "text.secondary", lineHeight: 1.8 }}
            >
              {ADDRESS.company}
              <br />
              {ADDRESS.street}
              <br />
              {ADDRESS.postalCode} {ADDRESS.city}
              <br />
              {ADDRESS.country}
            </Typography>
          </Box>

          <Box>
            <Label>Openingstijden</Label>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              {OPENING_HOURS.map((row) => (
                <React.Fragment key={row.days}>
                  {row.days}: {row.hours}
                  <br />
                </React.Fragment>
              ))}
            </Typography>
            <Typography sx={{ color: "brand.500", fontWeight: 500, mt: 1 }}>
              Spoed? Bel mij ook buiten kantoortijden.
            </Typography>
          </Box>
        </Box>
      </Reveal>
    </Section.Container>
  );
}
