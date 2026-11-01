import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "@pages/home";
import DienstPage from "@pages/diensten";
import RegioPage from "@pages/regio";
import PrivacyPage from "@pages/privacy";
import GalerijPage from "@pages/galerij";
import NotFound from "@pages/not-found";
import Layout from "@layouts";

const HEADER_HEIGHT = 88;

/**
 * Scrolls to the hash target (compensating for the fixed header) after each
 * navigation, or back to the top when there is no hash.
 */
const ScrollManager = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // On the initial load the browser handles scroll and focus itself.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (!location.hash) return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const behavior = reduceMotion ? "auto" : "smooth";

    // Move keyboard/screen-reader focus to the new content so a route change
    // is announced and the next Tab lands in the right place.
    const focus = (el) => {
      if (!el) return;
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    };

    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
        window.scrollTo({ top: y, behavior });
        focus(el);
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0 });
    focus(document.querySelector("main h1"));
  }, [location]);

  return null;
};

/** Route table; wrapped in BrowserRouter (client) or StaticRouter (prerender). */
const AppRoutes = () => {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/diensten/:slug" element={<DienstPage />} />
          <Route path="/regio/:slug" element={<RegioPage />} />
          <Route path="/galerij" element={<GalerijPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
