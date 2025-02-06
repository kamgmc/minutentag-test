import useSWR from "swr";
import { api } from "@/constants/api.js";

export default function useProductSize(sku) {
  const { data, isLoading, error } = useSWR(
    sku ? `${api.stockPrice}/${sku}` : null,
    {
      refreshInterval: 5000,
    },
  );

  if (error) {
    alert("Failed to load product stock");
  }

  return {
    productSizeDetails: data,
    isLoading,
  };
}
