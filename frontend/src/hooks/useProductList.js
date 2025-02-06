import useSWR from "swr";
import { api } from "@/constants/api.js";

export default function useProductList() {
  const { data, isLoading, error } = useSWR(api.products);

  if (error) {
    alert("Failed to load products");
  }

  return {
    products: data,
    isLoading,
  };
}
