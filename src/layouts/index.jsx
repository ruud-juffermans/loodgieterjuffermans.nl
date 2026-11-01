import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import FloatingCta from "@components/FloatingCta";
import JsonLd from "@components/JsonLd";
import { BUSINESS_JSON_LD } from "@data/businessJsonLd";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
    return (
        <Box
            sx={{
                backgroundColor: "background.default",
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Skip link: visually hidden until it receives keyboard focus */}
            <Box
                component="a"
                href="#main"
                sx={(theme) => ({
                    position: "absolute",
                    top: 8,
                    left: 8,
                    zIndex: theme.zIndex.appBar + 1,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    bgcolor: "common.white",
                    color: "ink.900",
                    fontWeight: 600,
                    textDecoration: "none",
                    transform: "translateY(-200%)",
                    "&:focus": { transform: "none" },
                })}
            >
                Ga naar hoofdinhoud
            </Box>
            <JsonLd data={BUSINESS_JSON_LD} />
            <Header />
            <Box
                component="main"
                id="main"
                tabIndex={-1}
                sx={{ flex: 1, outline: "none" }}
            >
                <Outlet />
            </Box>
            <Footer />
            <FloatingCta />
        </Box>
    );
};

export default Layout;
