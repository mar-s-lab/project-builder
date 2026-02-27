import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { totalItems, setIsOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <a href="https://imagineapps.co" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <span className="font-display text-primary-foreground text-lg leading-none">IA</span>
          </div>
          <span className="font-body text-sm text-muted-foreground hidden sm:block">ImagineApps</span>
        </a>

        {/* Title */}
        <h1 className="font-display text-2xl tracking-wider gradient-text font-semibold">MARKETPLACE Imaginario</h1>

        {/* Cart */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative p-2 rounded-md hover:bg-secondary transition-colors"
          aria-label="Abrir carrito">

          <ShoppingCart className="w-5 h-5 text-foreground" />
          <AnimatePresence>
            {totalItems > 0 &&
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">

                {totalItems}
              </motion.span>
            }
          </AnimatePresence>
        </button>
      </div>
    </nav>);

};

export default Navbar;