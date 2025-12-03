import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { Maximize2, Minimize2, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export const RTPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [error, setError] = useState<string>("");
  const [isCinemaMode, setIsCinemaMode] = useState(false);
  const [retries, setRetries] = useState(0);
  const [isExplanationOpen, setIsExplanationOpen] = useState(true);
  const [isComparisonOpen, setIsComparisonOpen] = useState(true);

  const streamUrl = "https://rt-esp.rttv.com/live/rtesp/playlist.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const ensurePlay = () => {
      video.play().catch(() => {});
    };

    const handleClick = () => ensurePlay();
    document.addEventListener("click", handleClick, { once: true });
    document.addEventListener("touchstart", handleClick, { once: true });

    const attachSource = () => {
      setError("");

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = streamUrl;
        video.addEventListener("error", () => handleRetry("Fallo de reproducción nativa."));
        ensurePlay();
      } else if (Hls.isSupported()) {
        const hls = new Hls({
          liveDurationInfinity: true,
          maxLiveSyncPlaybackRate: 1.5,
          fragLoadingTimeOut: 8000,
          manifestLoadingTimeOut: 8000,
        });

        hls.on(Hls.Events.ERROR, (_, data) => {
          if (data?.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                hls.startLoad();
                handleRetry("Error de red. Reintentando...");
                break;
              case Hls.ErrorTypes.MEDIA_ERROR:
                hls.recoverMediaError();
                handleRetry("Error de medios. Recuperando...");
                break;
              default:
                handleRetry("Error fatal en HLS.");
                break;
            }
          }
        });

        hls.loadSource(streamUrl);
        hls.attachMedia(video);
        hlsRef.current = hls;
        ensurePlay();
      } else {
        setError("Tu navegador no soporta HLS nativo ni hls.js.");
      }
    };

    const handleRetry = (info: string) => {
      const newRetries = retries + 1;
      setRetries(newRetries);
      setError(`${info} Intento ${newRetries}…`);

      if (newRetries <= 5) {
        setTimeout(() => {
          try {
            hlsRef.current?.destroy();
          } catch {}
          video.removeAttribute("src");
          video.load();
          attachSource();
        }, Math.min(2000 * newRetries, 8000));
      } else {
        setError("No se pudo reproducir el stream tras varios intentos.");
      }
    };

    attachSource();

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("touchstart", handleClick);
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [retries]);

  const toggleCinemaMode = () => {
    setIsCinemaMode(!isCinemaMode);
  };

  const comparisonData = [
    { area: "Propiedad", rt: "Estatal (Gobierno de Rusia)", occidental: "Corporativa/empresarial (grupos económicos de EE. UU. y Europa)" },
    { area: "Control editorial", rt: "Directo del Estado ruso", occidental: "Dueños, conglomerados mediáticos, anunciantes y alineamiento político con EE. UU./OTAN" },
    { area: "Objetivo central", rt: "Defender los intereses geopolíticos rusos", occidental: "Defender intereses corporativos y reforzar narrativas geopolíticas de EE. UU. y la OTAN" },
    { area: "Grado de independencia", rt: "Muy bajo", occidental: "Bajo-moderado (limitado por intereses económicos y geopolíticos occidentales)" },
    { area: "Narrativa", rt: "Pro-Rusia, crítica de la OTAN, foco en errores de EE. UU. y Europa", occidental: "Pro-Occidente, pro-OTAN, crítica sistemática de Rusia, China, Irán y gobiernos no alineados" },
    { area: "Autonomía periodística", rt: "Reducida por la línea estatal", occidental: "Reducida por intereses corporativos, lineamientos políticos y presiones del complejo mediático-occidental" },
    { area: "Uso geopolítico", rt: "Alto (herramienta del Estado ruso)", occidental: "Alto (herramienta cultural e informativa del poder occidental y del gobierno estadounidense)" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 glow-blue">
            RT en Español - <span className="text-secondary glow-violet">En Vivo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transmisión en directo de RT en Español, el medio de comunicación censurado por el establishment occidental. 
            Accede a perspectivas que no encontrarás en los medios convencionales.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className={`grid gap-6 ${isCinemaMode ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-3"}`}>
            {/* Video Player */}
            <div className={`${isCinemaMode ? "col-span-1" : "lg:col-span-2"}`}>
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                <video
                  ref={videoRef}
                  muted
                  playsInline
                  controls
                  preload="metadata"
                  className="absolute inset-0 w-full h-full bg-black rounded-lg shadow-2xl border border-primary/20"
                />
                
                <div className="absolute top-3 left-3 bg-destructive text-white font-semibold text-xs px-3 py-1.5 rounded-md shadow-lg animate-pulse">
                  ● EN VIVO
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <Button
                  onClick={toggleCinemaMode}
                  variant="outline"
                  className="border-primary/30 hover:border-primary/50"
                >
                  {isCinemaMode ? (
                    <>
                      <Minimize2 className="mr-2" size={18} />
                      Salir del Modo Cine
                    </>
                  ) : (
                    <>
                      <Maximize2 className="mr-2" size={18} />
                      Modo Cine
                    </>
                  )}
                </Button>
              </div>

              {error && (
                <div className="mt-4 p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-center">
                  <p className="text-destructive text-sm">{error}</p>
                </div>
              )}
            </div>

            {/* Why RT Card - Side */}
            {!isCinemaMode && (
              <div>
                <Collapsible open={isExplanationOpen} onOpenChange={setIsExplanationOpen}>
                  <div className="bg-card/50 border border-primary/20 rounded-lg overflow-hidden glow-box-blue h-full">
                    <CollapsibleTrigger asChild>
                      <button className="w-full p-4 flex items-center justify-between text-left hover:bg-primary/5 transition-colors">
                        <h3 className="font-heading text-lg font-bold text-primary">¿Por qué elegimos RT?</h3>
                        {isExplanationOpen ? (
                          <ChevronUp className="text-primary" size={20} />
                        ) : (
                          <ChevronDown className="text-primary" size={20} />
                        )}
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-4 pb-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Si bien RT es un medio financiado por el Estado ruso, consideramos pertinente ofrecer esta perspectiva como contrapunto informativo. Desde nuestra posición editorial, observamos que los principales medios occidentales suelen presentar una cobertura alineada con los intereses geopolíticos de EE.UU. y la OTAN, especialmente en temas como el conflicto en Ucrania y las relaciones con Rusia y China. Incluir RT permite a nuestra audiencia acceder a narrativas alternativas y formar criterios propios mediante el contraste de fuentes diversas.
                        </p>
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              </div>
            )}
          </div>

          {/* Comparison Table - Below Player - Horizontal */}
          {!isCinemaMode && (
            <div className="mt-8">
              <Collapsible open={isComparisonOpen} onOpenChange={setIsComparisonOpen}>
                <div className="bg-card/50 border border-secondary/20 rounded-lg overflow-hidden glow-box-violet">
                  <CollapsibleTrigger asChild>
                    <button className="w-full p-4 flex items-center justify-between text-left hover:bg-secondary/5 transition-colors">
                      <h3 className="font-heading text-xl font-bold text-secondary">Comparativa de Medios</h3>
                      {isComparisonOpen ? (
                        <ChevronUp className="text-secondary" size={20} />
                      ) : (
                        <ChevronDown className="text-secondary" size={20} />
                      )}
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 pb-6 overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border/50">
                            <th className="text-left py-3 pr-4 text-foreground font-semibold w-1/5">Área</th>
                            <th className="text-left py-3 px-4 text-primary font-semibold w-2/5">RT</th>
                            <th className="text-left py-3 pl-4 text-secondary font-semibold w-2/5">Medios Occidentales</th>
                          </tr>
                        </thead>
                        <tbody>
                          {comparisonData.map((row, index) => (
                            <tr key={index} className="border-b border-border/30 last:border-0 hover:bg-muted/20 transition-colors">
                              <td className="py-3 pr-4 text-foreground font-medium">{row.area}</td>
                              <td className="py-3 px-4 text-muted-foreground">{row.rt}</td>
                              <td className="py-3 pl-4 text-muted-foreground">{row.occidental}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};