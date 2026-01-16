export const dynamic = "force-dynamic";

// app/products/page.tsx (SERVER COMPONENT)
import Product, { ProductSchema } from "@/model/Product";
import ProductsClient from "./ProductClient";

const API_URL =
  process.env.NEXT_PUBLIC_PRODUCTS_API_URL ??
  "http://localhost:5000/products";

async function getProducts(): Promise<Product[]> {
  const res = await fetch(API_URL
    // ,{next: { revalidate: 60 },}
  );

  if (!res.ok) {
    return []; // ⬅ DO NOT throw Error during SSR
  }
  const data = await res.json();
  return ProductSchema.array().parse(data);
}

export default async function Products() {
  const products = await getProducts();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <ProductsClient products={products} />;
}
