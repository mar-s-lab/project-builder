import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Package, BarChart3, LogOut, Plus, Pencil, Trash2, RotateCcw, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useProductStore } from "@/context/ProductStore";
import { Product } from "@/data/products";
import EditProductDialog from "@/components/admin/EditProductDialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { products, trashedProducts, updateProduct, trashProduct, restoreProduct, permanentDelete } = useProductStore();

  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<{ id: string; permanent: boolean } | null>(null);

  useEffect(() => {
    const isAdmin = localStorage.getItem("ia-admin");
    if (!isAdmin) navigate("/admin");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("ia-admin");
    navigate("/admin");
  };

  const handleConfirmDelete = () => {
    if (!deleteConfirm) return;
    if (deleteConfirm.permanent) {
      permanentDelete(deleteConfirm.id);
    } else {
      trashProduct(deleteConfirm.id);
    }
    setDeleteConfirm(null);
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
            <Button className="font-body text-sm font-bold gap-2">
              <Plus className="w-4 h-4" />
              Nuevo Producto
            </Button>
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
            { label: "Productos Activos", value: products.length, icon: Package },
            { label: "En Papelera", value: trashedProducts.length, icon: Trash2 },
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

        {/* Product list with tabs */}
        <Tabs defaultValue="active" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl tracking-wider text-foreground">PRODUCTOS</h2>
            <TabsList className="bg-secondary border border-border">
              <TabsTrigger value="active" className="font-body text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Activos ({products.length})
              </TabsTrigger>
              <TabsTrigger value="trash" className="font-body text-sm data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground">
                Papelera ({trashedProducts.length})
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Active products */}
          <TabsContent value="active" className="space-y-3">
            {products.length === 0 ? (
              <p className="text-center py-12 font-body text-muted-foreground">No hay productos activos.</p>
            ) : (
              products.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-lg p-4 border border-border flex items-center justify-between"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <img src={product.mainImage} alt={product.name} className="w-12 h-12 rounded-md object-cover flex-shrink-0" />
                    <div className="min-w-0">
                      <h3 className="font-body font-bold text-foreground truncate">{product.name}</h3>
                      <p className="font-body text-xs text-muted-foreground truncate">{product.brief}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                    <span className="font-display text-lg text-primary">${product.price}</span>
                    <span className="font-body text-xs text-muted-foreground hidden sm:inline">v{product.version}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setEditProduct(product)}
                      className="text-muted-foreground hover:text-foreground"
                      aria-label="Editar producto"
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setDeleteConfirm({ id: product.id, permanent: false })}
                      className="text-muted-foreground hover:text-destructive"
                      aria-label="Enviar a papelera"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))
            )}
          </TabsContent>

          {/* Trash */}
          <TabsContent value="trash" className="space-y-3">
            {trashedProducts.length === 0 ? (
              <p className="text-center py-12 font-body text-muted-foreground">La papelera está vacía.</p>
            ) : (
              trashedProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-lg p-4 border border-border flex items-center justify-between opacity-70"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <img src={product.mainImage} alt={product.name} className="w-12 h-12 rounded-md object-cover flex-shrink-0 grayscale" />
                    <div className="min-w-0">
                      <h3 className="font-body font-bold text-foreground truncate">{product.name}</h3>
                      <p className="font-body text-xs text-muted-foreground truncate">{product.brief}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => restoreProduct(product.id)}
                      className="text-muted-foreground hover:text-primary"
                      aria-label="Restaurar producto"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setDeleteConfirm({ id: product.id, permanent: true })}
                      className="text-muted-foreground hover:text-destructive"
                      aria-label="Eliminar permanentemente"
                    >
                      <XCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))
            )}
          </TabsContent>
        </Tabs>
      </main>

      {/* Edit dialog */}
      <EditProductDialog
        product={editProduct}
        open={!!editProduct}
        onClose={() => setEditProduct(null)}
        onSave={updateProduct}
      />

      {/* Delete confirmation */}
      <AlertDialog open={!!deleteConfirm} onOpenChange={(o) => !o && setDeleteConfirm(null)}>
        <AlertDialogContent className="glass border-border">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-display tracking-wider text-foreground">
              {deleteConfirm?.permanent ? "ELIMINAR PERMANENTEMENTE" : "ENVIAR A PAPELERA"}
            </AlertDialogTitle>
            <AlertDialogDescription className="font-body text-muted-foreground">
              {deleteConfirm?.permanent
                ? "Esta acción no se puede deshacer. El producto se eliminará permanentemente."
                : "El producto se moverá a la papelera. Podrás restaurarlo después."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="font-body">Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className={deleteConfirm?.permanent ? "bg-destructive text-destructive-foreground hover:bg-destructive/90 font-body font-bold" : "font-body font-bold"}
            >
              {deleteConfirm?.permanent ? "Eliminar" : "Mover a papelera"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminDashboard;
