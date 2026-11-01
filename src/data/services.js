// WebP at the widths the layouts render; the originals stay as the source.
import ImgZinkwerk from "@assets/home1.jpeg?w=1200&format=webp";
import ImgZinkwerkSet from "@assets/home1.jpeg?w=480;800;1200&format=webp&as=srcset";
import ImgLoodwerk from "@assets/hero1.jpeg?w=1200&format=webp";
import ImgLoodwerkSet from "@assets/hero1.jpeg?w=480;800;1200&format=webp&as=srcset";
import ImgLoodwerkDetail from "@assets/hero2.jpeg?w=1200&format=webp";
import ImgLoodwerkDetailSet from "@assets/hero2.jpeg?w=480;800;1200&format=webp&as=srcset";
import ImgDakdekken from "@assets/home3.jpeg?w=1200&format=webp";
import ImgDakdekkenSet from "@assets/home3.jpeg?w=480;800;1200&format=webp&as=srcset";
// Square crops for the 60px tiles on the homepage (2x for retina).
import ThumbZinkwerk from "@assets/home1.jpeg?w=160&h=160&fit=cover&format=webp";
import ThumbLoodwerk from "@assets/hero3.jpeg?w=160&h=160&fit=cover&position=left&format=webp";
import ThumbDakdekken from "@assets/home3.jpeg?w=160&h=160&fit=cover&format=webp";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";

export const SERVICES = [
  {
    slug: "zinkwerk",
    icon: HomeOutlinedIcon,
    title: "Zinkwerk",
    shortDescription:
      "Lekkende of verzakte dakgoot, losse regenpijp of een zinken dak dat aan vervanging toe is? Ik zet en soldeer nieuw zinkwerk op maat.",
    h1: "Zinkwerk in Haarlem, Heemstede en Bennebroek",
    metaTitle: "Zinkwerk & zinken dakgoten Haarlem e.o. | Juffermans",
    metaDescription:
      "Specialist in zinkwerk: zinken dakgoten, regenpijpen en maatwerk zetwerk. Vakkundig gezet en gesoldeerd in Haarlem, Heemstede en omgeving. Gratis offerte.",
    intro: [
      "Zink is al generaties lang hét materiaal voor dakgoten en regenwaterafvoer: duurzaam, onderhoudsarm en mooi verouderend. Goed zinkwerk vraagt om vakmanschap — van het zetten van het materiaal tot de laatste soldeernaad.",
      "Als specialist in zinkwerk verzorg ik zowel nieuwe aanleg als reparatie en vervanging, altijd met oog voor detail en afgestemd op uw woning.",
    ],
    tasksTitle: "Wat ik voor u doe",
    tasks: [
      "Zinken dakgoten: aanleg, reparatie en vervanging",
      "Regenpijpen en hemelwaterafvoer",
      "Maatwerk zetwerk, op maat gezet en gesoldeerd",
      "Zinken daken van dakkapellen en erkers",
      "Periodiek onderhoud en inspectie",
    ],
    image: ImgZinkwerk,
    thumb: ThumbZinkwerk,
    imageSrcSet: ImgZinkwerkSet,
    detailImage: ImgZinkwerk,
    detailImageSrcSet: ImgZinkwerkSet,
    imageAlt: "Zinken dakgoot en zinkwerk aan een woning",
  },
  {
    slug: "loodwerk",
    icon: RoofingOutlinedIcon,
    title: "Loodwerk",
    shortDescription:
      "Lekkage bij de schoorsteen, dakkapel of gevelaansluiting? Versleten lood is de meest voorkomende oorzaak. Ik vernieuw het vakkundig.",
    h1: "Loodwerk in Haarlem, Heemstede en Bennebroek",
    metaTitle: "Loodwerk & schoorsteenlood Haarlem e.o. | Juffermans",
    metaDescription:
      "Vakkundig loodwerk: loodslabben, schoorsteenlood en loketten. Ook restauratiewerk aan oudere panden in Haarlem, Heemstede en omgeving. Gratis offerte.",
    intro: [
      "Lood zorgt op de kwetsbare overgangen van uw dak — bij schoorstenen, dakkapellen en gevelaansluitingen — voor een blijvend waterdichte afwerking. Verouderd of slecht aangebracht loodwerk is een veelvoorkomende oorzaak van lekkage.",
      "Met ruime ervaring in traditioneel loodwerk help ik u bij zowel nieuw werk als herstel van bestaand werk, ook bij oudere en monumentale panden.",
    ],
    tasksTitle: "Wat ik voor u doe",
    tasks: [
      "Loodslabben en loodaansluitingen vernieuwen",
      "Schoorsteenlood en loketten",
      "Nok- en gevelafwerking in lood",
      "Herstel van loodwerk bij oudere en monumentale panden",
      "Opsporen en verhelpen van lekkages",
    ],
    image: ImgLoodwerk,
    thumb: ThumbLoodwerk,
    imageSrcSet: ImgLoodwerkSet,
    detailImage: ImgLoodwerkDetail,
    detailImageSrcSet: ImgLoodwerkDetailSet,
    imageAlt: "Traditioneel loodwerk rond een schoorsteen",
  },
  {
    slug: "dakdekken",
    icon: LayersOutlinedIcon,
    title: "Dakdekken",
    shortDescription:
      "Plat dak dat lekt of aan het eind van zijn levensduur is? Ik repareer of vernieuw de dakbedekking van erkers, aanbouwen en garages.",
    h1: "Dakdekker in Haarlem, Heemstede en Bennebroek",
    metaTitle: "Dakdekker Haarlem, Heemstede & Bennebroek | Juffermans",
    metaDescription:
      "Dakbedekking voor platte en hellende daken: bitumen, dakreparatie en dakrenovatie. Snel ter plaatse in Haarlem, Heemstede en omgeving. Gratis offerte.",
    intro: [
      "Een goed gelegd dak beschermt uw woning jarenlang tegen weer en wind. Of het nu gaat om een plat dak, een dakkapel of een aanbouw — de kwaliteit zit in de details en de afwerking.",
      "Ik verzorg dakbedekking van A tot Z: van inspectie en advies tot het volledig vernieuwen van uw dakbedekking, inclusief het bijbehorende lood- en zinkwerk.",
    ],
    tasksTitle: "Wat ik voor u doe",
    tasks: [
      "Bitumineuze dakbedekking voor platte daken",
      "Dakrenovatie en dakreparatie",
      "Daken van dakkapellen, aanbouwen en garages",
      "Stormschade en lekkage verhelpen",
      "Dakinspectie en onderhoudsadvies",
    ],
    image: ImgDakdekken,
    thumb: ThumbDakdekken,
    imageSrcSet: ImgDakdekkenSet,
    detailImage: ImgDakdekken,
    detailImageSrcSet: ImgDakdekkenSet,
    imageAlt: "Plat dak met bitumineuze dakbedekking",
  },
];

export const getServiceBySlug = (slug) =>
  SERVICES.find((service) => service.slug === slug);
