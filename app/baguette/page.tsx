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

const targetDate = new Date("2026-01-16T20:00:00");

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
    <main className="relative flex-1 overflow-hidden">
      <Script
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        type="module"
        strategy="afterInteractive"
      />
      <span className="ml-6 mt-1 text-xs uppercase tracking-[0.4em] text-white/60 group-hover:text-white/80 transition-colors">
      Status Projet : Devnet
      </span>
      <section className="relative z-10 flex min-h-screen w-full flex-col gap-12 px-6 pb-20 pt-28 lg:flex-row lg:items-start lg:gap-20 lg:px-16">
        <div className="flex-1 space-y-10">
          <header className="space-y-6">
            <p className="text-sm uppercase tracking-[0.6em] text-white/50">
              Le Protocole Sacré de la Boulangerie
            </p>
            <h1 className="text-4xl font-medieval text-boulange-gold md:text-5xl">
              🥖 Présentation de la Baguette
            </h1>
            <p className="text-lg text-white/80">
              Bienvenue dans un univers où la blockchain rencontre la croûte
              dorée et la mie divine. Ici, nous ne forgeons pas des tokens...
              nous enfournons des légendes.{" "}
              <span className="font-medieval">
                <a
                  href="https://github.com/projet-boulangerie/baguette"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-boulange-gold/50 hover:text-boulange-gold transition-colors"
                >
                  $BAGUETTE
                </a>
              </span>{" "}
              c&apos;est un symbole de résistance, de
              tradition et de croustillant intergalactique.
            </p>
            <blockquote className="border-l-4 border-boulange-gold/50 pl-6 text-sm italic text-white/60">
              “Un pour tous, tous pour la pâte.”
            </blockquote>
          </header>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="absolute left-0 top-0 h-full rounded-full bg-boulange-gold transition-all duration-700"
                  style={{ width: `${completionWidth}%` }}
                />
              </div>

              <ul className="grid gap-6 md:grid-cols-2">
                {phases.map((phase, index) => (
                  <li
                    key={phase.title}
                    className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-boulange-gold/60 hover:bg-boulange-gold/10"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full border text-xs font-semibold uppercase tracking-wide ${statusStyles[phase.status]}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm font-semibold uppercase tracking-wide text-white">
                        {phase.title}
                      </p>
                    </div>
                    <p className="text-sm text-white/70">{phase.caption}</p>
                  </li>
                ))}
              </ul>
            </div>

            <section className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
              <h2 className="mb-6 text-2xl font-medieval text-boulange-gold">
                CTF time left for official ctf start
              </h2>
              {hasLaunched ? (
                <p className="text-lg font-semibold text-boulange-gold">
                  The official CTF has launched. Bonne chance, boulanger(e)s&nbsp;!
                </p>
              ) : (
                <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-6 text-white">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex min-w-[120px] flex-col items-center rounded-2xl border border-boulange-gold/40 bg-black/40 px-6 py-4"
                    >
                      <span className="text-3xl font-semibold text-boulange-gold">
                        {item.value.toString().padStart(2, "0")}
                      </span>
                      <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              <p className="mt-6 text-sm text-white/70">
                Meanwhile there will be some easy CTFs in the dev net before the launch.
              </p>
            </section>

          </div>
        </div>

        <aside className="flex-1 space-y-8 lg:self-start">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="mb-4 text-2xl font-medieval text-boulange-gold">
              Reliques on-chain
            </h2>
            <p className="mb-6 text-sm text-white/70">
              Avant de valider le flag principal, assure-toi de récupérer quelques POL Amoy gratuits via le{" "}
              <a
                href="https://faucet.polygon.technology/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-boulange-gold underline underline-offset-4 hover:text-white"
              >
                faucet officiel
              </a>{" "}
              pour couvrir tes écritures on-chain.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                  Distributor smart contract
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">Write access</h3>
                <a
                  href="https://amoy.polygonscan.com/address/0xea1cba7222b3e059245bb5f6e053a7d54e3b6d1b#writeContract"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-medium text-boulange-gold underline underline-offset-4 hover:text-white"
                >
                  View on Polygonscan
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">$BAGUETTE token</p>
                <h3 className="mt-2 text-lg font-semibold text-white">Contract metadata</h3>
                <a
                  href="https://amoy.polygonscan.com/token/0x280d648f11a22c5d83af781ae7a86210a3bf10c4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-medium text-boulange-gold underline underline-offset-4 hover:text-white"
                >
                  View on Polygonscan
                </a>
              </div>
            </div>
          </section>

          <div className="relative aspect-square w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-4 backdrop-blur">
            <div className="absolute inset-0 rounded-3xl border border-white/10" />

            <model-viewer
              src={modelSrc}
              poster={posterSrc}
              alt="Homemade Bread :: RAWscan ::."
              camera-controls
              autoplay
              shadow-intensity="0.8"
              shadow-softness="0.8"
              exposure="1.25"
              environment-image="neutral"
              auto-rotate
              ar
              camera-orbit="135deg 60deg 4.2m"
              field-of-view="45deg"
              min-field-of-view="35deg"
              max-field-of-view="65deg"
              camera-target="0m 0m 0m"
              interaction-prompt="auto"
              className="h-full w-full rounded-2xl bg-black/40"
            />

            <div className="absolute bottom-4 left-1/2 w-[90%] -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-center text-xs uppercase tracking-[0.3em] text-white/70">
              Manipulez la relique sacrée en 3D • Stay tuned
            </div>
          </div>

          <article className="space-y-6 text-white/80">
            <h2 className="text-2xl font-medieval text-boulange-gold">Concept</h2>
            <p>
              La <span className="font-medieval">$BAGUETTE</span> est une relique numérique rare — il n&apos;existe
              que quatre baguettes sacrées dans tout le multivers. Chacune incarne un fragment du levain originel,
              estimé à un milliard de dollars l&apos;unité (prix indicatif, dépendant de la qualité de la mie).
            </p>
            <p>
              Forgée sur une blockchain bénie par le Saint-Levain,
              <span className="font-medieval">
                {" "}
                <a
                  href="https://github.com/projet-boulangerie/baguette"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-boulange-gold/50 hover:text-boulange-gold transition-colors"
                >
                  $BAGUETTE
                </a>
              </span>{" "}
              repose sur des principes immuables : quatre unités seulement, pas de mint, pas de burn, car la perfection
              ne se duplique pas. Entièrement décentralisé, car même le pain doit lever librement.
            </p>

            <h2 className="text-2xl font-medieval text-boulange-gold">⚔️ La Quête Divine</h2>
            <p>
              Notre mission est claire : anéantir le <span className="text-red-400">projet-gizmo</span>. À travers le
              Protocole Baguette, nous défendrons la pureté du pain contre les forces du mal.
            </p>

            <h2 className="text-2xl font-medieval text-boulange-gold">🕊️ La Promesse de la Baguette</h2>
            <p>
              “Car il n&apos;existe pas de plus grand trésor que la chaleur d&apos;un pain frais et la confiance
              d&apos;un smart contract immuable.”
            </p>
            <p>
              Le Projet Baguette est une ode au pain, à la culture, et à l&apos;esprit de la décentralisation. Chaque
              transaction est une miette, chaque bloc un four, chaque holder un BOULANGER céleste.
            </p>

            <footer className="pt-4 text-xs uppercase tracking-[0.4em] text-white/40">
              Copyright © 2025 Projet Baguette — Que la mie soit avec vous.
            </footer>
          </article>
        </aside>
      </section>
    </main>
  );
}
