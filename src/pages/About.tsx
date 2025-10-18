import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Eye, Target, Compass } from "lucide-react";
import authorPhoto from "@/assets/author-photo.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 glow-blue">
            Sobre el Autor
          </h1>
          <p className="text-lg text-muted-foreground">
            Un investigador independiente dedicado a desentrañar las verdades ocultas del poder global.
          </p>
        </div>
      </section>

      {/* Author Profile */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="rounded-lg overflow-hidden border border-primary/30 glow-box-blue">
                <img src={authorPhoto} alt="Autor de Agenda33" className="w-full h-auto" />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold glow-blue">El Observador Independiente</h2>
              <p className="text-foreground/90 leading-relaxed">
                Detrás de Agenda33 hay un compromiso inquebrantable con la verdad, más allá de las narrativas
                oficiales. No soy periodista corporativo ni vocero institucional. Soy un investigador independiente
                que ha dedicado años a estudiar las estructuras de poder que operan en las sombras.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Mi método es simple pero riguroso: cuestionar todo, verificar con fuentes primarias, conectar los
                puntos que otros prefieren ignorar y compartir mis hallazgos sin censura ni autocensura.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Este blog no busca convencerte de nada. Busca ofrecerte información, análisis y perspectivas que
                raramente encontrarás en los medios convencionales. Lo que hagas con esa información es tu elección.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card/50 border border-primary/20 rounded-lg glow-box-blue">
              <Eye className="text-primary mx-auto mb-4" size={48} />
              <h3 className="font-heading text-xl font-bold mb-3 text-primary">Visión</h3>
              <p className="text-muted-foreground">
                Ver más allá de las apariencias y las narrativas oficiales para revelar las verdaderas dinámicas de
                poder.
              </p>
            </div>

            <div className="text-center p-8 bg-card/50 border border-secondary/20 rounded-lg glow-box-violet">
              <Target className="text-secondary mx-auto mb-4" size={48} />
              <h3 className="font-heading text-xl font-bold mb-3 text-secondary">Misión</h3>
              <p className="text-muted-foreground">
                Proporcionar análisis independiente y profundo sobre geopolítica, conspiraciones y estructuras de
                control global.
              </p>
            </div>

            <div className="text-center p-8 bg-card/50 border border-primary/20 rounded-lg glow-box-blue">
              <Compass className="text-primary mx-auto mb-4" size={48} />
              <h3 className="font-heading text-xl font-bold mb-3 text-primary">Principios</h3>
              <p className="text-muted-foreground">
                Independencia editorial absoluta, rigor investigativo y compromiso con la verdad, sin importar a quién
                incomode.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-12 glow-violet">Manifiesto</h2>
          
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              Vivimos en una era de información sin precedentes, pero también de desinformación sistemática. Los
              grandes medios de comunicación, controlados por corporaciones e intereses políticos, moldean la realidad
              según agendas preestablecidas.
            </p>
            <p className="text-lg">
              Las "teorías de conspiración" de ayer son los hechos documentados de hoy. El espionaje masivo, las
              operaciones de falsa bandera, las intervenciones encubiertas, las manipulaciones económicas... todo esto
              ya no es teoría. Es historia confirmada.
            </p>
            <p className="text-lg">
              Este blog existe para explorar las zonas grises que los medios convencionales ignoran, para conectar los
              puntos que otros prefieren dejar separados, para hacer las preguntas incómodas que nadie más se atreve a
              formular.
            </p>
            <p className="text-lg font-bold text-primary glow-blue">
              No pido que creas ciegamente. Pido que pienses críticamente, que investigues por ti mismo y que nunca
              aceptes ninguna narrativa —incluida la mía— sin cuestionarla.
            </p>
            <p className="text-lg">
              Bienvenido a Agenda33. Donde las teorías se transforman en conocimiento.
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default About;
