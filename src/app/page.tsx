import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { ContactAnimatedPill, ContactAnimatedText } from "./components/contact";
import { Body, Footer, Hero } from "./components/hero";
import { Github, Linkedin, Logo } from "./components/icons";
import { TypographyHeading } from "./components/ux/typography";
import { PERSONNAL_WEBSITE, PROFILE } from "./config";

export default function Main() {
  return (
    <PdfDocument>
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

                <Logo className="text-accent h-16 w-auto" />
              </a>
              <div>
                <TypographyHeading as="h1">{PROFILE.name}</TypographyHeading>
                <TypographyHeading as="h2">
                  {PROFILE.jobTitle}
                </TypographyHeading>
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
          <TypographyHeading as="h3">PROFIL PROFESSIONNEL</TypographyHeading>
          <p className="text-foreground mt-4 w-full max-w-[80%] font-medium text-pretty">
            Expertise backend, innovation, traitement & analyse de données, et
            recherche appliquée. Acquise sur le terrain, en centre R&D et jeunes
            startups.
          </p>
        </Body>
        <Footer />
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl leading-10 font-semibold tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="bg-foreground text-background flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 transition-colors hover:bg-[#383838] md:w-[158px] dark:hover:bg-[#ccc]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] md:w-[158px] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div> */}
      </PdfPage>
      <PdfPage>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl leading-10 font-semibold tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="bg-foreground text-background flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 transition-colors hover:bg-[#383838] md:w-[158px] dark:hover:bg-[#ccc]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] md:w-[158px] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </PdfPage>
    </PdfDocument>
  );
}

function PdfDocument({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-zinc-50 font-sans dark:bg-black">
      {children}
    </div>
  );
}

function PdfPage({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <main
      className={cn(
        "bg-background flex h-[29.7cm] w-[21cm] flex-col items-start justify-between",
        className,
      )}
    >
      {children}
    </main>
  );
}
