"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { basePath } from "@/lib/constants";

type PhaseStatus = "done" | "active" | "upcoming" | "not done";

interface Phase {
  title: string;
  caption: string;
  status: PhaseStatus;
}

const phases: Phase[] = [
  {
    title: "Smart contract creation",
    caption: "Forge complète par l'ordre des scribes.",
    status: "done",
  },
  {
    title: "Gouvernance des fours",
    caption: "Installation des fours quantiques par la confrérie des maîtres-feux.",
    status: "done",
  },
  {
    title: "Distribution du levain sacré",
    caption: "Rituel hebdomadaire avec bénédiction du levain de grand-mère.",
    status: "done",
  },
  {
    title: "Auditing currently",
    caption: "Analyse en profondeur par les chevaliers du Saint-Levain.",
    status: "done",
  },
  {
    title: "CTF launch",
    caption: "Des récompenses en monnaie bien réelle (mais ce sera hard af).",
    status: "not done",
  },
  {
    title: "Stay tuned",
    caption: "D'autres rites boulangers se préparent...",
    status: "not done",
  },
];

const statusStyles: Record<PhaseStatus, string> = {
  done: "bg-emerald-500 text-black border-emerald-300",
  active: "bg-boulange-gold text-black border-boulange-gold/70 animate-pulse",
  upcoming: "bg-transparent text-white border-white/30",
  "not done": "bg-transparent text-white/60 border-white/20",
};

const activeIndex = phases.findIndex((phase) => phase.status === "active");

const completionWidth =
  activeIndex >= 0
    ? ((activeIndex + 1) / phases.length) * 100
    : (phases.filter((phase) => phase.status === "done").length /
      phases.length) *
    100;

const modelSrc = `${basePath}/pane/pane.gltf`;
const posterSrc = `${basePath}/pane/textures/pane.jpg`;

const targetDate = new Date("2026-03-16T20:00:00");

const calculateTimeLeft = () => {
  const now = Date.now();
  const total = targetDate.getTime() - now;

  if (total <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return { total, days, hours, minutes, seconds };
};

export default function BaguettePage() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hasLaunched = timeLeft.total === 0;

  return (
    <main className="relative flex-1 overflow-hidden bg-neutral-950 text-boulange-flour selection:bg-boulange-gold selection:text-black">
      <Script
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        type="module"
        strategy="afterInteractive"
      />
      <span className="ml-6 mt-1 text-xs uppercase tracking-[0.4em] text-white/40 group-hover:text-boulange-gold transition-colors duration-500">
        Mission Alpha : Croustillant Infini
      </span>
      <section className="relative z-10 flex min-h-screen w-full flex-col gap-12 px-6 pb-20 pt-28 lg:flex-row lg:items-start lg:gap-20 lg:px-16">
        <div className="flex-1 space-y-10">
          <header className="space-y-6">
            <p className="text-sm uppercase tracking-[0.6em] text-boulange-gold/60 animate-pulse">
              Confidentiel - Niveau 5
            </p>
            <h1 className="text-4xl font-medieval text-white md:text-6xl drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              🥖 Opération <span className="text-boulange-gold">Mie Molle</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Vous pensez que c&apos;est juste du pain ? <span className="font-bold text-boulange-gold">Faux.</span> C&apos;est une arme de destruction massive contre la faim dans le monde et la morosité des lundis matin.
              Le <span className="font-medieval text-boulange-gold">
                <a
                  href="https://github.com/projet-boulangerie/baguette"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline decoration-wavy underline-offset-4"
                >
                  $BAGUETTE
                </a>
              </span>{" "}
              est le seul actif stable indexé sur le prix du beurre demi-sel à Guérande.
            </p>
            <blockquote className="border-l-4 border-boulange-gold pl-6 text-xl italic text-white/70 font-medieval">
              “Tout est bon dans le croûton.”
            </blockquote>
          </header>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="relative h-4 w-full overflow-hidden rounded-full bg-white/5 border border-white/10">
                <div
                  className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-yellow-600 via-boulange-gold to-yellow-100 shadow-[0_0_20px_rgba(212,175,55,0.8)] transition-all duration-1000 ease-out"
                  style={{ width: `${completionWidth}%` }}
                />
              </div>

              <ul className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Méditation du Grain",
                    caption: "Le blé réfléchit au sens de la vie avant d'être moulu.",
                    status: "done",
                  },
                  {
                    title: "Insurrection du Levain",
                    caption: "Les bactéries prennent le contrôle du laboratoire.",
                    status: "done",
                  },
                  {
                    title: "Fusion Thermonucléaire",
                    caption: "Cuisson à 250°C. Risque d'explosion de saveurs.",
                    status: "done",
                  },
                  {
                    title: "Audit Olfactif",
                    caption: "Si ça sent le brûlé, c'est raté. Sinon, on valide.",
                    status: "done",
                  },
                  {
                    title: "Distribution Galactique",
                    caption: "Colonisation de Mars avec des sandwichs jambon-beurre.",
                    status: "not done",
                  },
                  {
                    title: "Singularité Farineuse",
                    caption: "Le moment où la baguette devient consciente.",
                    status: "not done",
                  },
                ].map((phase, index) => (
                  <li
                    key={phase.title}
                    className="group relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-boulange-gold/50 hover:bg-white/10 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.3)]"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold shadow-lg ${statusStyles[phase.status as PhaseStatus]}`}
                      >
                        {String(index + 1)}
                      </span>
                      <p className="text-base font-bold uppercase tracking-wider text-white group-hover:text-boulange-gold transition-colors">
                        {phase.title}
                      </p>
                    </div>
                    <p className="text-sm text-white/60 group-hover:text-white/90 transition-colors">{phase.caption}</p>
                  </li>
                ))}
              </ul>
            </div>

            <section className="rounded-3xl border border-boulange-gold/20 bg-gradient-to-br from-black to-zinc-900 p-8 text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
              <h2 className="mb-6 text-3xl font-medieval text-boulange-gold relative z-10">
                🚀 Décollage de la Fournée
              </h2>
              {hasLaunched ? (
                <p className="text-2xl font-bold text-white animate-bounce relative z-10">
                  ⚠️ ALERTE : LES BAGUETTES SONT CHAUDES ! ⚠️
                </p>
              ) : (
                <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-4 text-white relative z-10">
                  {[
                    { label: "Dodos", value: timeLeft.days },
                    { label: "Siestes", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Miettes", value: timeLeft.seconds },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center justify-center w-24 h-24 rounded-full border-4 border-boulange-gold/30 bg-black shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]"
                    >
                      <span className="text-2xl font-black text-boulange-gold">
                        {item.value}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              <p className="mt-8 text-sm text-white/50 italic relative z-10">
                Le temps est une illusion, l&apos;heure du déjeuner est doublement une illusion.
              </p>
            </section>

          </div>
        </div>

        <aside className="flex-1 space-y-8 lg:self-start lg:sticky lg:top-24">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur hover:bg-white/10 transition-colors">
            <h2 className="mb-4 text-2xl font-medieval text-boulange-gold">
              💎 Loot Box
            </h2>
            <p className="mb-6 text-sm text-white/70">
              C&apos;est dangereux d&apos;y aller seul ! Prends ceci (c&apos;est gratuit) :&nbsp;
              <a
                href="https://faucet.polygon.technology/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-boulange-gold hover:underline"
              >
                FAUCET MAGIQUE
              </a>.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://amoy.polygonscan.com/address/0xea1cba7222b3e059245bb5f6e053a7d54e3b6d1b#writeContract"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/10 hover:border-boulange-gold/50 transition-all"
              >
                <span className="font-medieval text-gray-300 group-hover:text-white">Le Grimoire Du Four</span>
                <span className="text-xl">📜</span>
              </a>
              <a
                href="https://amoy.polygonscan.com/token/0x280d648f11a22c5d83af781ae7a86210a3bf10c4"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/10 hover:border-boulange-gold/50 transition-all"
              >
                <span className="font-medieval text-gray-300 group-hover:text-white">$BAGUETTE Stats</span>
                <span className="text-xl">📈</span>
              </a>
            </div>
          </section>

          <div className="relative aspect-square w-full max-w-2xl overflow-hidden rounded-[2rem] border-4 border-boulange-gold/20 bg-black/80 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />

            <model-viewer
              src={modelSrc}
              poster={posterSrc}
              alt="Homemade Bread :: RAWscan ::."
              camera-controls
              autoplay
              shadow-intensity="1"
              shadow-softness="0.5"
              exposure="1.5"
              environment-image="neutral"
              auto-rotate
              rotation-per-second="30deg"
              ar
              className="h-full w-full"
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-max z-20">
              <div className="px-6 py-3 rounded-full bg-boulange-gold text-black font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.6)] animate-bounce">
                Tournez-moi !
              </div>
            </div>
          </div>

          <article className="space-y-6 text-white/80 p-6 rounded-3xl bg-white/5 border border-dashed border-white/10">
            <h2 className="text-2xl font-medieval text-boulange-gold">📜 La Prophétie</h2>
            <p>
              Il est dit que celui qui détient les <span className="text-boulange-gold font-bold">4 Baguettes de l&apos;Apocalypse</span> contrôlera le cours du blé mondial.
            </p>
            <h2 className="text-2xl font-medieval text-boulange-gold">☠️ Nos Ennemis</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-white/60">
              <li>Le <span className="text-red-500">projet-gizmo</span> (Nos ennemis jurés)</li>
              <li>Le Gluten-Free (Hérétiques)</li>
              <li>Les Pains de Mie Industriels (Abominations)</li>
              <li>Les gens qui disent &quot;Chocolatine&quot; (Sujet sensible)</li>
            </ul>
          </article>
        </aside>
      </section>
    </main>
  );
}
