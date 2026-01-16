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
    console.log("storedProducts before in useeffect:", storedProducts);
    console.log("products before in useeffect:", products);
    // ✅ prevent overwriting persisted state
    if (storedProducts.length === 0) {
      setProducts(products);
    }
    if (products.length > 0) {
      setProducts(products);
    }

    console.log("storedProducts after in useeffect:", storedProducts);
    console.log("products after in useeffect:", products);
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
