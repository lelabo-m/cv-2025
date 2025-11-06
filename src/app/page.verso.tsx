import {
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  LucideIcon,
} from "lucide-react";

import { PdfPage } from "@/components/layout";
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
    </PdfPage>
  );
}

const timelineIcons = {
  education: GraduationCap,
  job: BriefcaseBusiness,
  formation: BookOpen,
} satisfies Record<Experience["type"], LucideIcon>;
