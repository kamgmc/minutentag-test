import {useEffect, useMemo} from "react";
import { useParams } from "react-router";
import useSWR from "swr";
import { api } from "@/constants/api.js";
import { getInt } from "@/utils/index.js";
import { activeProductSkuState } from "@/stores/products.js";
import { useRecoilState } from "recoil";

export default function useProductDetails() {
  const { data, isLoading, error } = useSWR(api.products);
  const [productSku, setProductSku] = useRecoilState(activeProductSkuState);
  const params = useParams();

  const id = useMemo(() => getInt((params["*"] || "").split("-")[0]), [params]);
  const product = useMemo(
    () => (id ? data?.find((product) => product.id === id) : null),
    [data, id],
  );

  useEffect(() => {
    if (product && !productSku) {
      setProductSku(product.skus[0]);
    }
  }, [product]);

  if (error) {
    alert("Failed to load products");
  }

  return {
    product,
    isLoading,
  };
}
