/**
 * Prerenders every route to static HTML after the client and SSR builds.
 * Run by `npm run build`. Produces:
 *   dist/index.html                       for "/"
 *   dist/diensten/zinkwerk/index.html     for "/diensten/zinkwerk" (and
 *   dist/diensten/zinkwerk.html           for servers that map $uri.html)
 *   dist/404.html                         the not-found page
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const SITE_URL = "https://www.loodgieterjuffermans.nl";
const dist = path.resolve("dist");
const serverDir = path.join(dist, "server");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const { render, PRERENDER_ROUTES } = await import(
  pathToFileURL(path.join(serverDir, "entry-server.js")).href
);

const escape = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");

function headTags(head) {
  const url = `${SITE_URL}${head.path ?? "/"}`;
  const tags = [
    `<title>${escape(head.title)}</title>`,
    `<meta name="description" content="${escape(head.description)}" />`,
    `<link rel="canonical" href="${escape(url)}" />`,
    `<meta property="og:title" content="${escape(head.title)}" />`,
    `<meta property="og:description" content="${escape(head.description)}" />`,
    `<meta property="og:url" content="${escape(url)}" />`,
  ];
  if (head.noindex) tags.push(`<meta name="robots" content="noindex" />`);
  return tags.join("\n    ");
}

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

for (const route of [...PRERENDER_ROUTES, "/404"]) {
  const { html, head, styles } = render(route);
  const page = template
    .replace("<!--app-head-->", `${headTags(head)}\n    ${styles}`)
    .replace("<!--app-html-->", html);

  if (route === "/") {
    write(path.join(dist, "index.html"), page);
  } else if (route === "/404") {
    write(path.join(dist, "404.html"), page);
  } else {
    write(path.join(dist, route.slice(1), "index.html"), page);
    write(path.join(dist, `${route.slice(1)}.html`), page);
  }
  console.log(`prerendered ${route}`);
}

fs.rmSync(serverDir, { recursive: true, force: true });
