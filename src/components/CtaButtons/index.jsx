import { Button } from "@mui/material";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@data/contact";

const baseSx = {
  borderRadius: "8px",
  px: 3,
  py: 1.5,
  fontWeight: 600,
  color: "common.white",
  whiteSpace: { xs: "normal", sm: "nowrap" },
  boxShadow: "none",
  "&:hover": { boxShadow: "none" },
};

/** Solid blue "Bel Direct" button with the phone number, as on the live site. */
export function BelDirectButton({ sx, label, ...props }) {
  return (
    <Button
      component="a"
      href={`tel:${PHONE_TEL}`}
      variant="contained"
      size="large"
      startIcon={<PhoneRoundedIcon />}
      sx={(theme) => ({
        ...baseSx,
        backgroundColor: theme.palette.brand[500],
        "&:hover": {
          boxShadow: "none",
          backgroundColor: theme.palette.brand[700],
          color: "common.white",
        },
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
      {...props}
    >
      {label ?? `Bel Direct: ${PHONE_DISPLAY}`}
    </Button>
  );
}

/** Solid green WhatsApp button that opens a chat in a new tab. */
export function WhatsAppButton({ sx, label = "WhatsApp", ...props }) {
  return (
    <Button
      component="a"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      variant="contained"
      size="large"
      startIcon={<WhatsAppIcon />}
      sx={(theme) => ({
        ...baseSx,
        backgroundColor: theme.palette.whatsapp.main,
        "&:hover": {
          boxShadow: "none",
          backgroundColor: theme.palette.whatsapp.dark,
          color: "common.white",
        },
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
      {...props}
    >
      {label}
    </Button>
  );
}
