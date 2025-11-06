import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

import { ContactAnimatedPill, ContactAnimatedText } from "@/components/contact";
import { Github, Linkedin, Logo } from "@/components/icons";
import { PdfPage } from "@/components/layout";
import SkillPills from "@/components/skill-pills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import {
  TypographyBlockquote,
  TypographyHeading,
} from "@/components/ui/typography";
import { PERSONNAL_WEBSITE, PROFILE, SKILLS, STACKS } from "./config";

export function RectoPage() {
  return (
    <PdfPage>
      <Hero
        image={
          <Image
            alt="Marc Le Labourier at WeWork Lafayette, 2018."
            src="/hero.png"
            width={832}
            height={1248}
            className="-mt-24 ml-28 h-[150%] w-full object-contain"
          />
        }
      >
        <div className="flex flex-col gap-2 p-4">
          <div className="flex gap-4">
            <a href={PERSONNAL_WEBSITE} className="mt-4">
              <span className="sr-only">
                Marc Le Labourier Personnal Website
              </span>

              <Logo className="text-accent h-16 w-auto text-shadow-black text-shadow-lg" />
            </a>
            <div>
              <TypographyHeading as="h1">{PROFILE.name}</TypographyHeading>
              <TypographyHeading as="h2">{PROFILE.jobTitle}</TypographyHeading>
            </div>
          </div>

          <a
            href={PERSONNAL_WEBSITE}
            className="text-accent mt- text-sm/6 font-semibold underline"
          >
            En découvrir plus sur moi<span aria-hidden="true">→</span>
          </a>

          <div className="flex w-fit gap-4">
            <ContactAnimatedText className="text-background">
              <Mail className="size-4" />
              marc.lelabourier@gmail.com
            </ContactAnimatedText>

            <ContactAnimatedText className="text-background">
              <Phone className="size-4" />
              (+33)0638415550
            </ContactAnimatedText>
          </div>

          <div className="flex w-fit gap-4 @max-2xl/hero:mx-auto">
            <ContactAnimatedPill className="bg-background">
              <a href={PROFILE.socials.linkedin.href}>
                <Linkedin className="text-accent size-4" />
                <span className="sr-only">{"LinkedIn"}</span>
              </a>
            </ContactAnimatedPill>

            <ContactAnimatedPill className="bg-background">
              <a href={PROFILE.socials.github.href}>
                <Github className="text-accent size-5" />
                <span className="sr-only">{"GitHub"}</span>
              </a>
            </ContactAnimatedPill>

            <ContactAnimatedPill className="bg-background gap-2 px-4 text-sm">
              <MapPin className="size-4" />
              {PROFILE.location}
            </ContactAnimatedPill>
          </div>
        </div>
      </Hero>

      <Body>
        <TypographyHeading as="h3">
          PROFIL PROFESSIONNEL / OBJECTIFS
        </TypographyHeading>
        <p className="text-foreground mt-2 w-full font-medium text-pretty">
          Expertise backend, innovation, traitement & analyse de données, et
          recherche appliquée, acquise sur le terrain, en centre R&D et jeunes
          startups. <br />
          Autodidacte (et plus junior) sur la partie Frontend & Design.
        </p>
        <Separator className="bg-foreground my-4" />
        <TypographyHeading as="h3">COMPÉTENCES CLÉS</TypographyHeading>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {SKILLS.map((item, index) => (
            <Card key={index} className="items-center px-0 py-4">
              <CardContent className="flex items-center gap-2 text-sm font-semibold tracking-tighter">
                <item.icon className="size-6" />
                {item.title}
              </CardContent>
            </Card>
          ))}
        </div>
        <Separator className="bg-foreground my-4" />
        <TypographyHeading as="h3">FRAMEWORK & TECHNOLOGIES</TypographyHeading>
        <div className="flex flex-col gap-4">
          <TypographyBlockquote className="text-secondary text-xs font-medium">
            Ce que je préfère, mais je suis toujours curieux d&apos;apprendre de
            nouvelles choses...
          </TypographyBlockquote>

          <div className="grid grid-cols-2 gap-4">
            {STACKS.map(({ name, items }, index) => (
              <Card key={index} className="gap-0 p-4">
                <CardHeader className="p-0">
                  <CardTitle>{name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {items.map((tech, index) => (
                    <SkillPills key={index} {...tech} />
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Clock className="size-4" />
            <span>Pas utiliser depuis un moment...</span>
          </div>
        </div>
      </Body>
      <Footer />
    </PdfPage>
  );
}

function Hero({
  image,
  children,
}: { image: React.ReactNode } & React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <header className="relative flex w-full">
      <div className="relative z-10 size-full">
        <svg
          viewBox="0 0 110 20"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="fill-secondary absolute inset-y-0 right-0 size-full transform"
        >
          <polygon points="0,0 90,0 50,100 0,100" />
        </svg>

        <div className="relative">{children}</div>
      </div>

      <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
        {image}
      </div>
    </header>
  );
}

function Body({ children }: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return <div className="p-4">{children}</div>;
}

function Footer() {
  const buildDate = new Date();
  const formattedDate = buildDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  return (
    <footer className="bg-secondary flex w-full items-center justify-between p-2">
      <p className="text-accent-light text-sm">
        {"©"} {buildDate.getFullYear()}{" "}
        {"Marc Le Labourier. All rights reserved."}
      </p>
      <p className="text-accent-light text-sm">
        {"Last updated:"} {formattedDate}
      </p>

      <Pagination className="mx-0 w-fit">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink
              className="bg-card border-accent text-primary"
              href="#"
              isActive
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="bg-background" href="#">
              2
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext className="text-background" href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </footer>
  );
}
