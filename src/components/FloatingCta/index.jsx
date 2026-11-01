import { Box, IconButton } from "@mui/material";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { PHONE_TEL, WHATSAPP_URL } from "@data/contact";

const buttonSx = {
  width: 56,
  height: 56,
  color: "common.white",
  boxShadow: "0 10px 15px rgba(0, 0, 0, 0.15)",
  transition: "transform 200ms ease, box-shadow 200ms ease",
  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: "0 14px 24px rgba(0, 0, 0, 0.2)",
  },
};

/**
 * Phone and WhatsApp buttons fixed to the bottom-right corner on tablet and
 * desktop. Hidden on phones, where they overlapped the hero buttons and
 * content; the header shows a phone button there instead.
 */
export default function FloatingCta() {
  return (
    <Box
      component="aside"
      aria-label="Snel contact"
      sx={{
        position: "fixed",
        bottom: 32,
        right: 32,
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        gap: 1.5,
        zIndex: (theme) => theme.zIndex.appBar - 1,
      }}
    >
      <IconButton
        component="a"
        href={`tel:${PHONE_TEL}`}
        aria-label="Bel Loodgietersbedrijf Juffermans"
        sx={(theme) => ({
          ...buttonSx,
          backgroundColor: theme.palette.brand[500],
          "&:hover": { ...buttonSx["&:hover"], backgroundColor: theme.palette.brand[700] },
        })}
      >
        <PhoneRoundedIcon />
      </IconButton>
      <IconButton
        component="a"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Stuur een WhatsApp-bericht"
        sx={(theme) => ({
          ...buttonSx,
          backgroundColor: theme.palette.whatsapp.main,
          "&:hover": { ...buttonSx["&:hover"], backgroundColor: theme.palette.whatsapp.dark },
        })}
      >
        <WhatsAppIcon />
      </IconButton>
    </Box>
  );
}
