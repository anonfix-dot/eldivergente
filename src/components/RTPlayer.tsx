import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const RTPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [error, setError] = useState<string>("");
  const [isCinemaMode, setIsCinemaMode] = useState(false);
  const [retries, setRetries] = useState(0);

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

        <div className="max-w-6xl mx-auto">
          <div
            className={`relative mx-auto transition-all duration-300 ${
              isCinemaMode ? "w-full" : "w-full max-w-2xl"
            }`}
          >
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
        </div>
      </div>
    </section>
  );
};
