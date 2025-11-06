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
        mastery: 2,
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
        mastery: 4,
      },
      {
        name: "Tailwind Css",
        mastery: 3,
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
        mastery: 1,
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
        mastery: 5,
        max: 12,
        rusty: true,
      },
      {
        name: "LLM",
        mastery: 2,
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
          Rôle de 1er plan dans la restructuration d&apos;agence AdTech en{" "}
          <b>pur player technologique</b>.
        </span>
        <ExperienceBulletPoints>
          <li>Co-dirigé la stratégie technique aux côtés des CEO.</li>
          <li>
            Management des équipes <b>infrastructure & services</b> et{" "}
            <b>recherche</b>.
          </li>
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
          52 pers.).
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
  },
] satisfies Experience[];
