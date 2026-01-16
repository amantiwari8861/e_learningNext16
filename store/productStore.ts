import Product from "@/model/Product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProductStore {
  products: Product[];
  hasHydrated: boolean;
  setProducts: (products: Product[]) => void;
  getProductById: (id: number) => Product | undefined;
  clearProducts: () => void;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      products: [],
      hasHydrated: false,

      setProducts: (products) => set({ products }),
      getProductById: (id) => get().products.find((p) => p.id === id),
      clearProducts: () => set({ products: [] }),
    }),
    {
      name: "product-storage",
      partialize: (state) => ({ products: state.products }), // optimize storage
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    }
  )
);
