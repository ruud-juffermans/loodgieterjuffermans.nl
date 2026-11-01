/* eslint-disable react-refresh/only-export-components -- server entry, not a hot-reloaded component */
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import App from "./App.jsx";
import { HeadContext } from "./components/Seo/headContext";

export { PRERENDER_ROUTES } from "./data/routes";

/**
 * Renders one route to static HTML. Returns the body markup, the head data
 * collected by the Seo component, and the critical Emotion style tags so the
 * page is styled before JavaScript runs.
 */
export function render(url) {
  const cache = createCache({ key: "css" });
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);
  const head = {};

  const html = renderToString(
    <StrictMode>
      <CacheProvider value={cache}>
        <HeadContext.Provider value={head}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </HeadContext.Provider>
      </CacheProvider>
    </StrictMode>
  );

  const styles = constructStyleTagsFromChunks(extractCriticalToChunks(html));
  return { html, head, styles };
}
