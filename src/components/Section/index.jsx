import { Box, Container, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

/**
 * Section building blocks for the premium look:
 * - Eyebrow: small accent overline label above headings
 * - Heading: bold display heading
 * - Subheading / Text: measured body copy
 * - Container: vertical rhythm + optional tone ("light" | "paper" | "dark")
 */

const SectionEyebrow = ({ children, onDark = false }) => (
    <Typography
        variant="overline"
        component="p"
        sx={{
            color: onDark ? "accent.300" : "accent.700",
            mb: 2,
        }}
    >
        {children}
    </Typography>
);

const SectionHeading = ({ children, onDark = false, align }) => (
    <Typography
        variant="h2"
        component="h2"
        sx={{
            color: onDark ? "common.white" : "text.primary",
            mb: 3,
            textAlign: align,
        }}
    >
        {children}
    </Typography>
);

const SectionSubheading = ({ children, onDark = false, align }) => (
    <Typography
        sx={{
            color: onDark ? "ink.200" : "text.secondary",
            fontSize: { xs: "1rem", sm: "1.0625rem" },
            lineHeight: 1.7,
            maxWidth: 640,
            mb: { xs: 4, sm: 6 },
            textAlign: align,
            ...(align === "center" && { mx: "auto" }),
        }}
    >
        {children}
    </Typography>
);

const SectionText = ({ children, onDark = false }) => (
    <Typography
        sx={{
            color: onDark ? "ink.100" : "text.secondary",
            fontSize: "1.0625rem",
            lineHeight: 1.8,
            mb: 2.5,
            maxWidth: 680,
        }}
    >
        {children}
    </Typography>
);

const TONE_STYLES = {
    light: { backgroundColor: "background.default" },
    paper: { backgroundColor: "paperTone.100" },
    dark: {
        backgroundColor: "ink.800",
        backgroundImage: (theme) => `
            radial-gradient(1000px 500px at 85% 0%, ${alpha(theme.palette.brand[500], 0.3)}, transparent 60%),
            radial-gradient(800px 420px at 8% 100%, ${alpha(theme.palette.accent[400], 0.14)}, transparent 60%)
        `,
    },
};

const SectionContainer = ({ children, tone = "light", id, sx }) => {
    return (
        <Box
            component="section"
            id={id}
            sx={{
                width: "100%",
                ...TONE_STYLES[tone],
                ...sx,
            }}
        >
            {/* Same container as the header and footer so all edges line up */}
            <Container
                maxWidth="xl"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    py: { xs: 8, sm: 12, lg: 14 },
                }}
            >
                {children}
            </Container>
        </Box>
    );
};

const Section = {
    Container: SectionContainer,
    Eyebrow: SectionEyebrow,
    Heading: SectionHeading,
    Subheading: SectionSubheading,
    Text: SectionText,
};

export default Section;
