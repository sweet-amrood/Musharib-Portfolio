/** App logos — one icon per project (not language / tech stack). */
export const projectIcons = {
  weartual: "/icons/projects/weartual.svg",
  foodhub: "/icons/projects/foodhub.svg",
  rideshare: "/icons/projects/rideshare.svg",
  ecommerce: "/icons/projects/ecommerce.svg",
  restaurant: "/icons/projects/restaurant.svg",
  atm: "/icons/projects/atm.svg",
} as const;

const repoIconBySlug: Record<string, string> = {
  "Weartual-latest": projectIcons.weartual,
  "FoodHub-REACTJS": projectIcons.foodhub,
  rideshare: projectIcons.rideshare,
  "E-Commerce-Management-System": projectIcons.ecommerce,
  "Restaurant-Ordering-System-SJF": projectIcons.restaurant,
  "ATM-Banking-System-Project-Assembly-Language": projectIcons.atm,
};

const repoIconByDisplayName: Record<string, string> = {
  Weartual: projectIcons.weartual,
  FoodHub: projectIcons.foodhub,
  RideShare: projectIcons.rideshare,
  "E-Commerce-Management-System": projectIcons.ecommerce,
  "Restaurant-Ordering-System-SJF": projectIcons.restaurant,
  "ATM-Banking-System-Project-Assembly-Language": projectIcons.atm,
};

export function getRepoIcon(repoSlugOrDisplayName: string): string | undefined {
  return (
    repoIconBySlug[repoSlugOrDisplayName] ??
    repoIconByDisplayName[repoSlugOrDisplayName]
  );
}
