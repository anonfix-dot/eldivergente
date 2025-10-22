import { Link } from "react-router-dom";
import { Twitter, Youtube, Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo-agenda33.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-primary/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Agenda33" className="h-10 w-10" />
              <span className="text-xl font-heading font-bold glow-blue">
                AGENDA<span className="text-secondary glow-violet">33</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Análisis independiente de conspiraciones, geopolítica global y los hilos ocultos que mueven el mundo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg mb-4 text-primary">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-muted-foreground hover:text-primary transition-colors">
                  Artículos
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre el Autor
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="font-heading text-lg mb-4 text-secondary">Síguenos</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.instagram.com/elantisistema.ok/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:info@agenda33.com"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Agenda33. Todos los derechos reservados.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Política de Privacidad
            </Link>
            {" · "}
            <Link to="/terms" className="hover:text-primary transition-colors">
              Aviso Legal
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
