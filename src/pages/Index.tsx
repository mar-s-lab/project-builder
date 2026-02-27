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

          {filtered.length === 0 ?
          <div className="text-center py-20">
              <p className="font-display text-2xl text-muted-foreground">NO SE ENCONTRARON PRODUCTOS</p>
              <p className="font-body text-sm text-muted-foreground mt-2">Intenta con otra búsqueda</p>
            </div> :

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product, i) =>
            <ProductCard key={product.id} product={product} index={i} />
            )}
            </div>
          }
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-12 mt-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
              {/* Brand */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                    <span className="font-display text-primary-foreground text-lg leading-none">IA</span>
                  </div>
                  <span className="font-body text-sm text-foreground font-bold">ImagineApps Marketplace</span>
                </div>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  Portafolio de cracks y soluciones digitales creadas por Imaginers para resolver problemas reales. En un par de clicks consigue resolver tus problemas, sin complicaciones ni instalacion                    
                </p>
              </div>

              {/* Links */}
              <div className="space-y-3">
                <h4 className="font-display text-sm tracking-wider text-foreground">ENLACES</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://imagineapps.co/en/" target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground hover:text-primary transition-colors text-sm">
                      Sitio Principal
                    </a>
                  </li>
                  <li>
                    <a href="https://imagineapps.co/en/#services" target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground hover:text-primary transition-colors text-sm">
                      Servicios
                    </a>
                  </li>
                  <li>
                    <a href="https://imagineapps.co/en/#contact" target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground hover:text-primary transition-colors text-sm">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>

              {/* Admin + Contact */}
              <div className="space-y-3">
                <h4 className="font-display text-sm tracking-wider text-foreground">ADMINISTRACIÓN</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/admin" className="font-body text-muted-foreground hover:text-primary transition-colors text-sm">
                      Portal Admin
                    </a>
                  </li>
                  <li>
                    <a href="https://forms.gle/Y7GauykjxHmRF6e59" target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground hover:text-primary transition-colors text-sm">
                      Enviar un producto nuevo
                    </a>
                  </li>
                  <li>
                    <span className="font-body text-muted-foreground text-sm">info@imagineapps.co</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-border pt-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-body text-xs text-muted-foreground">© 2026 ImagineApps. Todos los derechos reservados.</span>
                <a href="/terms" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">Términos y Condiciones</a>
              </div>
              <span className="font-body text-xs text-muted-foreground">Marketplace v1.0</span>
            </div>
          </div>
        </footer>
      </main>
    </div>);

};

export default Index;