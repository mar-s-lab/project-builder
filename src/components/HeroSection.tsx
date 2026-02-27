import heroMesh from "@/assets/hero-mesh.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroMesh} alt="" className="w-full h-full object-cover opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-16 pb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl sm:text-7xl gradient-text leading-none mb-6 md:text-8xl font-extrabold bg-primary-foreground">Potencia tus Proyectos 
con Soluciones Plug & Play de Calidad

        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">Descarga, instala y usa al instante productos funcionales con el sello de calidad ImagienApps. 



        </motion.p>
      </div>
    </section>);

};

export default HeroSection;