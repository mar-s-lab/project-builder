import { useState, useEffect } from "react";
import { Product } from "@/data/products";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  onSave: (updated: Product) => void;
}

const EditProductDialog = ({ product, open, onClose, onSave }: Props) => {
  const [form, setForm] = useState<Product | null>(null);

  useEffect(() => {
    if (product) setForm({ ...product });
  }, [product]);

  if (!form) return null;

  const set = (key: keyof Product, value: any) =>
    setForm((prev) => (prev ? { ...prev, [key]: value } : prev));

  const handleSave = () => {
    if (form) {
      onSave(form);
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="sm:max-w-lg glass border-border">
        <DialogHeader>
          <DialogTitle className="font-display tracking-wider text-foreground">
            EDITAR PRODUCTO
          </DialogTitle>
          <DialogDescription className="font-body text-muted-foreground text-sm">
            Modifica los campos y guarda los cambios.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="space-y-1.5">
            <Label className="font-body text-sm text-muted-foreground">Nombre</Label>
            <Input value={form.name} onChange={(e) => set("name", e.target.value)} className="bg-secondary border-border" />
          </div>
          <div className="space-y-1.5">
            <Label className="font-body text-sm text-muted-foreground">Creador</Label>
            <Input value={form.creator} onChange={(e) => set("creator", e.target.value)} className="bg-secondary border-border" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="font-body text-sm text-muted-foreground">Precio ($)</Label>
              <Input type="number" value={form.price} onChange={(e) => set("price", Number(e.target.value))} className="bg-secondary border-border" />
            </div>
            <div className="space-y-1.5">
              <Label className="font-body text-sm text-muted-foreground">Descuento (%)</Label>
              <Input type="number" value={form.discount ?? 0} onChange={(e) => set("discount", Number(e.target.value) || undefined)} className="bg-secondary border-border" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="font-body text-sm text-muted-foreground">Versión</Label>
            <Input value={form.version} onChange={(e) => set("version", e.target.value)} className="bg-secondary border-border" />
          </div>
          <div className="space-y-1.5">
            <Label className="font-body text-sm text-muted-foreground">Tecnologías (separadas por coma)</Label>
            <Input
              value={form.technology.join(", ")}
              onChange={(e) => set("technology", e.target.value.split(",").map((s) => s.trim()).filter(Boolean))}
              className="bg-secondary border-border"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="font-body text-sm text-muted-foreground">Descripción breve</Label>
            <Textarea value={form.brief} onChange={(e) => set("brief", e.target.value)} rows={2} className="bg-secondary border-border resize-none" />
          </div>
          <div className="space-y-1.5">
            <Label className="font-body text-sm text-muted-foreground">URL Imagen</Label>
            <Input value={form.mainImage} onChange={(e) => set("mainImage", e.target.value)} className="bg-secondary border-border" />
          </div>
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={onClose} className="font-body">
            Cancelar
          </Button>
          <Button onClick={handleSave} className="font-body font-bold">
            Guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditProductDialog;
