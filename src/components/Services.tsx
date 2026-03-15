import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { format, parse } from "date-fns";
import { es } from "date-fns/locale";
import pruningImg from "@/assets/services-pruning.jpg";
import irrigationImg from "@/assets/services-irrigation.jpg";
import poolImg from "@/assets/services-pool.jpg";
import heroImg from "@/assets/hero-garden.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Imágenes únicas por servicio (cada uno con una imagen distinta y relacionada)
const designGardenImg =
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80";
const plantTreatmentImg =
  "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80";

const services = [
  {
    title: "Mantenimiento de jardines",
    description: "Cuidado integral de jardines y comunidades. Mantén tu espacio verde impecable todo el año.",
    image: heroImg,
    whatsapp: "Hola, me interesa el servicio de mantenimiento de jardines",
  },
  {
    title: "Diseño y creación de jardines",
    description: "Diseñamos y creamos el jardín de tus sueños, adaptado al clima mediterráneo de Mallorca.",
    image: designGardenImg,
    whatsapp: "Hola, me interesa el servicio de diseño de jardines",
  },
  {
    title: "Poda de pinos, palmeras y árboles",
    description: "Poda profesional y segura de todo tipo de árboles, palmeras y pinos de gran altura.",
    image: pruningImg,
    whatsapp: "Hola, me interesa el servicio de poda de árboles",
  },
  {
    title: "Instalación de sistemas de riego",
    description: "Sistemas de riego automático eficientes para optimizar el consumo de agua de tu jardín.",
    image: irrigationImg,
    whatsapp: "Hola, me interesa la instalación de sistemas de riego",
  },
  {
    title: "Tratamientos fitosanitarios",
    description: "Protege tus plantas con tratamientos respetuosos con el medio ambiente contra plagas y enfermedades.",
    image: plantTreatmentImg,
    whatsapp: "Hola, me interesa el servicio de tratamientos fitosanitarios",
  },
  {
    title: "Limpieza y mantenimiento de piscinas",
    description: "Mantén tu piscina cristalina todo el año con nuestro servicio profesional de limpieza.",
    image: poolImg,
    whatsapp: "Hola, me interesa el servicio de limpieza de piscinas",
  },
];

const ServiceCard = ({
  service,
  index,
  onRequestQuote,
}: {
  service: (typeof services)[0];
  index: number;
  onRequestQuote: (s: (typeof services)[0]) => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-shadow duration-500"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={typeof service.image === "string" ? service.image : (service.image as string)}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-garden-gradient opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-foreground mb-2">{service.title}</h3>
        <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onRequestQuote(service);
          }}
          className="inline-flex items-center gap-2 bg-garden-gradient text-primary-foreground font-body font-bold text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity cursor-pointer"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.609l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.826-6.326-2.208l-.442-.356-3.282 1.1 1.1-3.282-.356-.442A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
          Solicitar Presupuesto
        </button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);
  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");

  const handleRequestQuote = (service: (typeof services)[0]) => {
    setSelectedService(service);
    setDateValue("");
    setTimeValue("");
    setDialogOpen(true);
  };

  const handleOpenWhatsApp = () => {
    if (!selectedService) return;
    const baseMessage = selectedService.whatsapp;
    let dateTimeText = "";
    if (dateValue && timeValue) {
      try {
        const [hours, minutes] = timeValue.split(":");
        const date = parse(dateValue, "yyyy-MM-dd", new Date());
        const dateStr = format(date, "EEEE d 'de' MMMM", { locale: es });
        dateTimeText = ` Me gustaría agendar para el ${dateStr} a las ${hours}:${minutes}.`;
      } catch {
        dateTimeText = "";
      }
    }
    const message = baseMessage + dateTimeText;
    window.open(
      `https://wa.me/34624574029?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setDialogOpen(false);
  };

  return (
    <section id="servicios" className="py-24 bg-garden-light-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">Nuestros Servicios</h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Ofrecemos soluciones completas para el cuidado de tu jardín y piscina en Mallorca
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} onRequestQuote={handleRequestQuote} />
          ))}
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md z-[100]" onClick={(e) => e.stopPropagation()}>
          <DialogHeader>
            <DialogTitle>Elige fecha y hora</DialogTitle>
            <DialogDescription>
              {selectedService?.title}. Selecciona cuándo te gustaría recibir el servicio y se incluirá en el mensaje de WhatsApp.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="quote-date">Fecha</Label>
              <Input
                id="quote-date"
                type="date"
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="quote-time">Hora preferida</Label>
              <Input
                id="quote-time"
                type="time"
                value={timeValue}
                onChange={(e) => setTimeValue(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
              Cancelar
            </Button>
            <Button type="button" onClick={handleOpenWhatsApp} className="bg-[#25D366] hover:bg-[#20bd5a]">
              Abrir WhatsApp
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
