import { SITE_URL } from "./site";
import { SERVICES } from "./services";
import { REGIONS } from "./regions";
import { ADDRESS, EMAIL, PHONE_TEL } from "./contact";

/** Site-wide LocalBusiness data, rendered on every page by the layout. */
export const BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["Plumber", "RoofingContractor"],
  "@id": `${SITE_URL}/#business`,
  name: ADDRESS.company,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/favicon.svg`,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: PHONE_TEL,
  email: EMAIL,
  slogan: "Waterdicht de beste",
  description:
    "Ambachtelijk lood-, zink- en dakwerk in Haarlem, Heemstede, Bennebroek en omgeving. Familie-vakmanschap, één vast aanspreekpunt en gratis offerte.",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    postalCode: ADDRESS.postalCode,
    addressLocality: ADDRESS.city,
    addressRegion: "Noord-Holland",
    addressCountry: "NL",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    ...REGIONS.map((r) => ({ "@type": "City", name: r.name })),
    { "@type": "AdministrativeArea", name: "Noord-Holland" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Diensten",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: `${SITE_URL}/diensten/${s.slug}`,
      },
    })),
  },
};
