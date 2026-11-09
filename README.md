# loodgieterjuffermans.nl

Website van Loodgietersbedrijf Juffermans — ambachtelijk lood-, zink- en dakwerk
in Haarlem, Heemstede en omgeving.

Gebouwd met React 19, Vite en MUI (react-router voor routing).

## Ontwikkelen

```bash
npm install
npm run dev       # dev-server op http://localhost:5173
npm run build     # productie-build naar dist/
npm run preview   # lokale preview van de productie-build
npm run lint      # ESLint
```

## Structuur

- `src/pages/home` — homepage met secties (hero, over mij, reviews, diensten, FAQ)
- `src/pages/diensten` — detailpagina per dienst (`/diensten/:slug`)
- `src/pages/regio` — regiopagina per plaats (`/regio/:slug`)
- `src/data` — gedeelde inhoud (diensten, regio's) voor homepage, detailpagina's en footer
- `src/components/Seo` — per-pagina title/description/canonical/Open Graph
- `public/` — `robots.txt`, `sitemap.xml`, favicon, OG-afbeelding, `.htaccess`

## Bezoekersstatistieken

`src/lib/analytics.js` stuurt per paginabezoek één cookieloze beacon (pad,
taal, verwijzende site) naar het admin-panel (`api.ruudjuffermans.nl`,
`POST /api/website/analytics`), dat het bezoek aan deze site toekent op basis
van de `Origin`-header. De cijfers staan in het admin-panel onder
"Loodgieter". In development wordt niets verstuurd, tenzij `VITE_API_URL`
naar een lokaal draaiend panel wijst. "Do Not Track" wordt gerespecteerd en de
privacyverklaring (`src/pages/privacy`) beschrijft precies wat er wordt
bijgehouden.

## SEO

- Statische meta tags, Open Graph en JSON-LD (`Plumber` + `FAQPage`) staan in `index.html`.
- Per-route meta wordt client-side bijgewerkt via `src/components/Seo`.
- Nieuwe pagina toevoegen? Voeg de URL ook toe aan `public/sitemap.xml`.

## Deployment

Dit is een single-page app met HTML5-routing: de server moet alle onbekende
paden naar `index.html` rewriten, anders geven deep links (bijv.
`/diensten/zinkwerk`) een 404.

- **Apache** (shared hosting): de meegeleverde `public/.htaccess` wordt mee
  gebuild naar `dist/` en regelt dit automatisch.
- **Netlify**: voeg een `_redirects` toe met `/* /index.html 200`.
- **Vercel**: voeg een `vercel.json` rewrite naar `/index.html` toe.
