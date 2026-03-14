import { motion } from "framer-motion";
import heroImg from "@/assets/hero-garden.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Jardín mediterráneo" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-garden-gradient opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary-foreground leading-tight"
        >
          Mateo's Garden
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 font-body text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto"
        >
          Jardinería profesional en Mallorca. Cuidamos tu jardín como si fuera el nuestro.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#servicios"
            className="bg-primary-foreground text-primary font-body font-bold text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-xl"
          >
            Ver Servicios
          </a>
          <a
            href="https://wa.me/34624574029?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary-foreground text-primary-foreground font-body font-bold text-lg px-8 py-4 rounded-full hover:bg-primary-foreground hover:text-primary transition-all"
          >
            Contáctanos
          </a>
        </motion.div>

        {/* Promo badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 inline-block bg-garden-gold text-accent-foreground font-body font-bold px-6 py-3 rounded-full text-lg animate-float shadow-lg"
        >
          🎉 10% de descuento en tus primeros 3 meses
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
