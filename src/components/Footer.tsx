const Footer = () => (
  <footer className="bg-foreground py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="font-body text-sm text-background/60">
        © {new Date().getFullYear()} Mateo's Garden. Todos los derechos reservados. Mallorca, España.
      </p>
    </div>
  </footer>
);

export default Footer;
