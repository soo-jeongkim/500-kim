export type ProjectCategory = "research" | "bio" | "ai" | "impact" | "education" | "events"

export interface Project {
  id: string
  title: string
  subtitle?: string
  description: string
  categories: ProjectCategory[]
  imageUrl: string
  link?: string
}

// Update the projects array to use file paths instead of URLs for images
export const projects: Project[] = [
  {
    id: "project1",
    title: "PhD AI in Biology",
    subtitle: "University of Cambridge, EMBL-EBI",
    description: "Language modelling; Diffusion modelling; Protein Design; Contrastive Learning.",
    categories: ["ai", "bio", "research", "education"],
    imageUrl: "/images/phd.jpg",
    link: "https://www.ebi.ac.uk/",
  },
  {
    id: "project2",
    title: "MPhil Engineering (Biomedical & Information)",
    subtitle: "University of Cambridge",
    description: "Computer vision; GNNs; Motion analysis.",
    categories: ["ai", "bio", "research", "education"],
    imageUrl: "/images/mphil.jpg",
    link: "https://www.eng.cam.ac.uk/",
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
    id: "project4",
    title: "Exchange",
    subtitle: "ETH Zurich",
    description: "GPA: 6.0/6.0",
    categories: ["ai", "bio", "education", "research"],
    imageUrl: "/images/eth.jpg",
    link: "https://ethz.ch/en.html",
  },
  {
    id: "project5",
    title: "AI/ML Engineer",
    subtitle: "Lightcast Discovery",
    description: "Computer Vision; cell behaviour detection.",
    categories: ["ai", "bio"],
    imageUrl: "/images/lightcast.jpg",
    link: "https://www.lightcast.bio/",
  },
  {
    id: "project6",
    title: "ML Engineer Intern",
    subtitle: "dRisk.ai",
    description: "Reinforcement Learning; AVs; Graphs.",
    categories: ["ai"],
    imageUrl: "/images/drisk.jpg",
    link: "https://drisk.ai/",
  },
  {
    id: "project7",
    title: "Game Dev Intern",
    subtitle: "ENS Paris",
    description: "",
    categories: ["ai", "research"],
    imageUrl: "/images/ens.jpg",
    link: "https://psl.eu/ecole-normale-superieure-psl",
  },
  {
    id: "project8",
    title: "VC Analyst",
    subtitle: "InterVest",
    description: "Analyzing market trends and investment opportunities in the biotech sector.",
    categories: ["impact"],
    imageUrl: "/images/intervest.jpg",
    link: "https://intervest.co.kr/",
  },
  {
    id: "project9",
    title: "Stem Cell Engineering Intern",
    subtitle: "MediPost",
    description: "Stem cell applications for regenerative medicine.",
    categories: ["bio", "research"],
    imageUrl: "/images/medipost.jpg",
    link: "https://en.medi-post.co.kr/",
  },
  {
    id: "project10",
    title: "Project Officer",
    subtitle: "Cambridge University AI",
    description: "",
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
    id: "project12",
    title: "Ambassador",
    subtitle: "Arctic",
    description:
      "Fundraising for Arctic indigenous communities to travel globally for representation at the United Nations.",
    categories: ["impact"],
    imageUrl: "/images/arctic.jpg",
    link: "#",
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
    description: "A Korean-French fusion Michelin star restaurant.",
    categories: ["events"],
    imageUrl: "/images/sollip.jpg",
    link: "https://www.sollip.co.uk/",
  },
]

