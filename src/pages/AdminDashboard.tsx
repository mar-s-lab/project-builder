import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Package, BarChart3, LogOut, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { MOCK_PRODUCTS } from "@/data/products";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("ia-admin");
    if (!isAdmin) navigate("/admin");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("ia-admin");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="font-display text-primary-foreground text-lg leading-none">IA</span>
            </div>
            <span className="font-display text-xl tracking-wider gradient-text">ADMIN</span>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-body text-sm font-bold hover:opacity-90 transition-opacity">
              <Plus className="w-4 h-4" />
              Nuevo Producto
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Cerrar sesión"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 container mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: "Productos Activos", value: MOCK_PRODUCTS.length, icon: Package },
            { label: "Ventas Totales", value: 0, icon: BarChart3 },
            { label: "Tasa de Abandono", value: "0%", icon: BarChart3 },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-2">
                <stat.icon className="w-5 h-5 text-primary" />
                <span className="font-body text-sm text-muted-foreground">{stat.label}</span>
              </div>
              <p className="font-display text-3xl text-foreground">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Product list */}
        <div className="space-y-4">
          <h2 className="font-display text-2xl tracking-wider text-foreground">PRODUCTOS</h2>
          <div className="grid grid-cols-1 gap-3">
            {MOCK_PRODUCTS.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-lg p-4 border border-border flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img src={product.mainImage} alt={product.name} className="w-12 h-12 rounded-md object-cover" />
                  <div>
                    <h3 className="font-body font-bold text-foreground">{product.name}</h3>
                    <p className="font-body text-xs text-muted-foreground">{product.brief}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-display text-lg text-primary">${product.price}</span>
                  <span className="font-body text-xs text-muted-foreground">v{product.version}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
