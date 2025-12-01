import Link from "next/link";
import { basePath } from '@/lib/constants';
import JoinGuildModal from "@/components/JoinGuildModal";

// components/Header.tsx
export function Header() {
  return (
    <div className="top-0 z-50 bg-[var(--background)] pl-6 pr-6 pt-6 mt-1 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <a href={`${basePath}/`} className="group">
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium font-medieval text-boulange-gold">
            Projet Boulangerie
          </h1>
          <span className="mt-1 text-xs uppercase tracking-[0.4em] text-white/60 group-hover:text-white/80 transition-colors">
            Status Projet : Devnet
          </span>
        </div>
      </a>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <ul className="flex flex-row gap-4">
          <li>
            <JoinGuildModal />
          </li>
          <li>
            <a href={`${basePath}/game`} className="nav-button text-base text-white">
              Jouer
            </a>
          </li>
          <li>
            <Link href="/croissant" rel="noopener noreferrer">
              <button className="nav-button text-base text-white">Croissanter</button>
            </Link>
          </li>
          <li>
            <Link href="/baguette" rel="noopener noreferrer">
              <button className="nav-button text-base text-white">Baguette</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
