import { SWRConfig } from "swr";
import { fetcher } from "@/lib/axios.js";

export default function SWRProvider({ children }) {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
}
