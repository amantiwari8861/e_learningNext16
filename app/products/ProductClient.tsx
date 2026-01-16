"use client";

import { useEffect } from "react";
import { useProductStore } from "@/store/productStore";
import ProductCard from "../_components/ProductCard";
import Product from "@/model/Product";

export default function ProductsClient({
  products,
}: {
  products: Product[];
}) {
  const setProducts = useProductStore((s) => s.setProducts);
  const storedProducts = useProductStore((s) => s.products);

  useEffect(() => {
    // ✅ prevent overwriting persisted state
    if (storedProducts.length === 0) {
      setProducts(products);
    }
  }, [products, setProducts, storedProducts.length]);

  console.log("storedProducts:", storedProducts);
  console.log("products:", products);
  return (
    <section className="grid grid-cols-4 gap-4">

      {storedProducts.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  );
}
