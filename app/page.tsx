import Image from 'next/image';
import Link from 'next/link';
import { basePath } from '@/lib/constants';
import JoinGuildModal from '@/components/JoinGuildModal';


export default function Home() {

  return (
    <main className="flex-1 flex flex-col">
      <nav className="sticky top-0 z-50 bg-[var(--background)] flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <a href={`${basePath}/`}>
          <h1 className="text-2xl pl-6 py-7 font-medium font-medieval text-boulange-gold">
            Projet Boulangerie
          </h1>
        </a>
        <div className="p-6 flex flex-col md:flex-row items-center gap-4">
          <ul className="flex flex-row gap-4">
            <li><JoinGuildModal /></li>
            <li><a href={`${basePath}/game`} className="nav-button text-base text-white">Jouer</a></li>
            <li>
              <Link href='/croissant' rel="noopener noreferrer">
                <button className="nav-button text-base text-white">Croissanter</button>
              </Link>
            </li>
            <li>
              <Link href='/baguette' rel="noopener noreferrer">
                <button className="nav-button text-base text-white">Baguette</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <section id="presentation" className="flex-grow flex items-center justify-center px-12 py-10">
        <div className="max-w-xl text-center">
          <h2 className="text-4xl font-medieval mb-10 text-boulange-gold">La Guilde de la Boulangerie</h2>
          <p className="mb-6">
            Nous sommes les Gardiens de la Guilde de la Boulangerie, unis dans notre quête divine.
            Notre mission sacrée est d&apos;élever l&apos;art de la viennoiserie à des sommets inégalés,
            tout en défiant et surpassant toute concurrence.
          </p>
          <p className="mb-4">
            Notre objectif ultime est d&apos;anéantir le <span className="text-red-500">projet-gizmo</span>,
            démontrant ainsi notre suprématie via l&apos;art de la boulangerie.
            Nous lèverons l&apos;game sans levure, enfournerons nos créations avec traditions
            et serviront nos croissants en armure afin de relever la température.
          </p>
        </div>
      </section>

      <section id="equipe" className="py-4 px-4">
        <h2 className="text-3xl font-medieval text-center mb-8">
          <span className="bg-boulange-gold/15 py-4 px-8 rounded-lg inline-block">Notre Équipe Royale</span>
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Roi Divin */}
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-boulange-flour/10 rounded-lg">
            <div className="w-48 h-48 relative">
              <Image
                src={`${basePath}/king.png`}
                alt="Roi Divin"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-medieval text-boulange-gold mb-2">Roi Divin</h3>
              <p className="mb-4">
                Guide suprême du Projet Boulangerie, orchestrant la fusion parfaite entre tradition et innovation.
                Sa vision royale guide notre quête vers l&apos;excellence boulangère.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Visionnaire du projet</li>
                <li>Maître stratège</li>
                <li>Protecteur des traditions</li>
              </ul>
            </div>
          </div>

          {/* Seigneur suprême */}
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-boulange-flour/10 rounded-lg">
            <div className="w-48 h-48 relative">
              <Image
                src={`${basePath}/seigneur.jpeg`}
                alt="Seigneur suprême"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-medieval text-boulange-gold mb-2">Seigneur suprême</h3>
              <p className="mb-4">
                Gardien des secrets de la pâte feuilletée et maître dans l&apos;art de la viennoiserie.
                Mon rôle est d&apos;assurer que chaque croissant soit une œuvre d&apos;art comestible.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Maître de la pâte feuilletée</li>
                <li>Expert en viennoiseries</li>
                <li>Gardiens des traditions boulangères</li>
              </ul>
            </div>
          </div>

          {/* Grand maître Pâtissier */}
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-boulange-flour/10 rounded-lg">
            <div className="w-48 h-48 relative">
              <Image
                src={`${basePath}/patiss.png`}
                alt="Grand maître Pâtissier"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-medieval text-boulange-gold mb-2">Grand maître Pâtissier</h3>
              <p className="mb-4">
                Artisan passionné de la pâtisserie fine, je me consacre à l&apos;art délicat des desserts.
                Mon expertise s&apos;étend des entremets classiques aux créations innovantes, toujours
                guidé par la recherche de l&apos;excellence gustative.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Maître des entremets</li>
                <li>Expert en pâtisserie fine</li>
                <li>Créateur de desserts uniques</li>
              </ul>
            </div>
          </div>

          {/* Grand maître Panetier */}
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-boulange-flour/10 rounded-lg">
            <div className="w-48 h-48 relative">
              <Image
                src={`${basePath}/panetier.png`}
                alt="Grand maître Panetier"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-medieval text-boulange-gold mb-2">Grand maître Panetier</h3>
              <p className="mb-4">
                Sculpteur du pain quotidien, héritier du levain ancestral. Je veille à l&apos;alchimie des farines, à la noblesse de la croûte et à l&apos;âme de chaque mie.
                À l&apos;aube, mon four est un temple, et chaque fournée, un serment de qualité..
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Artisan du pain vivant</li>
                <li>Gardien du levain sacré</li>
                <li>Maître des cuissons dorées</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
