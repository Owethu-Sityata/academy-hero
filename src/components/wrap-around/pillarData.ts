export interface Pillar {
  title: string;
  backgroundColor: "blue" | "green";
  description: string;
  icon?: string;
}

export const pillars: Pillar[] = [
  {
    title: "TECHNICAL SKILLS",
    backgroundColor: "blue",
    description:
      "Building core technical competencies that are essential for success in modern workplaces, from digital literacy to industry-specific tools.",
  },
  {
    title: "SOFT SKILLS",
    backgroundColor: "green",
    description:
      "Developing communication, teamwork, and interpersonal abilities that enable effective collaboration and professional relationships.",
  },
  {
    title: "LIFE SKILLS",
    backgroundColor: "green",
    description:
      "Equipping students with practical day-to-day skills such as time management, financial literacy, and problem-solving.",
  },
  {
    title: "PROFESSIONAL\nDEVELOPMENT",
    backgroundColor: "blue",
    description:
      "Guiding career growth through CV building, interview preparation, networking, and workplace etiquette.",
  },
  {
    title: "EMOTIONAL\nDEVELOPMENT",
    backgroundColor: "blue",
    description:
      "Fostering self-awareness, empathy, and emotional intelligence to handle workplace dynamics with confidence.",
  },
  {
    title: "MENTAL\nFITNESS",
    backgroundColor: "green",
    description:
      "Promoting resilience, stress management, and a growth mindset to sustain well-being throughout professional life.",
  },
];
