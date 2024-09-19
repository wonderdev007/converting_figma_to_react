import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export  function capitalizeFirstChar(str: string) {
  if (!str) return ''; // Check for an empty string
  return str.charAt(0).toUpperCase() + str.slice(1);
}
