import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Section from "@components/Section";
import JsonLd from "@components/JsonLd";
import Reveal from "@components/Reveal";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@data/contact";

const FAQ_ITEMS = [
  {
    id: "afspraak",
    question: "Hoe kan ik een afspraak maken?",
    answer:
      "U kunt telefonisch direct contact opnemen. U kunt mij ook gerust een e-mail sturen.",
    links: [
      { label: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
      { label: EMAIL, href: `mailto:${EMAIL}` },
    ],
  },
  {
    id: "offerte",
    question: "Kan ik een offerte krijgen voordat de werkzaamheden beginnen?",
    answer:
      "Absoluut. Ik bied gratis offertes aan na een initiële inspectie van de benodigde werkzaamheden.",
  },
  {
    id: "kosten",
    question: "Wat kost het?",
    answer:
      "Dat hangt af van de omvang van het werk, het materiaal (zink, lood of bitumen) en hoe goed het dak bereikbaar is. Ik kom eerst kijken en u ontvangt vooraf een vrijblijvende offerte, zodat u niet voor verrassingen komt te staan. De offerte is gratis.",
  },
  {
    id: "waarom",
    question: "Waarom kiezen voor Loodgietersbedrijf Juffermans?",
    answer:
      "Het vak is bij Juffermans al generaties lang doorgegeven. U heeft één vast aanspreekpunt, krijgt vakwerk met oog voor detail en garantie op het geleverde werk.",
  },
  {
    id: "gebied",
    question: "In welke gebieden werkt Loodgietersbedrijf Juffermans?",
    answer:
      "Ik rijd door heel Noord-Holland voor speciale projecten, inclusief Haarlem, Heemstede, Bennebroek en Amsterdam.",
  },
];

// FAQPage structured data from the same items, so the markup never drifts
// from what visitors see. Rendered on the homepage only.
const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: [item.answer, ...(item.links ?? []).map((l) => l.label)].join(" "),
    },
  })),
};

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panelId) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panelId : null);
  };

  return (
    <Section.Container id="faq" tone="light">
      <JsonLd data={FAQ_JSON_LD} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 10 },
        }}
      >
        <Reveal sx={{ width: { xs: "100%", md: "38%" }, flexShrink: 0 }}>
          <Section.Eyebrow>FAQ</Section.Eyebrow>
          <Section.Heading>Vaak gestelde vragen</Section.Heading>
          <Section.Subheading>
            Antwoorden op de meest voorkomende vragen over mijn diensten.
          </Section.Subheading>
        </Reveal>

        <Reveal delay={150} sx={{ flex: 1 }}>
          <Stack spacing={2.5}>
            {FAQ_ITEMS.map((item) => {
              const isOpen = expanded === item.id;
              return (
                <Accordion
                  key={item.id}
                  expanded={isOpen}
                  onChange={handleChange(item.id)}
                  sx={(theme) => ({
                    // Same tile treatment as the Diensten cards
                    backgroundColor: "background.default",
                    borderRadius: "20px !important",
                    border: "1px solid",
                    borderBottom: "1px solid",
                    borderColor: isOpen
                      ? "accent.700"
                      : alpha(theme.palette.ink[900], 0.08),
                    boxShadow: isOpen
                      ? `0 18px 40px -22px ${alpha(theme.palette.brand[700], 0.45)}`
                      : `0 1px 2px ${alpha(theme.palette.ink[900], 0.04)}`,
                    transition:
                      "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      borderColor: "accent.400",
                      boxShadow: `0 18px 40px -22px ${alpha(theme.palette.brand[700], 0.45)}`,
                    },
                    "&.Mui-expanded": { margin: 0 },
                  })}
                >
                  <AccordionSummary
                    expandIcon={
                      <AddRoundedIcon
                        sx={{
                          color: "accent.700",
                          transition: "transform 200ms ease",
                          ...(isOpen && { transform: "rotate(45deg)" }),
                        }}
                      />
                    }
                    aria-controls={`${item.id}-content`}
                    id={`${item.id}-header`}
                    sx={{
                      px: { xs: 2.5, sm: 3 },
                      py: { xs: 1.5, sm: 2 },
                      minHeight: 0,
                      "& .MuiAccordionSummary-content": {
                        my: 1,
                        alignItems: "center",
                        gap: { xs: 2, sm: 3 },
                      },
                      "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                        transform: "none",
                      },
                      "&:hover .MuiTypography-root": { color: "text.primary" },
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
                        fontSize: { xs: "1.0625rem", sm: "1.1875rem" },
                        fontWeight: 700,
                        color: isOpen ? "brand.500" : "text.primary",
                        transition: "color 200ms ease",
                      }}
                    >
                      {item.question}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={{
                      px: { xs: 2.5, sm: 3 },
                      pt: 0,
                      pb: 3,
                    }}
                  >
                    <Typography sx={{ color: "text.secondary", maxWidth: 560 }}>
                      {item.answer}
                    </Typography>

                    {item.links?.length ? (
                      <Stack spacing={0.5} sx={{ mt: 2 }}>
                        {item.links.map((l) => (
                          <Link key={l.href} href={l.href}>
                            {l.label}
                          </Link>
                        ))}
                      </Stack>
                    ) : null}
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Stack>
        </Reveal>
      </Box>
    </Section.Container>
  );
}
