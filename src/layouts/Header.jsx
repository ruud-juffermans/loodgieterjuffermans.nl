import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Link as RouterLink, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useActiveSection from "@hooks/useActiveSection";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { BelDirectButton, WhatsAppButton } from "@components/CtaButtons";
import { PHONE_TEL } from "@data/contact";

import Logo from "@assets/logo.svg";


const NAV_ITEMS = [
  { label: "Over mij", id: "over-mij", to: "/#over-mij" },
  { label: "Diensten", id: "diensten", to: "/#diensten" },
  { label: "Galerij", id: "galerij", to: "/galerij" },
  { label: "Werkgebied", id: "werkgebied", to: "/#werkgebied" },
  { label: "Contact", id: "contact", to: "/#contact" },
];

const HEADER_HEIGHT = 88;

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const { pathname } = useLocation();
  const sectionIds = NAV_ITEMS.map((n) => n.id);
  const activeSection = useActiveSection(sectionIds);
  // Section highlighting applies on the homepage; the gallery page lights
  // up its own menu item.
  const active =
    pathname === "/" ? activeSection : pathname === "/galerij" ? "galerij" : null;

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        height: HEADER_HEIGHT,
        justifyContent: "center",
        bgcolor: alpha("#FFFFFF", 0.85),
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: (theme) => `1px solid ${alpha(theme.palette.ink[900], 0.08)}`,
        color: "text.primary",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ gap: 2 }}>
          <Box
            component={RouterLink}
            to="/"
            aria-label="Naar de homepage"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              color: "inherit",
              flexGrow: { xs: 1, lg: 0 },
              mr: { lg: 4 },
            }}
          >
            <img
              src={Logo}
              style={{ height: 52 }}
              alt="Logo Loodgietersbedrijf Juffermans"
            />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography
                sx={{
                  fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: "ink.800",
                }}
              >
                Juffermans
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "accent.700",
                  fontWeight: 600,
                }}
              >
                Loodgietersbedrijf
              </Typography>
            </Box>
          </Box>

          {/* Desktop menu */}
          <Box
            component="nav"
            aria-label="Hoofdmenu"
            sx={{
              display: { xs: "none", lg: "flex" },
              gap: 0.5,
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.id}
                component={RouterLink}
                to={item.to}
                size="small"
                sx={{
                  color: active === item.id ? "ink.900" : "grey.600",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  px: 2,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: "50%",
                    bottom: 2,
                    transform: "translateX(-50%)",
                    width: active === item.id ? 20 : 0,
                    height: 2,
                    borderRadius: 1,
                    bgcolor: "accent.500",
                    transition: "width 200ms ease",
                  },
                  "&:hover": {
                    color: "ink.900",
                    backgroundColor: "transparent",
                    "&::after": { width: 20 },
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Desktop call-to-action, same style as the hero buttons */}
          <BelDirectButton
            size="medium"
            sx={{
              display: { xs: "none", lg: "inline-flex" },
              px: 2.5,
              py: 1.25,
              fontSize: "0.9375rem",
            }}
          />

          {/* Mobile phone button (floating buttons are hidden on phones) */}
          <IconButton
            component="a"
            href={`tel:${PHONE_TEL}`}
            aria-label="Bel Loodgietersbedrijf Juffermans"
            sx={(theme) => ({
              display: { xs: "inline-flex", lg: "none" },
              color: "common.white",
              bgcolor: theme.palette.brand[500],
              "&:hover": { bgcolor: theme.palette.brand[700] },
            })}
          >
            <PhoneRoundedIcon />
          </IconButton>

          {/* Mobile hamburger */}
          <IconButton
            aria-label="Menu openen"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "inline-flex", lg: "none" }, color: "ink.800" }}
          >
            <MenuIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          "aria-label": "Navigatiemenu",
          sx: {
            width: 320,
            bgcolor: "ink.800",
            color: "common.white",
            p: 1,
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
          <Typography
            sx={{
              fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
              fontSize: "1.25rem",
              fontWeight: 700,
            }}
          >
            Menu
          </Typography>
          <Box sx={{ flex: 1 }} />
          <IconButton
            aria-label="Menu sluiten"
            onClick={() => setOpen(false)}
            sx={{ color: "common.white" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box component="nav" aria-label="Mobiel menu">
        <List sx={{ px: 1 }}>
          {NAV_ITEMS.map((item) => (
            <ListItemButton
              key={item.id}
              component={RouterLink}
              to={item.to}
              onClick={() => setOpen(false)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                ...(active === item.id && {
                  backgroundColor: alpha("#FFFFFF", 0.08),
                }),
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  sx: {
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
        </Box>

        <Stack spacing={1.5} sx={{ mt: "auto", p: 2 }}>
          <BelDirectButton fullWidth />
          <WhatsAppButton fullWidth />
        </Stack>
      </Drawer>
    </AppBar>
  );
}
