import useSWRImmutable from "swr/immutable";
import { api } from "@/constants/api.js";

export default function useProductList() {
  const { data, isLoading, error } = useSWRImmutable(api.products);

  if (!isLoading && error) {
    alert("Failed to load products");
  }

  return {
    products: data,
    isLoading,
  };
}
