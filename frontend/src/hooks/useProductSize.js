
import { api } from "@/constants/api.js";
import useSWRImmutable from "swr/immutable";

export default function useProductSize(sku) {
  const { data, isLoading, error } = useSWRImmutable(
    sku ? `${api.stockPrice}/${sku}` : null,
    {
      refreshInterval: 5000,
    },
  );

  if (!isLoading && error) {
    alert("Failed to load product stock");
  }

  return {
    productSizeDetails: data,
    isLoading,
  };
}
