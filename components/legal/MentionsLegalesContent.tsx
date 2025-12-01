import { Mail, Server, Shield, BookOpen, BarChart } from "lucide-react";

export default function MentionsLegalesContent() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-neutral-900/40 rounded-2xl shadow-lg space-y-8">
      <section>
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mb-2">
          <Shield className="w-6 h-6 text-boulange-gold" /> Éditeur du site
        </h2>
        <p>
          Ce site est un projet étudiant et non commercial, réalisé dans le cadre
          du <strong>Projet Boulangerie</strong>.
        </p>
        <ul className="list-none mt-2 space-y-1">
          <li>
            <span className="font-semibold">Responsable :</span>{" "}
            <em>Guilde de la Boulangerie</em>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-boulange-gold" />
            <a href="mailto:projet-boulangerie-org@proton.me" className="underline">
              projet-boulangerie-org@proton.me
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mb-2">
          <Server className="w-6 h-6 text-boulange-gold" /> Hébergement
        </h2>
        <p>
          Le site est hébergé par <strong>GitHub Pages</strong> avec redirection via{" "}
          <strong>o2switch</strong>.
        </p>
        <ul className="mt-2 space-y-1">
          <li>
            GitHub, Inc. — 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis
          </li>
          <li>o2switch — Chem. des Pardiaux, 63000 Clermont-Ferrand, France</li>
        </ul>
      </section>

      <section>
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mb-2">
          <BookOpen className="w-6 h-6 text-boulange-gold" /> Propriété intellectuelle
        </h2>
        <p>
          Le code source du site est distribué sous licence{" "}
          <strong>MIT non commerciale</strong>, avec mention de l’équipe du Projet
          Boulangerie. Les images, textes et autres contenus sont destinés à un usage
          éducatif et non commercial.
        </p>
      </section>

      <section>
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mb-2">
          <BarChart className="w-6 h-6 text-boulange-gold" /> Données personnelles & cookies
        </h2>
        <p>
          Ce site ne collecte pas de données nominatives via des formulaires.
          Les seules données traitées sont des statistiques anonymisées de navigation, via{" "}
          <strong>Cloudflare Web Analytics</strong>. Aucun cookie publicitaire n’est utilisé.
        </p>
      </section>
    </div>
  );
}
