import useSWR from "swr";
import { api } from "@/constants/api.js";

export default function useProductStock(sku) {
  const { data, isLoading } = useSWR(sku ? `${api.stockPrice}/${sku}` : null, {
    refreshInterval: 5000,
  });

  return {
    productStock: data,
    isLoading,
  };
}
