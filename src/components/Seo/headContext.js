import { createContext } from "react";

/**
 * On the server the prerender step provides a plain object here; the Seo
 * component fills it with the route's title, description, canonical path
 * and robots flag so they can be written into the static HTML <head>.
 * On the client the context is undefined and Seo updates document.head.
 */
export const HeadContext = createContext(undefined);
