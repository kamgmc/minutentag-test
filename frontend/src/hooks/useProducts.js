import useSWR from "swr";
import { api } from "@/constants/api.js";

export default function useProducts() {
  const { data, isLoading } = useSWR(api.products);

  return {
    products: data,
    isLoading,
  };
}
