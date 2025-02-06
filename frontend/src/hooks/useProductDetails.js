import { useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { api } from "@/constants/api.js";
import { getInt } from "@/utils/index.js";
import { currentProductSizeState } from "@/stores/products.js";
import { useRecoilState } from "recoil";
import useSWRImmutable from "swr/immutable";

export default function useProductDetails() {
  const { data, isLoading, error } = useSWRImmutable(api.products);
  const [productSize, setProductSize] = useRecoilState(currentProductSizeState);
  const params = useParams();

  const id = useMemo(() => getInt((params["*"] || "").split("-")[0]), [params]);
  const product = useMemo(
    () => (id ? data?.find((product) => product.id === id) : null),
    [data, id],
  );

  useEffect(() => {
    if (product && !productSize) {
      setProductSize(product.skus[0]);
    }
  }, [product]);

  if (!isLoading && error) {
    alert("Failed to load products");
  }

  return {
    product,
    isLoading,
  };
}
