import {
  Brain,
  GraduationCap,
  Handshake,
  Heart,
  LucideIcon,
  Puzzle,
  Users,
} from "lucide-react";
import React from "react";

export const PERSONNAL_WEBSITE = "https://marc.lelabourier.com";

export const PROFILE = {
  name: "Marc Le Labourier",
  jobTitle: "Full Stack Developer",
  email: "marc.lelabourier@gmail.com",
  phone: "(+33)0638415550",
  location: "Clermont Ferrand, France",
  socials: {
    github: {
      text: "github.com/lelabo-m",
      href: "https://github.com/lelabo-m",
    },
    linkedin: {
      text: "linkedin.com/in/marclelabourier",
      href: "https://www.linkedin.com/in/marclelabourier/",
    },
  },
};

export const SKILLS = [
  {
    title: "Transparent et authentique",
    icon: Heart,
  },
  {
    title: "Résolution de problèmes",
    icon: Puzzle,
  },
  {
    title: "Perspective Holistique",
    icon: Brain,
  },
  {
    title: "Leadership et collaboration",
    icon: Users,
  },
  {
    title: "Flexibilité et alignement",
    icon: Handshake,
  },
  {
    title: "Mentorat et apprentissage",
    icon: GraduationCap,
  },
] satisfies { title: string; icon: LucideIcon }[];

export interface Technology {
  name: string;
  mastery: number;
  rusty?: boolean;
  max?: number;
}

export interface Stack {
  name: string;
  items: Technology[];
}

export const STACKS = [
  {
    name: "Backend & Architecture",
    items: [
      {
        name: "Python",
        mastery: 6,
      },
      {
        name: "Rust",
        mastery: 2,
      },
      {
        name: "C",
        mastery: 6,
        rusty: true,
      },
      {
        name: "C++",
        mastery: 4,
        rusty: true,
      },
      {
        name: "Ruby/Rails",
        mastery: 3,
        rusty: true,
      },
    ],
  },
  {
    name: "Frontend",
    items: [
      {
        name: "Typescript",
        mastery: 4,
      },
      {
        name: "Javascript",
        mastery: 3,
      },
      {
        name: "React",
        mastery: 4,
      },
      {
        name: "NextJs",
        mastery: 5,
      },
      {
        name: "Tailwind Css",
        mastery: 4,
      },
    ],
  },
  {
    name: "Infrastructure & Cloud",
    items: [
      {
        name: "AWS",
        mastery: 6,
        max: 12,
      },
      {
        name: "Vercel",
        mastery: 3,
      },
      {
        name: "Docker",
        mastery: 2,
        rusty: true,
      },
      {
        name: "Kubernetes",
        mastery: 2,
        rusty: true,
      },
    ],
  },
  {
    name: "Thématiques",
    items: [
      {
        name: "Sécurité",
        mastery: 3,
        max: 8,
        rusty: true,
      },
      {
        name: "3D",
        mastery: 3,
      },
      {
        name: "IA",
        mastery: 4,
        max: 12,
        rusty: true,
      },
    ],
  },
] satisfies Stack[];

export interface Experience {
  title: string;
  type: "education" | "job" | "formation";
  where: string;
  when: { start: string; end: string };
  what?: React.ReactNode;
}

const ExperienceDescription = ({
  children,
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="mt-1 flex flex-col gap-2 text-justify text-sm">
    {children}
  </div>
);
const ExperienceBulletPoints = ({
  children,
}: React.HTMLAttributes<HTMLUListElement>) => (
  <ul className="ml-4 list-disc text-sm">{children}</ul>
);

export const TIMELINE = [
  {
    title:
      "Edistart'up - Programme Entrepreneurial en Édition et Édition Numérique",
    type: "formation",
    where: "edinovo FORMATION (Asfored) x LABO DE L'ÉDITION (PARIS&CO)",
    when: {
      start: "Sept. 2021",
      end: "Fév. 2022",
    },
    // what: (
    //   <ExperienceDescription>
    //     <span>
    //       Programme conçu pour lancer des maisons d&apos;édition ou des
    //       entreprises liées au livre.
    //     </span>
    //      <ExperienceBulletPoints>
    //       <li>
    //         Compréhension approfondie de l&apos;écosystème de l&apos;édition, de
    //         la viabilité du marché et de la navigation dans le paysage de
    //         l&apos;édition numérique.
    //       </li>
    //       <li>Approfondissement de mes connaissances entrepreneuriales.</li>
    //       <li>
    //         Discussions avec des experts, des auteurs et des entrepreneurs
    //         chevronnés.
    //       </li>
    //     </ExperienceBulletPoints>
    //   </ExperienceDescription>
    // ),
  },
  {
    title:
      "Formation professionnelle - Droits de l'édition et de l'édition numérique",
    type: "formation",
    where: "edinovo FORMATION (Asfored)",
    when: {
      start: "Mai 2021",
      end: "Juin 2021",
    },
    // what: (
    //   <ExperienceDescription>
    //     Formation au droit d&apos;auteur, de l&apos;édition classique et
    //     numérique et la gestion de projet éditauriaux.
    //     <ExperienceBulletPoints>
    //       <li>
    //         Acquérir de solides compétences en matière de gestion des droits
    //         d&apos;auteur, de droit de l&apos;édition, et de gestion de projets
    //         numériques.
    //       </li>
    //       <li>
    //         Compréhension approfondie de du processus éditorial, depuis sa
    //         conception jusqu&apos;à sa diffusion..
    //       </li>
    //     </ExperienceBulletPoints>
    //   </ExperienceDescription>
    // ),
  },
  {
    title: "Responsable Backend, Données et Recherche",
    type: "job",
    where: "Singlespot",
    when: {
      start: "Sept. 2018",
      end: "Nov. 2020",
    },
    what: (
      <ExperienceDescription>
        <span>
          Rôle de 1er plan dans la transition et la restructuration d&apos;une
          agence AdTech à un &quot;pur player&quot; technologique spécialisée
          dans la collecte et l&apos;agrégation de données mobiles.
        </span>
        <ExperienceBulletPoints>
          <li>Co-dirigé la stratégie technique aux côtés des CEO.</li>
          <li>
            Management des équipes <b>infrastructure & services</b> et{" "}
            <b>recherche</b>.
          </li>
          {/* <li>
            Assuré la transition  après le départ du CTO
            historique.
          </li> */}
          {/* <li>
            Dirigé la conception et le développement d&apos;un nouveau pipeline
            de données hautement évolutif, remplaçant l&apos;infrastructure
            historique.
          </li> */}
          <li>
            Piloté la mise en œuvre des évolutions techniques nécessaires pour
            le pivot de la startup.
          </li>
          <li>
            Assuré la mise en conformité face une régulation nouvelle et
            changeante (RGPD/CNIL).
          </li>
        </ExperienceBulletPoints>
      </ExperienceDescription>
    ),
  },
  {
    title: "Ingénieur Backend & Data, Responsable Recherche",
    type: "job",
    where: "Singlespot",
    when: {
      start: "Sept. 2016",
      end: "Août 2018",
    },
    what: (
      <ExperienceDescription>
        <span>
          Contribution majeure pendant la croissance de l&apos;entreprise (6 →
          50 pers.).
        </span>
      </ExperienceDescription>
    ),
  },
  {
    title:
      "Master of Science in Advanced Computer Science (Computationnal Intelligence)",
    type: "education",
    where: "University of Kent",
    when: {
      start: "Oct. 2015",
      end: "Sept. 2016",
    },
    // what: (
    //   <ExperienceDescription>
    //     <span>
    //       Approfondissement des techniques d&apos;Intelligence Artificielle
    //       (deep learning, réseaux neuronaux, apprentissage automatique) avec un
    //       fort accent sur la recherche universitaire.
    //     </span>
    //   </ExperienceDescription>
    // ),
  },
  {
    title: "Ingénieur de Recherche - Protection de modèles 3D",
    type: "job",
    where: "Technicolor",
    when: {
      start: "Sept. 2014",
      end: "Juil. 2015",
    },
    what: (
      <ExperienceDescription>
        <span>
          R&D de techniques de protections / attaques, co-auteur de 3 brevets et
          1 publication.
        </span>
      </ExperienceDescription>
    ),
  },
  {
    title: "Assistant Pédagogique Régional",
    type: "job",
    where: "Epitech",
    when: {
      start: "Jan. 2014",
      end: "Juil. 2014",
    },
    // what: (
    //   <ExperienceDescription>
    //     Encadrement et évaluation pédagogique, animation de cours, ateliers et
    //     évenements.
    //   </ExperienceDescription>
    // ),
  },
  {
    title: "Développeur Full Stack",
    type: "job",
    where: "Creawave",
    when: {
      start: "Juil. 2013",
      end: "Déc. 2013",
    },
    what: (
      <ExperienceDescription>
        Rejoint une startup pionniére de la synthèse vocale pour élargir
        l&apos;offre produit.
        {/* <ExperienceBulletPoints>
          <li>
            Conçu et développé une plateforme web de commande et de gestion
            d&apos;enregistrements de comédiens (facturation, emails, catalogue
            talents, traitement des audios).
          </li>
          <li>
            Refonte UI/UX puis améloration du logiciel d&apos;enregistrement
            (Windows/macOS) en collaboration directe avec comédiens.
          </li>
        </ExperienceBulletPoints> */}
      </ExperienceDescription>
    ),
  },
  {
    title: "Expert en Technologies de l'Information",
    type: "education",
    where: "EPITECH (European Institute of Information Technology)",
    when: {
      start: "Oct. 2012",
      end: "Sept. 2017",
    },
    // what: (
    //   <ExperienceDescription>
    //     Pédagogie intensive, centré sur la pratique et les projets, la
    //     collaboration, l&apos;innovation, et l&apos;apprentissage continue.
    //   </ExperienceDescription>
    // ),
  },
] satisfies Experience[];
