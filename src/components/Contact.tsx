import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contacto" className="py-24 bg-garden-gradient relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            ¿Listo para transformar tu jardín?
          </h2>
          <p className="font-body text-xl text-primary-foreground/80 mb-10">
            Contáctanos ahora y recibe un presupuesto sin compromiso. ¡10% de descuento en tus primeros 3 meses!
          </p>

          <motion.a
            href="https://wa.me/34624574029?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-primary-foreground text-primary font-body font-bold text-xl px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transition-shadow"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.609l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.826-6.326-2.208l-.442-.356-3.282 1.1 1.1-3.282-.356-.442A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Escríbenos por WhatsApp
          </motion.a>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70 font-body">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>624 574 029</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>mateos.garden1@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Mallorca, España</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
