export type Location = {
  slug: string;
  name: string;
  area: string;
  nearby: string[];
  code: string;
  tone: "red" | "white";
  image: string;
};

export const locations: Location[] = [
  {
    slug: "benson-rd-remuera",
    name: "Benson Rd, Remuera",
    area: "62 Benson Rd, Auckland",
    nearby: ["Cafes", "Florist", "Boutique stores", "Restaurants"],
    code: "BEN-01",
    tone: "red",
    image: "/assets/img/benson-rd-remuera.jpg",
  },
  {
    slug: "osborne-st-newmarket",
    name: "Osborne St, Newmarket",
    area: "6 Osborne St, Auckland",
    nearby: ["Cinema", "Restaurants", "Cafes", "Shops"],
    code: "OSB-02",
    tone: "white",
    image: "/assets/img/osborne-st-newmarket.jpg",
  },
  {
    slug: "orakei-bay-village-orakei",
    name: "Orakei Bay Village, Orakei",
    area: "234 Orakei Rd, Auckland",
    nearby: ["Train Station", "Gym", "Cycle lane", "Main Rd"],
    code: "ORA-03",
    tone: "red",
    image: "/assets/img/orakei-bay-village-orakei.jpg",
  },
  {
    slug: "brougham-st-sydenham",
    name: "Brougham St, Sydenham",
    area: "230 Brougham St, Christchurch",
    nearby: ["Sports clubs", "Bus Stops", "Commuting routes"],
    code: "BRO-04",
    tone: "white",
    image: "/assets/img/brougham-st-sydenham.jpg",
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}
