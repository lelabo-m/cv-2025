import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

import { ContactAnimatedPill, ContactAnimatedText } from "@/components/contact";
import { Github, Linkedin } from "@/components/icons";
import { Copyright, PdfPage } from "@/components/layout";
import { Qrcode } from "@/components/qrcode";
import SkillPills from "@/components/skill-pills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyHeading } from "@/components/ui/typography";
import { PERSONNAL_WEBSITE, PROFILE, SKILLS, STACKS } from "./config";

export function RectoPage() {
  return (
    <PdfPage className="from-fence-green/90 via-norfolk-green/40 to-venetian-lace bg-linear-160 from-0% via-30% to-80%">
      {/* <PdfPage className="bg-venetian-lace"> */}
      <Header />
      <Body />
      <Footer />
    </PdfPage>
  );
}

function Header() {
  return (
    <header className="bg-macadamia-beige/90 w-full rounded-2xl">
      <div className="relative flex h-full w-full overflow-hidden rounded-2xl">
        <div className="z-10 flex w-full flex-col gap-2 p-4">
          <TypographyHeading as="h1" className="text-norfolk-green">
            {PROFILE.name}
          </TypographyHeading>
          <TypographyHeading as="h2" className="ml-6">
            {PROFILE.jobTitle}
          </TypographyHeading>
          <TypographyHeading as="h3" className="ml-20">
            Disponible Immédiatement - CDI - RQTH
          </TypographyHeading>

          <Contacts />
        </div>

        <div
          className="absolute inset-y-0 right-0 w-1/3 overflow-hidden"
          style={{
            clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <Image
            alt="Marc Le Labourier at WeWork Lafayette, 2018."
            src="/hero.png"
            fill
            className="object-cover object-[0%_60%]"
          />
        </div>
      </div>
    </header>
  );
}

function Contacts() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <ContactAnimatedText className="text-foreground font-semibold">
          <Mail className="size-4" />
          {PROFILE.email}
        </ContactAnimatedText>

        <ContactAnimatedText className="text-foreground font-semibold">
          <Phone className="size-4" />
          {PROFILE.phone}
        </ContactAnimatedText>
      </div>
      <div className="flex gap-2">
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
  );
}

function Body() {
  return (
    <div className="flex flex-col gap-4 px-4 pt-4">
      <div>
        <TypographyHeading as="h4">PROFIL</TypographyHeading>
        <p className="text-foreground mt-2 w-full font-medium text-pretty">
          Ingénieur polyvalent de 14+ ans d&apos;éxpérience avec une expertise
          backend, innovation, traitement & analyse de données, et recherche
          appliquée, acquise sur le terrain, en centre R&D et jeunes startups.
          <br />
          Autodidacte sur la partie Frontend & Design.
        </p>
      </div>

      <div>
        <TypographyHeading as="h4">COMPÉTENCES CLÉS</TypographyHeading>

        <div className="mt-2 grid grid-cols-3 gap-2">
          {SKILLS.map((item, index) => (
            <Card key={index} className="items-center p-4">
              <CardContent className="flex items-center gap-2 p-0 text-sm font-semibold tracking-tighter">
                <item.icon className="size-6" />
                {item.title}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between">
          <TypographyHeading as="h4">
            FRAMEWORK & TECHNOLOGIES
          </TypographyHeading>
          {/* <div className="flex items-center gap-4 text-sm">
            <Clock className="size-4" />
            <span className="font-medium">
              Pas utiliser depuis un moment...
            </span>
          </div> */}
        </div>

        <div className="mt-2 flex flex-col gap-4">
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
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const buildDate = new Date();
  const formattedDate = buildDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  return (
    <footer className="flex w-full items-center justify-between px-8 pt-8">
      <div className="relative flex flex-col items-center justify-center">
        <TypographyHeading as="h5">EN SAVOIR PLUS SUR MOI</TypographyHeading>
        <Qrcode value={PERSONNAL_WEBSITE} size={100} />
      </div>

      <Copyright className="text-accent-light mb-12 h-full flex-col justify-end gap-4" />

      <div className="flex flex-col items-center justify-center">
        <TypographyHeading as="h5">LE CODE SOURCE DE CE CV</TypographyHeading>
        <Qrcode value="https://github.com/lelabo-m/cv-2025" size={100} />
      </div>
    </footer>
  );
}
