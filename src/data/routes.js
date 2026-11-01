import { SERVICES } from "./services";
import { REGIONS } from "./regions";

/** Every indexable route; the build prerenders each one to static HTML. */
export const PRERENDER_ROUTES = [
  "/",
  ...SERVICES.map((s) => `/diensten/${s.slug}`),
  ...REGIONS.map((r) => `/regio/${r.slug}`),
  "/galerij",
  "/privacy",
];
