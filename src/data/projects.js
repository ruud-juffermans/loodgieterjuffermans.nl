// Gallery projects. `image` is null until the photo exists: the UI then
// renders a labelled placeholder tile. Add an imported WebP (see services.js
// for the import pattern) and an `imageAlt` once the photo is available.
export const PROJECT_CATEGORIES = [
  { slug: "zinkwerk", label: "Zinkwerk" },
  { slug: "loodwerk", label: "Loodwerk" },
  { slug: "dakdekken", label: "Dakdekken" },
];

export const PROJECTS = [
  { id: 1, title: "Zinken dakgoot vervangen", place: "Haarlem", category: "zinkwerk", image: null },
  { id: 2, title: "Loodwerk rond de schoorsteen", place: "Heemstede", category: "loodwerk", image: null },
  { id: 3, title: "Plat dak vernieuwd", place: "Heemstede", category: "dakdekken", image: null },
  { id: 4, title: "Nieuwe zinken bakgoot", place: "Bennebroek", category: "zinkwerk", image: null },
  { id: 5, title: "Loodslabben bij een erker", place: "Haarlem", category: "loodwerk", image: null },
  { id: 6, title: "Dakrenovatie hellend dak", place: "Haarlem", category: "dakdekken", image: null },
  { id: 7, title: "Hemelwaterafvoer in zink", place: "Heemstede", category: "zinkwerk", image: null },
  { id: 8, title: "Lood vervangen bij een dakraam", place: "Bennebroek", category: "loodwerk", image: null },
  { id: 9, title: "Dakbedekking garage", place: "Haarlem", category: "dakdekken", image: null },
  { id: 10, title: "Zinken dak op een dakkapel", place: "Bennebroek", category: "zinkwerk", image: null },
  { id: 11, title: "Schoorsteenlood, detail", place: "Haarlem", category: "loodwerk", image: null },
  { id: 12, title: "Daklekkage gerepareerd", place: "Heemstede", category: "dakdekken", image: null },
];

export const getCategoryLabel = (slug) =>
  PROJECT_CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
