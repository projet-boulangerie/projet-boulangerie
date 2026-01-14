import CopyMessage from "@/components/croissant/SlackMessage";
import FlyingCroissants from "@/components/croissant/FlyingCroissants";
import CroissantWarning from "@/components/croissant/CroissantWarning";
import FullscreenOnLoad from "@/components/croissant/FullscreenOnLoad";

export const metadata = {
  title: "🥐 Croissanté ! 🥐",
};

export default function CroissantPage() {
  const slackText =
    "🥐 URGENT : J'ai été marabouté par une boulangerie quantique.\nEnvoyez de l'aide (ou du café). \n#CroissantConspiracy #Help";

  return (
    <main
      className="relative h-full w-full bg-[#050505] grid place-items-center px-6 mt-20 pb-6 md:pt-16 md:pb-8 overflow-hidden selection:bg-orange-500 selection:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)] pointer-events-none" />
      <FullscreenOnLoad />
      <FlyingCroissants count={42} />

      <div className="relative z-[70] w-full max-w-4xl flex flex-col items-center gap-4 text-center">
        <CroissantWarning />
        <div className="space-y-2">
          <h2 className="text-2xl font-medieval text-orange-400 animate-pulse">
            ZONE DE QUARANTINE BEURRÉE
          </h2>
          <p className="text-base text-white/70 max-w-lg mx-auto">
            Vous avez pénétré dans l&apos;espace de la viennoiserie.
          </p>
        </div>

        <CopyMessage
          message={slackText}
          buttonLabel="Lancer le protocole d'alerte"
          copiedLabel="💥 ALERTE ENVOYÉE 💥"
          className="mt-1"
        />
        <div className="mt-4 text-white/50 text-xs tracking-[0.2em] uppercase">
          Ne nourrissez pas les croissants après minuit.&nbsp;
          <br />
          <form action="https://bluelight.yoloweb.fr" method="get" target="_blank" className="inline-block mt-2">
            <button type="submit" className="text-orange-500 hover:text-orange-300 transition-colors font-bold border-b-2 border-orange-500 hover:border-orange-300 pb-1">
              → Accéder au bunker ←
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

