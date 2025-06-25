export type SnackType =
  | "coffeeTea"
  | "sweetSnacks"
  | "healthyOptions"
  | "savorySnacks";

export type Availability = "red" | "yellow" | "green";

export interface SnackCategoryAvailability {
  type: SnackType;
  availability: Availability;
}

export interface BuildingSnackInfo {
  id: string;
  label: string;
  categories: SnackCategoryAvailability[];
}

export const snackAvailability: BuildingSnackInfo[] = [
  {
    id: "bldg-i",
    label: "Building I",
    categories: [
      { type: "coffeeTea", availability: "green" },
      { type: "sweetSnacks", availability: "yellow" },
      { type: "healthyOptions", availability: "green" },
      { type: "savorySnacks", availability: "red" },
    ],
  },
  {
    id: "bldg-fg",
    label: "Building F&G - Connection Cafe",
    categories: [
      { type: "coffeeTea", availability: "green" },
      { type: "sweetSnacks", availability: "yellow" },
      { type: "healthyOptions", availability: "green" },
      { type: "savorySnacks", availability: "green" },
    ],
  },
  {
    id: "bldg-a",
    label: "Building A - Micro Kitchen",
    categories: [
      { type: "coffeeTea", availability: "green" },
      { type: "sweetSnacks", availability: "green" },
      { type: "healthyOptions", availability: "yellow" },
      { type: "savorySnacks", availability: "green" },
    ],
  },
  {
    id: "bldg-c",
    label: "Building C - Galley Kitchen",
    categories: [
      { type: "coffeeTea", availability: "yellow" },
      { type: "sweetSnacks", availability: "green" },
      { type: "healthyOptions", availability: "green" },
      { type: "savorySnacks", availability: "green" },
    ],
  },
  {
    id: "bldg-b",
    label: "Building B - Refreshment Corner",
    categories: [
      { type: "coffeeTea", availability: "green" },
      { type: "sweetSnacks", availability: "green" },
      { type: "healthyOptions", availability: "green" },
      { type: "savorySnacks", availability: "yellow" },
    ],
  },
];
