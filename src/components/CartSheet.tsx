import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Trash2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CartSheet = () => {
  const { items, removeItem, isOpen, setIsOpen, subtotal, totalDiscount, total } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="bg-card border-l border-border w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl text-foreground">CARRITO DE COMPRAS</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground font-body text-sm">Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto space-y-3 py-4">
              <AnimatePresence mode="popLayout">
                {items.map((item) => {
                  const discounted = item.product.discount
                    ? item.product.price - (item.product.price * item.product.discount) / 100
                    : item.product.price;
                  return (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      className="flex items-center gap-3 p-3 rounded-md bg-secondary/50"
                    >
                      <img
                        src={item.product.mainImage}
                        alt={item.product.name}
                        className="w-14 h-14 rounded object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-display text-base text-foreground truncate">{item.product.name}</p>
                        <p className="font-body text-sm text-muted-foreground">${discounted.toFixed(0)}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-1.5 rounded hover:bg-destructive/20 text-muted-foreground hover:text-destructive transition-colors"
                        aria-label="Eliminar producto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between text-sm font-body">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">${subtotal.toFixed(0)}</span>
              </div>
              {totalDiscount > 0 && (
                <div className="flex justify-between text-sm font-body">
                  <span className="text-muted-foreground">Descuento</span>
                  <span className="text-primary">-${totalDiscount.toFixed(0)}</span>
                </div>
              )}
              <div className="flex justify-between font-display text-xl pt-2 border-t border-border">
                <span className="text-foreground">TOTAL</span>
                <span className="gradient-text">${total.toFixed(0)}</span>
              </div>
              <button className="w-full mt-4 bg-primary text-primary-foreground font-bold font-body py-3 rounded-md hover:bg-primary/90 transition-colors">
                Checkout / Pagar
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
