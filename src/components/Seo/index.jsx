import { useContext, useEffect } from "react";
import { HeadContext } from "./headContext";
import { SITE_URL } from "@data/site";

export { SITE_URL };

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Per-route head data: title, description, canonical and Open Graph.
 * During prerendering the values are collected through HeadContext and
 * written into the static HTML. In the browser they are applied to
 * document.head on client-side navigation.
 */
export default function Seo({ title, description, path = "/", noindex = false }) {
  const head = useContext(HeadContext);
  if (head) {
    Object.assign(head, { title, description, path, noindex });
  }

  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", `${SITE_URL}${path}`);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}${path}`);

    const robots = document.head.querySelector('meta[name="robots"]');
    if (noindex) {
      upsertMeta("name", "robots", "noindex");
    } else if (robots) {
      robots.remove();
    }
  }, [title, description, path, noindex]);

  return null;
}
