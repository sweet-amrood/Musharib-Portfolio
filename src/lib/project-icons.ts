/** Experience cards + GitHub repo card logos */
export const projectIcons = {
  weartual: "/icons/tech/react.svg",
  foodhub: "/icons/tech/nodejs.svg",
  ecommerce: "/icons/tech/sqlserver.svg",
  restaurant: "/icons/tech/cplusplus.svg",
  atm: "/icons/projects/assembly.svg",
} as const;

const repoIconByName: Record<string, string> = {
  Weartual: projectIcons.weartual,
  FoodHub: projectIcons.foodhub,
  "E-Commerce-Management-System": projectIcons.ecommerce,
  "Restaurant-Ordering-System-SJF": projectIcons.restaurant,
  "ATM-Banking-System-Project-Assembly-Language": projectIcons.atm,
};

export function getRepoIcon(displayName: string): string | undefined {
  return repoIconByName[displayName];
}
