"use client";
import { useState } from "react";
import MentionsLegalesContent from "@/components/legal/MentionsLegalesContent";
import PolitiqueConfidentialiteContent from "@/components/legal/PolitiqueConfidentialiteContent";

export default function Footer() {
  const [open, setOpen] = useState<null | "ml" | "pc">(null);
  const close = () => setOpen(null);

  return (
    <footer className="bg-transparent py-3">
      <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-0">
        <span className="col-start-2 justify-self-center text-xs md:text-sm opacity-80">
          Copyright © 2025 Projet Boulangerie. Tous droits réservés.
          <span className="mx-2">•</span>
          <button type="button" onClick={() => setOpen("ml")} className="underline hover:no-underline">
            Mentions légales
          </button>
          <span className="mx-1">|</span>
          <button type="button" onClick={() => setOpen("pc")} className="underline hover:no-underline">
            Politique de confidentialité
          </button>
        </span>
        <span className="animated-badge select-none col-start-3 justify-self-end mr-8">
          Powered by AI
        </span>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div
            className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-neutral-900 p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-3xl font-medieval text-boulange-gold text-center mb-6">
                {open === "ml" ? "Mentions légales" : "Politique de confidentialité"}
              </h3>
              <button type="button" onClick={close} className="rounded px-2 py-1 hover:bg-white/10" aria-label="Fermer">
                ✕
              </button>
            </div>
            {open === "ml" ? <MentionsLegalesContent /> : <PolitiqueConfidentialiteContent />}
          </div>
        </div>
      )}
    </footer>
  );
}

