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
