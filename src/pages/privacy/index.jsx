import { Link as RouterLink } from "react-router-dom";
import { Box, Link, Typography } from "@mui/material";
import Section from "@components/Section";
import Seo from "@components/Seo";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@data/contact";

const HEADER_HEIGHT = 88;
const LAST_UPDATED = "1 november 2026";

function H2({ children }) {
  return (
    <Typography variant="h4" component="h2" sx={{ mt: 5, mb: 1.5 }}>
      {children}
    </Typography>
  );
}

export default function PrivacyPage() {
  return (
    <Box sx={{ pt: `${HEADER_HEIGHT}px` }}>
      <Seo
        title="Privacyverklaring | Loodgietersbedrijf Juffermans"
        description="Hoe Loodgietersbedrijf Juffermans omgaat met uw gegevens: geen cookies, geen tracking, alleen de contactgegevens die u zelf deelt."
        path="/privacy"
      />

      <Section.Container tone="paper">
        <Section.Eyebrow>Privacy</Section.Eyebrow>
        <Typography variant="h2" component="h1" sx={{ color: "text.primary", mb: 1 }}>
          Privacyverklaring
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 4 }}>
          Laatst bijgewerkt: {LAST_UPDATED}
        </Typography>

        <Box sx={{ maxWidth: 720 }}>
          <Section.Text>
            {ADDRESS.company} is een eenmanszaak, gevestigd aan de{" "}
            {ADDRESS.street}, {ADDRESS.postalCode} {ADDRESS.city}. Ik ga
            zorgvuldig om met uw gegevens en verwerk niet meer dan nodig is om
            uw vraag te beantwoorden en het werk uit te voeren.
          </Section.Text>

          <H2>Deze website plaatst geen cookies</H2>
          <Section.Text>
            De website gebruikt geen cookies, geen analytics en geen
            advertentie- of trackingscripts. Er wordt niets over uw bezoek
            bijgehouden. De lettertypen worden geladen vanaf Google Fonts;
            daarbij ontvangt Google het IP-adres van uw browser. Verder wordt
            er bij het bekijken van de site geen informatie met derden gedeeld.
          </Section.Text>

          <H2>Welke gegevens ik verwerk</H2>
          <Section.Text>
            Als u belt, een e-mail stuurt of een WhatsApp-bericht stuurt,
            ontvang ik de gegevens die u daarbij zelf deelt: uw naam,
            telefoonnummer of e-mailadres, het adres waar het werk moet
            gebeuren en eventuele foto's van de situatie. Ik gebruik deze
            gegevens alleen om contact met u op te nemen, een offerte te maken
            en het werk uit te voeren en te factureren.
          </Section.Text>
          <Section.Text>
            WhatsApp is een dienst van Meta. Berichten die u via WhatsApp
            stuurt vallen daarmee ook onder het privacybeleid van WhatsApp.
          </Section.Text>

          <H2>Bewaartermijn</H2>
          <Section.Text>
            Gegevens die horen bij een uitgevoerde opdracht, zoals offertes en
            facturen, bewaar ik zeven jaar vanwege de wettelijke
            bewaarplicht van de Belastingdienst. Berichten en foto's die niet
            tot een opdracht leiden, verwijder ik zodra uw vraag is afgehandeld.
          </Section.Text>

          <H2>Delen met derden</H2>
          <Section.Text>
            Ik verkoop uw gegevens niet en deel ze niet met anderen, behalve
            wanneer dat nodig is voor de administratie (zoals een boekhouder)
            of wanneer de wet dat verplicht.
          </Section.Text>

          <H2>Uw rechten</H2>
          <Section.Text>
            U heeft het recht om uw gegevens in te zien, te laten corrigeren of
            te laten verwijderen, voor zover de wettelijke bewaarplicht dat
            toelaat. Stuur daarvoor een e-mail naar{" "}
            <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link> of bel{" "}
            <Link href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</Link>. Komt u er
            met mij niet uit, dan kunt u een klacht indienen bij de Autoriteit
            Persoonsgegevens.
          </Section.Text>

          <H2>Wijzigingen</H2>
          <Section.Text>
            Als er iets verandert in hoe deze website werkt of hoe ik met
            gegevens omga, pas ik deze verklaring aan. De datum bovenaan geeft
            de laatste wijziging aan.
          </Section.Text>

          <Typography sx={{ mt: 5 }}>
            <Link component={RouterLink} to="/" sx={{ fontWeight: 600 }}>
              Terug naar de homepage
            </Link>
          </Typography>
        </Box>
      </Section.Container>
    </Box>
  );
}
