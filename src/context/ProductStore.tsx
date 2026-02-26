import { createContext, useContext, useState, ReactNode } from "react";
import { Product, MOCK_PRODUCTS } from "@/data/products";

interface ProductStore {
  products: Product[];
  trashedProducts: Product[];
  updateProduct: (updated: Product) => void;
  trashProduct: (id: string) => void;
  restoreProduct: (id: string) => void;
  permanentDelete: (id: string) => void;
  addProduct: (product: Product) => void;
}

const Ctx = createContext<ProductStore | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(
    MOCK_PRODUCTS.filter((p) => p.status !== "deleted")
  );
  const [trashedProducts, setTrashed] = useState<Product[]>(
    MOCK_PRODUCTS.filter((p) => p.status === "deleted")
  );

  const updateProduct = (updated: Product) =>
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));

  const trashProduct = (id: string) => {
    setProducts((prev) => {
      const item = prev.find((p) => p.id === id);
      if (item) setTrashed((t) => [...t, { ...item, status: "deleted" }]);
      return prev.filter((p) => p.id !== id);
    });
  };

  const restoreProduct = (id: string) => {
    setTrashed((prev) => {
      const item = prev.find((p) => p.id === id);
      if (item) setProducts((ps) => [...ps, { ...item, status: "active" }]);
      return prev.filter((p) => p.id !== id);
    });
  };

  const permanentDelete = (id: string) =>
    setTrashed((prev) => prev.filter((p) => p.id !== id));

  const addProduct = (product: Product) =>
    setProducts((prev) => [...prev, product]);

  return (
    <Ctx.Provider
      value={{ products, trashedProducts, updateProduct, trashProduct, restoreProduct, permanentDelete, addProduct }}
    >
      {children}
    </Ctx.Provider>
  );
};

export const useProductStore = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useProductStore must be inside ProductProvider");
  return ctx;
};
