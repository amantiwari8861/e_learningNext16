export const dynamic = "force-dynamic";

// app/products/page.tsx (SERVER COMPONENT)
import Product, { ProductSchema } from "@/model/Product";
import ProductsClient from "./ProductClient";
import { log } from "console";

const API_URL =
  process.env.NEXT_PUBLIC_PRODUCTS_API_URL ??
  "http://localhost:5000/products";

async function getProducts(): Promise<Product[]> {
  const res = await fetch(API_URL, { cache: "no-store" });

  console.log("STATUS:", res.status);
  console.log("HEADERS:", Object.fromEntries(res.headers));

  const text = await res.text();
  console.log("RAW RESPONSE:", text.slice(0, 200));

  if (!res.ok) return [];

  const data = JSON.parse(text);
  return ProductSchema.array().parse(data);
}


export default async function Products() {
  const products = await getProducts();
  log("Fetched products:", products);
  console.log("API_URL used:", API_URL);

  // Simulate delay for testing loading states
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return <ProductsClient products={products} />;
}
