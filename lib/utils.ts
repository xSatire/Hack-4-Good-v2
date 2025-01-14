import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tsQueryPreprocess = (query: string) => {
  return query.replace(/[\s\n\t]/g, "_");
};
