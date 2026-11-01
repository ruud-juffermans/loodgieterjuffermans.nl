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
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Section from "@components/Section";
import Reveal from "@components/Reveal";

const FAQ_ITEMS = [
  {
    id: "afspraak",
    question: "Hoe kan ik een afspraak maken?",
    answer:
      "U kunt telefonisch direct contact opnemen. U kunt mij ook gerust een e-mail sturen.",
    links: [
      { label: "06 14 14 92 98", href: "tel:0614149298" },
      {
        label: "ronjut@hotmail.nl",
        href: "mailto:ronjut@hotmail.nl",
      },
    ],
  },
  {
    id: "offerte",
    question: "Kan ik een offerte krijgen voordat de werkzaamheden beginnen?",
    answer:
      "Absoluut. Ik bied gratis offertes aan na een initiële inspectie van de benodigde werkzaamheden.",
  },
  {
    id: "waarom",
    question: "Waarom kiezen voor Loodgietersbedrijf Juffermans?",
    answer:
      "Met meer dan zeven decennia ervaring biedt elk project een garantie voor kwaliteit en duurzaamheid.",
  },
  {
    id: "gebied",
    question: "In welke gebieden werk ik?",
    answer:
      "Ik rijd door heel Noord-Holland voor speciale projecten, inclusief Haarlem, Heemstede, Bennebroek en Amsterdam.",
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panelId) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panelId : null);
  };

  return (
    <Section.Container id="faq" tone="paper">
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
            Staat uw vraag er niet tussen? Neem gerust contact op — ik denk
            graag met u mee.
          </Section.Subheading>
        </Reveal>

        <Reveal delay={150} sx={{ flex: 1 }}>
          {FAQ_ITEMS.map((item) => {
            const isOpen = expanded === item.id;
            return (
              <Accordion
                key={item.id}
                expanded={isOpen}
                onChange={handleChange(item.id)}
              >
                <AccordionSummary
                  expandIcon={
                    <AddRoundedIcon
                      sx={{
                        color: "accent.500",
                        transition: "transform 200ms ease",
                        ...(isOpen && { transform: "rotate(45deg)" }),
                      }}
                    />
                  }
                  aria-controls={`${item.id}-content`}
                  id={`${item.id}-header`}
                  sx={{
                    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                      transform: "none",
                    },
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: '"Fraunces", Georgia, serif',
                      fontSize: "1.1875rem",
                      fontWeight: 500,
                      color: "text.primary",
                    }}
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
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
        </Reveal>
      </Box>
    </Section.Container>
  );
}
