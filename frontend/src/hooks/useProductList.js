import useSWR from "swr";
import { api } from "@/constants/api.js";

export default function useProductList() {
  const { data, isLoading } = useSWR(api.products);

  return {
    products: data,
    isLoading,
  };
}
