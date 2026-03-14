import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  { icon: "👨‍🌾", title: "Profesionales con experiencia", desc: "Años de experiencia en jardinería mediterránea." },
  { icon: "⏰", title: "Puntualidad y compromiso", desc: "Siempre cumplimos con los plazos acordados." },
  { icon: "🌱", title: "Resultados desde la primera visita", desc: "Notarás la diferencia inmediatamente." },
  { icon: "🌍", title: "Métodos ecológicos", desc: "Respetuosos con el medio ambiente." },
];

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="nosotros" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">¿Por qué elegirnos?</h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Confía en el equipo que cuida Mallorca
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, margin: "-80px" });
            return (
              <motion.div
                key={r.title}
                ref={cardRef}
                initial={{ opacity: 0, y: 40 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center p-8 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
              >
                <div className="text-5xl mb-4">{r.icon}</div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{r.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{r.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
