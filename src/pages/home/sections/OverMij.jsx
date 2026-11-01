import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import Section from "@components/Section";
import Reveal from "@components/Reveal";

import portretImage from "@assets/home3.jpeg?w=1200&format=webp";
import portretImageSet from "@assets/home3.jpeg?w=480;800;1200&format=webp&as=srcset";

const HIGHLIGHTS = [
  "Specialist in zink- en loodwerk",
  "Dakbedekking voor platte daken, dakkapellen en aanbouwen",
  "Snel ter plaatse in Haarlem, Heemstede en Bennebroek",
  "Altijd één vast aanspreekpunt",
];

export default function OverMij() {
  return (
    <Section.Container id="over-mij" tone="paper">
      <Reveal
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 6, md: 10 },
          alignItems: "center",
        }}
      >
        {/* Image with offset accent frame */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "42%" },
            flexShrink: 0,
          }}
        >
          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              top: 20,
              left: -20,
              right: 20,
              bottom: -20,
              borderRadius: "24px",
              border: "1px solid",
              borderColor: "accent.300",
              display: { xs: "none", sm: "block" },
            }}
          />
          <Box
            component="img"
            src={portretImage}
            srcSet={portretImageSet}
            sizes="(min-width: 768px) 42vw, 100vw"
            alt="Loodgieter Juffermans zet een zinken dakgoot op maat op zijn werkbank"
            loading="lazy"
            decoding="async"
            sx={{
              position: "relative",
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

        <Box sx={{ flex: 1 }}>
          <Section.Eyebrow>Over mij</Section.Eyebrow>
          <Section.Heading>
            Een ambacht dat van generatie op generatie is doorgegeven
          </Section.Heading>
          <Section.Text>
            Loodgietersbedrijf Juffermans is gespecialiseerd in zinkwerk,
            loodwerk en dakdekken in Haarlem, Heemstede, Bennebroek en
            omgeving. Een lekkende dakgoot, versleten lood bij de schoorsteen
            of een plat dak dat aan vervanging toe is: ik kom kijken en los
            het op.
          </Section.Text>
          <Section.Text>
            Ik sta bekend om mijn klantgerichte aanpak en vakwerk. Bij mij
            heeft u altijd één aanspreekpunt en kunt u vertrouwen op
            professionaliteit — van de eerste inspectie tot de laatste
            soldeernaad.
          </Section.Text>

          <Stack spacing={1.5} sx={{ mt: 4 }}>
            {HIGHLIGHTS.map((item) => (
              <Stack key={item} direction="row" spacing={1.5} alignItems="center">
                <CheckCircleOutlineRoundedIcon
                  sx={{ color: "accent.500", fontSize: 22 }}
                />
                <Typography sx={{ color: "text.primary", fontWeight: 500 }}>
                  {item}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Reveal>
    </Section.Container>
  );
}
