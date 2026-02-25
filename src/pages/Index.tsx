import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import ProductCard from "@/components/ProductCard";
import CartSheet from "@/components/CartSheet";
import { MOCK_PRODUCTS } from "@/data/products";

const Index = () => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return MOCK_PRODUCTS;
    const q = search.toLowerCase();
    return MOCK_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brief.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technology.some((t) => t.toLowerCase().includes(q))
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-background mesh-glow">
      <Navbar />
      <CartSheet />

      <main>
        <HeroSection />

        {/* Search + Products */}
        <section className="relative z-10 container mx-auto px-6 pb-20 space-y-10 -mt-4">
          <SearchBar value={search} onChange={setSearch} />

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-muted-foreground">NO SE ENCONTRARON PRODUCTOS</p>
              <p className="font-body text-sm text-muted-foreground mt-2">Intenta con otra búsqueda</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                <span className="font-display text-primary-foreground text-xs leading-none">IA</span>
              </div>
              <span className="font-body text-xs text-muted-foreground">© 2026 ImagineApps</span>
            </div>
            <span className="font-body text-xs text-muted-foreground">Marketplace v1.0</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
