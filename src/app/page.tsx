import { PdfDocument } from "@/components/layout";
import { RectoPage } from "./page.recto";
import { VersoPage } from "./page.verso";

export default function CurriculumVitae() {
  return (
    <PdfDocument>
      <RectoPage />
      <VersoPage />
    </PdfDocument>
  );
}
