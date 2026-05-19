import { CV_DATA } from "@/data/CVData";
import type jsPDF from "jspdf";

// ── Palette ──────────────────────────────────────────────────────────────────
const BLACK = [12, 12, 12] as const;
const BLUE = [59, 130, 246] as const;
const DARK = [35, 35, 35] as const;
const MID = [90, 90, 90] as const;
const SOFT = [150, 150, 150] as const;
const FAINT = [190, 190, 190] as const;
const RULE = [215, 215, 215] as const;
const WHITE = [255, 255, 255] as const;

// ── Layout ───────────────────────────────────────────────────────────────────
const PAGE_W = 210;
const PAGE_H = 297;

const ML = 18;
const MR_ = 192;

const CW = MR_ - ML;

const DATE_W = 30;

const BODY_X = ML + DATE_W + 4;
const BODY_W = MR_ - BODY_X;

type RGB = readonly [number, number, number];



export function useGenerateCV() {
  const generate = async () => {
    const jsPDF = (await import("jspdf")).default;

    function fg(doc: jsPDF, c: RGB) {
      doc.setTextColor(c[0], c[1], c[2]);
    }

    function hairline(doc: jsPDF, y: number, x1 = ML, x2 = MR_) {
      doc.setDrawColor(RULE[0], RULE[1], RULE[2]);
      doc.setLineWidth(0.15);
      doc.line(x1, y, x2, y);
    }

    function sectionLabel(doc: jsPDF, text: string, y: number) {
      doc.setFontSize(7.2);
      doc.setFont("helvetica", "bold");
      fg(doc, SOFT);

      const label = text.toUpperCase();

      doc.text(label, ML, y);

      const textW = doc.getTextWidth(label);

      // optical center line
      const lineY = y - 1.2;

      hairline(doc, lineY, ML + textW + 5, MR_);
    }
    const doc = new jsPDF({
      unit: "mm",
      format: "a4",
    });

    // ── Background ───────────────────────────────────────────────────────────
    doc.setFillColor(WHITE[0], WHITE[1], WHITE[2]);
    doc.rect(0, 0, PAGE_W, PAGE_H, "F");

    let y = 20;

    // ── HEADER ────────────────────────────────────────────────────────────────
    doc.setFontSize(21);
    doc.setFont("helvetica", "bold");
    fg(doc, BLACK);
    doc.text(CV_DATA.name, ML, y);

    y += 6;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    fg(doc, BLUE);
    doc.text(CV_DATA.role, ML, y);

    // RIGHT PANEL
    const rightX = MR_;

    doc.setFontSize(7.4);
    doc.setFont("helvetica", "normal");
    fg(doc, SOFT);

    doc.text(CV_DATA.location, rightX, y - 4, {
      align: "right",
    });

    doc.text(CV_DATA.email, rightX, y, {
      align: "right",
    });

    doc.text(CV_DATA.linkedin, rightX, y + 4, {
      align: "right",
    });

    doc.text(CV_DATA.website, rightX, y + 8, {
      align: "right",
    });

    y += 12;

    // ── PROFILE ───────────────────────────────────────────────────────────────
    sectionLabel(doc, "Profile", y);

    y += 7;

    doc.setFontSize(8.8);
    doc.setFont("helvetica", "normal");
    fg(doc, DARK);

    doc.setLineHeightFactor(1.55);

    const profileLines = doc.splitTextToSize(
      CV_DATA.profile,
      CW
    );

    doc.text(profileLines, ML, y);

    doc.setLineHeightFactor(1.15);

    y += profileLines.length * 5.2 + 10;

    // ── EXPERIENCE ────────────────────────────────────────────────────────────
    sectionLabel(doc, "Experience", y);

    y += 7;

    CV_DATA.experience.forEach(
      (
        exp: {
          role: string;
          company: string;
          period: string;
          desc: string;
          tags: string[];
        },
        idx: number
      ) => {
        // LEFT COLUMN
        doc.setFontSize(7.6);
        doc.setFont("helvetica", "normal");

        fg(doc, FAINT);
        doc.text(exp.period, ML, y);

        fg(doc, SOFT);

        const compLines = doc.splitTextToSize(
          exp.company,
          DATE_W
        );

        doc.text(compLines, ML, y + 4);

        // ROLE
        doc.setFontSize(9.6);
        doc.setFont("helvetica", "bold");

        fg(doc, BLACK);

        doc.text(exp.role, BODY_X, y);

        y += 5.2;

        // DESCRIPTION
        doc.setFontSize(8.5);
        doc.setFont("helvetica", "normal");

        fg(doc, MID);

        doc.setLineHeightFactor(1.6);

        const descLines = doc.splitTextToSize(
          exp.desc,
          BODY_W
        );

        doc.text(descLines, BODY_X, y);

        doc.setLineHeightFactor(1.15);

        y += descLines.length * 5;

        // TAGS
        if (exp.tags?.length > 0) {
          y += 2;

          doc.setFontSize(7.4);
          doc.setFont("helvetica", "normal");

          fg(doc, FAINT);

          doc.text(
            exp.tags.join("   ·   "),
            BODY_X,
            y
          );

          y += 2;
        }

        y += 7;

        // internal divider only
        if (idx < CV_DATA.experience.length - 1) {
          hairline(doc, y - 3, BODY_X);
          y += 2;
        }
      }
    );

    y += 2;

    // ── EDUCATION ─────────────────────────────────────────────────────────────
    sectionLabel(doc, "Education", y);

    y += 7;

    CV_DATA.education.forEach(
      (
        edu: {
          degree: string;
          school: string;
          period: string;
          highlight: string;
        },
        idx: number
      ) => {
        // PERIOD
        doc.setFontSize(7.4);
        doc.setFont("helvetica", "normal");

        fg(doc, FAINT);

        doc.text(edu.period, ML, y);

        // DEGREE
        doc.setFontSize(9.4);
        doc.setFont("helvetica", "bold");

        fg(doc, BLACK);

        doc.text(edu.degree, BODY_X, y);

        // HIGHLIGHT
        if (edu.highlight) {
          doc.setFontSize(7.6);
          doc.setFont("helvetica", "italic");

          fg(doc, SOFT);

          doc.text(edu.highlight, MR_, y, {
            align: "right",
          });
        }

        y += 5.2;

        // SCHOOL
        doc.setFontSize(8.4);
        doc.setFont("helvetica", "normal");

        fg(doc, MID);

        doc.text(edu.school, BODY_X, y);

        y += 8;

        if (idx < CV_DATA.education.length - 1) {
          hairline(doc, y - 3, BODY_X);
          y += 2;
        }
      }
    );

    y += 2;

    // ── AWARDS ────────────────────────────────────────────────────────────────
    sectionLabel(doc, "Awards", y);

    y += 7;

    CV_DATA.awards.forEach(
      (
        a: {
          year: string;
          title: string;
          org: string;
        },
        idx: number
      ) => {
        // YEAR
        doc.setFontSize(7.4);
        doc.setFont("helvetica", "normal");

        fg(doc, FAINT);

        doc.text(a.year, ML, y);

        // TITLE
        doc.setFontSize(8.8);
        doc.setFont("helvetica", "bold");

        fg(doc, DARK);

        doc.text(a.title, BODY_X, y);

        // ORG
        doc.setFontSize(7.6);
        doc.setFont("helvetica", "normal");

        fg(doc, SOFT);

        doc.text(a.org, MR_, y, {
          align: "right",
        });

        y += 7;

        if (idx < CV_DATA.awards.length - 1) {
          hairline(doc, y - 3, BODY_X);
          y += 2;
        }
      }
    );

    y += 2;

    // ── SKILLS ────────────────────────────────────────────────────────────────
    sectionLabel(doc, "Skills & Tools", y);

    y += 7;

    doc.setFontSize(8.8);
    doc.setFont("helvetica", "normal");

    fg(doc, MID);

    doc.setLineHeightFactor(1.5);

    const skillStr = Object.values(CV_DATA.skills)
      .flat()
      .join("   ·   ");

    const skillLines = doc.splitTextToSize(
      skillStr,
      CW
    );

    doc.text(skillLines, ML, y);

    doc.setLineHeightFactor(1.15);

    // ── FOOTER ────────────────────────────────────────────────────────────────
    hairline(doc, PAGE_H - 10);

    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");

    fg(doc, FAINT);

    doc.text(CV_DATA.name, ML, PAGE_H - 6.5);

    doc.text(CV_DATA.email, MR_, PAGE_H - 6.5, {
      align: "right",
    });

    // ── EXPORT ────────────────────────────────────────────────────────────────
    doc.save(
      `Resume_${CV_DATA.name.replace(/\s+/g, "_")}.pdf`
    );
  };

  return { generate };
}