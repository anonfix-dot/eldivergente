import { useState } from "react";
import { Copy, Check, Shield, Globe, Lock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import donateHero from "@/assets/donate-hero.jpg";
import cryptoTransparency from "@/assets/crypto-transparency.jpg";

interface CryptoAddress {
  name: string;
  network: string;
  address: string;
  icon: string;
}

const cryptoAddresses: CryptoAddress[] = [
  {
    name: "USDT",
    network: "BEP20 (Binance Smart Chain)",
    address: "0x448cb09417657e10c425eb52150Cc8854D3BD2CF",
    icon: "₮"
  }
];

const Donate = () => {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);
  const { toast } = useToast();

  const copyToClipboard = async (address: string, name: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(address);
      toast({
        title: "Dirección copiada",
        description: `La dirección de ${name} ha sido copiada al portapapeles`,
      });
      setTimeout(() => setCopiedAddress(null), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "No se pudo copiar la dirección",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center particles-bg pt-20 md:pt-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.9)), url(${donateHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center z-10 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <Heart className="text-primary mx-auto mb-4 sm:mb-6 glow-blue" size={48} />
            <h1 className="font-heading text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 glow-blue">
              Apoya a <span className="text-secondary glow-violet">EL DIVERGENTE</span>
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 text-muted-foreground max-w-2xl mx-auto px-2">
              Tu contribución nos ayuda a mantener el periodismo independiente y libre de censura
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 glow-violet">
                ¿Por qué donar?
              </h2>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">El Divergente</strong> es un espacio de análisis crítico e independiente 
                que se dedica a investigar y exponer las verdades que los medios tradicionales prefieren ocultar.
              </p>
              <p className="text-muted-foreground mb-4">
                A través de análisis profundos sobre geopolítica, sociedades secretas, economía oculta y conspiraciones 
                globales, buscamos desentrañar los hilos invisibles que mueven el mundo.
              </p>
              <p className="text-muted-foreground">
                Tu donación nos permite:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                <li>Mantener nuestra independencia editorial</li>
                <li>Investigar sin censura ni presiones</li>
                <li>Mejorar la infraestructura técnica de la plataforma</li>
                <li>Producir contenido de mayor calidad</li>
                <li>Expandir nuestra cobertura temática</li>
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src={cryptoTransparency} 
                alt="Transparencia Cripto" 
                className="rounded-lg border border-primary/30 glow-box-blue w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Crypto Section */}
      <section className="py-16 px-4 bg-muted/10">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 glow-blue">
            ¿Por qué criptomonedas?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-card/50 border border-primary/20 glow-box-blue">
              <Lock className="text-primary mx-auto mb-4" size={48} />
              <h3 className="font-heading text-xl font-bold mb-3 text-primary">Privacidad</h3>
              <p className="text-muted-foreground text-sm">
                Las criptomonedas permiten donaciones anónimas, protegiendo tu identidad 
                y evitando el rastreo de sistemas financieros tradicionales.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card/50 border border-secondary/20 glow-box-violet">
              <Shield className="text-secondary mx-auto mb-4" size={48} />
              <h3 className="font-heading text-xl font-bold mb-3 text-secondary">Seguridad</h3>
              <p className="text-muted-foreground text-sm">
                Las transacciones blockchain son inmutables y transparentes, 
                garantizando que tu donación llegue directamente a nosotros.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card/50 border border-primary/20 glow-box-blue">
              <Globe className="text-primary mx-auto mb-4" size={48} />
              <h3 className="font-heading text-xl font-bold mb-3 text-primary">Sin Censura</h3>
              <p className="text-muted-foreground text-sm">
                Las criptomonedas no pueden ser bloqueadas por gobiernos o instituciones, 
                garantizando el flujo libre de apoyo al periodismo independiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Addresses Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 glow-violet">
            Direcciones de Donación
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Selecciona tu criptomoneda preferida y copia la dirección correspondiente
          </p>
          
          <div className="space-y-6">
            {cryptoAddresses.map((crypto, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/40 transition-all duration-300 glow-box-blue"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-bold text-primary">{crypto.icon}</span>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {crypto.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{crypto.network}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 bg-background/50 p-2 sm:p-3 rounded border border-border">
                  <code className="flex-1 text-[10px] sm:text-sm text-foreground/80 break-all font-mono leading-relaxed">
                    {crypto.address}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(crypto.address, crypto.name)}
                    className="shrink-0 h-8 w-8 sm:h-10 sm:w-10"
                  >
                    {copiedAddress === crypto.address ? (
                      <Check className="text-green-500" size={16} />
                    ) : (
                      <Copy className="text-primary" size={16} />
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto max-w-3xl text-center">
          <Shield className="text-secondary mx-auto mb-6 glow-violet" size={64} />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 glow-blue">
            Transparencia Total
          </h2>
          <p className="text-muted-foreground mb-4">
            Cada donación recibida se destina exclusivamente al mantenimiento y mejora de la plataforma, 
            investigación periodística, producción de contenido y costos operativos básicos.
          </p>
          <p className="text-muted-foreground">
            Creemos en la transparencia absoluta. Si tienes preguntas sobre cómo se utilizan 
            los fondos, no dudes en contactarnos.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
