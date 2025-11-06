import {
  BookOpen,
  BriefcaseBusiness,
  Flame,
  Gamepad,
  GraduationCap,
  Heart,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";

import { PdfPage } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { Activity } from "react";
import { Experience, TIMELINE } from "./config";

export function VersoPage() {
  return (
    <PdfPage>
      <ExperienceTimeline />
      <HobbyCarousel />
    </PdfPage>
  );
}

const timelineIcons = {
  education: GraduationCap,
  job: BriefcaseBusiness,
  formation: BookOpen,
} satisfies Record<Experience["type"], LucideIcon>;

function ExperienceTimeline() {
  return (
    <Timeline className="mx-auto w-full p-8 pr-16">
      {TIMELINE.map((experience, index) => {
        const Icon = timelineIcons[experience.type];
        const notLast = index < TIMELINE.length - 1;

        return (
          <TimelineItem key={index} className="w-full after:content-none">
            <div className="text-accent-light mt-1 flex min-w-12 flex-col items-center justify-between text-[10px] after:flex-1">
              <span>{experience.when.end}</span>
              <span>{experience.when.start}</span>
            </div>
            <TimelineSeparator>
              <TimelineDot className="border-primary size-6 rounded-full border-2">
                <Icon className="size-3" />
              </TimelineDot>
              <Activity mode={notLast ? "visible" : "hidden"}>
                <TimelineConnector />
              </Activity>
            </TimelineSeparator>

            <TimelineContent className="w-full pb-3">
              <TimelineTitle className="font-semibold">
                {experience.title}
              </TimelineTitle>
              <TimelineDescription className="text-accent-light flex gap-2 font-semibold whitespace-nowrap after:flex-1">
                {experience.where}
              </TimelineDescription>
              {experience.what}
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}

function HobbyCarousel() {
  return (
    <div className="grid h-80 grid-cols-3 gap-4 px-8 py-4">
      <Card className="relative overflow-hidden">
        <Image
          src="/image1.jpg"
          alt="Marc working on his desktop."
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover object-center brightness-75 grayscale-25"
        />

        {/* Overlay for better text contrast */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"
        />

        <CardHeader className="text-venetian-lace relative">
          <CardTitle className="flex gap-4">
            <Gamepad className="size-4" />
            Divertissement
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10 flex h-full flex-col p-6">
          <ul className="text-venetian-lace flex list-disc flex-col gap-4 text-sm font-semibold text-nowrap">
            <li>Manga & Webtoons</li>
            <li>Jeux de vidéo et de société</li>
            <li>Podcasts et fiction audio</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="relative overflow-hidden">
        <Image
          src="/image2.jpg"
          alt="Marc reading an upside down book while simultaneously playing chess."
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover object-center brightness-75 grayscale-25"
        />

        {/* Overlay for better text contrast */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"
        />

        <CardHeader className="text-venetian-lace relative">
          <CardTitle className="flex gap-4">
            <Flame className="size-4" />
            Intérêts
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10 flex h-full flex-col px-6">
          <ul className="text-venetian-lace flex list-disc flex-col gap-4 text-sm font-semibold">
            <li>Jeux de rôle</li>
            <li>
              Santé
              <ul className="text-macadamia-beige ml-4 list-disc">
                <li>anatomie</li>
                <li>physiologie</li>
                <li>métabolisme</li>
                <li>nutrition</li>
              </ul>
            </li>
            <li>Montage photo & vidéo</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="relative overflow-hidden">
        <Image
          src="/image3.jpg"
          alt="Marc playing handball wheelchair"
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover object-center brightness-75 grayscale-25"
        />

        {/* Overlay for better text contrast */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"
        />

        <CardHeader className="text-venetian-lace relative">
          <CardTitle className="flex items-center gap-4">
            <Heart className="size-4" />
            Sports & Communauté
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10 flex h-full flex-col px-6">
          <ul className="text-venetian-lace flex list-disc flex-col gap-4 text-sm font-semibold">
            <li>Musculation</li>
            <li>Natation</li>
            <li>Handball & Hand-fauteil</li>
            <li>Intervention de sensibilisation au handicap</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
