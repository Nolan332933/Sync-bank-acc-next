import { format } from "date-fns";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate (date: string) {
  return format(new Date(date), "MM/dd/yyyy");
};

export function formatCurrency (amount: number) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export function formatCategory (category?: string) {
  if (!category) {
    return "Uncategorized";
  }

  return category
    .split("_")
    .map((word) => word[0] + word.slice(1).toLowerCase())
    .join(" ");
};
