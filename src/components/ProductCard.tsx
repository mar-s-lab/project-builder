import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { ShoppingCart, Tag } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addItem, items } = useCart();
  const isInCart = items.some((i) => i.product.id === product.id);

  const discountedPrice = product.discount ?
  product.price - product.price * product.discount / 100 :
  null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="group rounded-lg overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-300">

      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/2]">
        <img
          src={product.mainImage}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy" />

        {product.discount &&
        <span className="absolute top-3 right-3 text-primary-foreground text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 bg-[#7c4dff]">
            <Tag className="w-3 h-3" />
            -{product.discount}%
          </span>
        }
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-xl text-foreground">{product.name}</h3>
          <span className="text-[10px] text-muted-foreground font-body border border-border rounded px-1.5 py-0.5">
            v{product.version}
          </span>
        </div>

        <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-2">
          {product.brief}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {product.technology.map((tech) =>
          <span key={tech} className="text-[11px] font-body px-2 py-0.5 rounded text-primary-foreground bg-[#7c4dff]/40">
              {tech}
            </span>
          )}
        </div>

        {/* Price + Action */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl text-foreground">
              ${discountedPrice ? discountedPrice.toFixed(0) : product.price}
            </span>
            {discountedPrice &&
            <span className="text-sm text-muted-foreground line-through font-body">
                ${product.price}
              </span>
            }
          </div>
          <button
            onClick={() => addItem(product)}
            disabled={isInCart}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold font-body transition-colors ${
            isInCart ?
            "bg-secondary text-muted-foreground cursor-default" :
            "bg-primary text-primary-foreground hover:bg-primary/90"}`
            }>

            <ShoppingCart className="w-4 h-4" />
            {isInCart ? "Agregado" : "Agregar"}
          </button>
        </div>
      </div>
    </motion.article>);

};

export default ProductCard;