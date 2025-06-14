export type ProjectCategory = "research" | "bio" | "ai" | "impact" | "education" | "events"

// Update the Project interface to make imageUrl optional
export interface Project {
  id: string
  title: string
  subtitle?: string
  description: string
  categories: ProjectCategory[]
  imageUrl?: string
  link?: string
}

// Update the projects array to use file paths instead of URLs for images
export const projects: Project[] = [
  {
    id: "project1",
    title: "PhD AI in Biology",
    subtitle: "University of Cambridge, EMBL-EBI",
    description: "Protein Language Models; Genomic Language Models; Sequence Design; Cancer Immunotherapy; Cancer Genomics.",
    categories: ["ai", "bio", "research", "education"],
    imageUrl: "/images/phd.jpg",
    link: "https://www.ebi.ac.uk/",
  },
  {
    id: "project16",
    title: "Y Combinator AI Startup School",
    subtitle: "Y Combinator",
    description: "Selected to attend YC's AI Startup School that brings together top AI students and researchers to learn from leading founders and experts in San Francisco.",
    categories: ["ai", "education"],
    imageUrl: "/images/yc.jpg",
    link: "https://www.ycombinator.com/",
  },
  {
    id: "project5",
    title: "AI/ML Engineer",
    subtitle: "Lightcast Discovery",
    description: "Computer Vision; Image-based cellular characterisation.",
    categories: ["ai", "bio"],
    imageUrl: "/images/lightcast.jpg",
    link: "https://www.lightcast.bio/",
  },
  {
    id: "project15",
    title: "Documentary Productions",
    subtitle: "Pioneer Productions",
    description: "Helped bring the Korea story to life as part of the Mother Undercover (Hulu US / Disney+ UK) team.",
    categories: ["impact", "events"],
    imageUrl: "/images/sollip.jpg",
    link: "https://pioneertv.com/programmes/mother-undercover-hulu/",
  },
  {
    id: "project13",
    title: "Host",
    subtitle: "Come Together",
    description: "A London-based supper club supporting young local chefs.",
    categories: ["impact", "events"],
    imageUrl: "/images/cometogether.jpg",
    link: "https://www.cometogether-project.com/",
  },
  {
    id: "project14",
    title: "Chef",
    subtitle: "Sollip",
    description: "A London-based Korean-French fusion one Michelin star restaurant.",
    categories: ["events"],
    imageUrl: "/images/sollip.jpg",
    link: "https://www.sollip.co.uk/",
  },
  {
    id: "project6",
    title: "ML Engineer Intern",
    subtitle: "dRisk.ai",
    description: "Reinforcement Learning; Computer Vision; Edge case handling for autonomous driving.",
    categories: ["ai"],
    imageUrl: "/images/drisk.jpg",
    link: "https://drisk.ai/",
  },
  {
    id: "project10",
    title: "Project Officer",
    subtitle: "Cambridge University AI",
    description: "Organised industry partnerships, projects and internships that connected Cambridge students better with the wider AI ecosystem.",
    categories: ["ai", "impact"],
    imageUrl: "/images/cuai.jpg",
    link: "https://www.cuai.org.uk/",
  },
  {
    id: "project11",
    title: "Ambassador",
    subtitle: "WeCREATE",
    description: "Promoting diversity and inclusion in AI research.",
    categories: ["ai", "impact"],
    imageUrl: "/images/wecreate.jpg",
    link: "https://www.vanderschaar-lab.com/engagement-sessions/wecreate/",
  },
  {
    id: "project2",
    title: "MPhil Engineering",
    subtitle: "University of Cambridge",
    description: "Biomedical & Information Division. Computer vision; GNNs; Motion detection.",
    categories: ["ai", "bio", "research", "education"],
    imageUrl: "/images/mphil.jpg",
    link: "https://www.eng.cam.ac.uk/",
  },
  {
    id: "project4",
    title: "Exchange, Engineering",
    subtitle: "ETH Zurich",
    description: "GPA: 6.0/6.0",
    categories: ["ai", "bio", "education", "research"],
    imageUrl: "/images/eth.jpg",
    link: "https://ethz.ch/en.html",
  },
  {
    id: "project12",
    title: "Ambassador",
    subtitle: "Pacific Environment",
    description:
      "Fundraising for Arctic indigenous communities to travel globally for representation at the United Nations.",
    categories: ["impact"],
    imageUrl: "/images/arctic.jpg",
    link: "https://www.pacificenvironment.org/",
  },
  {
    id: "project7",
    title: "Game Dev Intern",
    subtitle: "ENS Paris",
    description: "Developed a game to investigate the perception of pitch and conducted studies with participants in French.",
    categories: ["ai", "research"],
    imageUrl: "/images/ens.jpg",
    link: "https://psl.eu/ecole-normale-superieure-psl",
  },
  {
    id: "project3",
    title: "BSc Bioinformatics",
    subtitle: "Imperial College London",
    description: "Graduated 1st",
    categories: ["ai", "bio", "education"],
    imageUrl: "/images/imperial.jpg",
    link: "https://www.imperial.ac.uk/",
  },
  {
    id: "project8",
    title: "VC Analyst",
    subtitle: "InterVest",
    description: "Researched value estimations of biotech startups and evaluated scientific evidence to support investment decisions.",
    categories: ["impact"],
    imageUrl: "/images/intervest.jpg",
    link: "https://intervest.co.kr/",
  },
  {
    id: "project9",
    title: "Stem Cell Engineering Intern",
    subtitle: "MediPost",
    description: "Conducted research within the Alzheimer's R&D team.",
    categories: ["bio", "research"],
    imageUrl: "/images/medipost.jpg",
    link: "https://en.medi-post.co.kr/",
  },
]

