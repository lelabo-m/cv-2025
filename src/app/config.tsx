import {
  Brain,
  GraduationCap,
  Handshake,
  Heart,
  LucideIcon,
  Puzzle,
  Users,
} from "lucide-react";

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
