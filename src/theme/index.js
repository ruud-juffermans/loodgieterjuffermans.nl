import { alpha } from '@mui/material/styles';
import breakpoints from './breakpoints';

// ---------------------------------------------------------------------------
// Premium palette — deep ink navy, refined brand blue, light water-blue accent.
// The accent picks up the light blue of the logo (#6EBDEB): stromend water.
// ---------------------------------------------------------------------------

export const ink = {
  50:  '#F4F7F9',
  100: '#DDE6EC',
  200: '#B7C8D3',
  300: '#8AA3B3',
  400: '#5C7B8F',
  500: '#3B5B6F',
  600: '#264456',
  700: '#16303F',
  800: '#0E2230',
  900: '#081720',
};

export const brand = {
  50:  '#EEF6FB',
  100: '#D6E9F4',
  200: '#AECFE7',
  300: '#7FB2D6',
  400: '#3F85B8',
  500: '#0E5D8B',
  600: '#0C527C',
  700: '#0A4568',
  800: '#073654',
  900: '#05263D',
};

export const accent = {
  50:  '#F1F9FE',
  100: '#DCF0FB',
  200: '#BBE1F6',
  300: '#93CFF0',
  400: '#6EBDEB', // logo light blue
  500: '#4BA6DC',
  600: '#3389BC',
  700: '#286D96',
  800: '#1D5071',
  900: '#13374E',
};

export const paper = {
  0:   '#FFFFFF',
  50:  '#FBFAF8', // warm off-white
  100: '#F5F2ED',
  200: '#E9E4DC',
};

export const grey = {
  50:  '#F8F9FA',
  100: '#EDF0F2',
  200: '#DCE1E5',
  300: '#C2CBD2',
  400: '#98A6B0',
  500: '#67707A',
  600: '#4E5860',
  700: '#39424A',
  800: '#232B31',
  900: '#12181D',
};

const display = '"Plus Jakarta Sans", "Inter", sans-serif';
const sans = '"Inter", "Helvetica Neue", Arial, sans-serif';

const getDesignTokens = () => ({
  palette: {
    primary: {
      light: brand[300],
      main: brand[500],
      dark: brand[700],
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: accent[300],
      main: accent[500],
      dark: accent[700],
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#E8A33D',
      dark: '#C4831F',
    },
    error: {
      light: '#FDECEA',
      main: '#C0392B',
      dark: '#922B21',
    },
    success: {
      light: '#A9DFBF',
      main: '#27AE60',
      dark: '#1E8449',
    },
    // Darker than WhatsApp's own green so white text passes WCAG AA (5.4:1)
    whatsapp: {
      main: '#0F7A3A',
      dark: '#0B5F2D',
      contrastText: '#FFFFFF',
    },
    grey,
    divider: alpha(ink[900], 0.1),
    background: {
      default: paper[0],
      paper: paper[50],
    },
    text: {
      primary: ink[800],
      secondary: grey[600],
    },
    action: {
      selected: alpha(brand[200], 0.16),
    },
    // custom slots, reachable via theme.palette.ink / .brand / .accent / .paperTone
    ink,
    brand,
    accent,
    paperTone: paper,
  },
  typography: {
    fontFamily: sans,
    h1: {
      fontFamily: display,
      fontSize: 'clamp(2.5rem, 6vw, 4.25rem)',
      fontWeight: 700,
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: display,
      fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: '-0.015em',
    },
    h3: {
      fontFamily: display,
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: display,
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.35,
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontWeight: 400,
      fontSize: '1.0625rem',
      lineHeight: 1.75,
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.9375rem',
      lineHeight: 1.65,
    },
    caption: {
      fontWeight: 500,
      fontSize: '0.8125rem',
      letterSpacing: '0.02em',
    },
    overline: {
      fontWeight: 700,
      fontSize: '0.8125rem',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default function getTheme() {
  return {
    ...getDesignTokens(),
    breakpoints,
    components: {
      MuiAccordion: {
        defaultProps: {
          elevation: 0,
          disableGutters: true,
        },
        styleOverrides: {
          root: {
            backgroundColor: 'transparent',
            borderBottom: `1px solid ${alpha(ink[900], 0.1)}`,
            '&:before': {
              display: 'none',
            },
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            padding: '8px 4px',
            minHeight: 72,
            '&:hover .MuiTypography-root': {
              color: brand[600],
            },
          },
          content: {
            margin: '16px 0',
          },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            padding: '0 4px 28px',
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            boxSizing: 'border-box',
            transition: 'all 160ms ease',
            // Two-tone ring: dark outline with a white inner ring, visible on
            // light and dark backgrounds alike
            '&:focus-visible': {
              outline: `3px solid ${ink[800]}`,
              outlineOffset: '2px',
              boxShadow: '0 0 0 2px #FFFFFF',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            boxShadow: 'none',
            borderRadius: 999,
            textTransform: 'none',
            fontSize: '1rem',
            padding: '12px 28px',
            '&:active': {
              transform: 'scale(0.98)',
            },
            ...(ownerState.size === 'small' && {
              padding: '6px 18px',
              fontSize: '0.875rem',
            }),
            ...(ownerState.size === 'large' && {
              padding: '16px 36px',
              fontSize: '1.0625rem',
            }),
            ...(ownerState.variant === 'contained' &&
              ownerState.color === 'primary' && {
                color: '#FFFFFF',
                backgroundColor: ink[800],
                '&:hover': {
                  backgroundColor: ink[700],
                  boxShadow: `0 12px 32px -12px ${alpha(ink[900], 0.5)}`,
                },
              }),
            ...(ownerState.variant === 'contained' &&
              ownerState.color === 'secondary' && {
                color: '#FFFFFF',
                background: `linear-gradient(135deg, ${accent[500]} 0%, ${accent[700]} 100%)`,
                '&:hover': {
                  background: `linear-gradient(135deg, ${accent[600]} 0%, ${accent[800]} 100%)`,
                  boxShadow: `0 12px 32px -12px ${alpha(accent[700], 0.7)}`,
                  transform: 'translateY(-1px)',
                },
              }),
            ...(ownerState.variant === 'outlined' && {
              borderColor: alpha(ink[800], 0.25),
              color: ink[800],
              backgroundColor: 'transparent',
              '&:hover': {
                borderColor: ink[800],
                backgroundColor: alpha(ink[800], 0.04),
              },
            }),
            ...(ownerState.variant === 'text' && {
              color: brand[600],
              '&:hover': {
                backgroundColor: alpha(brand[500], 0.06),
              },
            }),
          }),
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: paper[0],
            backgroundImage: 'none',
            borderRadius: 20,
            border: `1px solid ${alpha(ink[900], 0.08)}`,
            boxShadow: `0 1px 2px ${alpha(ink[900], 0.04)}`,
            transition: 'border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 500,
            borderRadius: 999,
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: alpha(ink[900], 0.08),
          },
        },
      },
      MuiLink: {
        defaultProps: {
          underline: 'none',
        },
        styleOverrides: {
          root: {
            color: brand[600],
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'color 150ms ease',
            '&:hover': {
              color: accent[700],
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiRating: {
        styleOverrides: {
          iconFilled: {
            color: '#B8860B',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 12,
              backgroundColor: paper[0],
              '& fieldset': {
                borderColor: alpha(ink[900], 0.15),
              },
              '&:hover fieldset': {
                borderColor: alpha(ink[900], 0.35),
              },
              '&.Mui-focused fieldset': {
                borderColor: brand[500],
                borderWidth: 1,
              },
            },
          },
        },
      },
    },
  };
}
