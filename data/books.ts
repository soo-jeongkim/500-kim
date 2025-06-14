export interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  categories: string[];
}

export const books: Book[] = [
  {
    id: "the-little-prince",
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    image: "/books/thelittleprince.jpg",
    categories: ["beauty"]
  },
  {
    id: "the-alchemist",
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "/books/thealchemist.jpg",
    categories: ["beauty"]
  },
  {
    id: "all-the-beauty",
    title: "All the Beauty in the World",
    author: "Patrick Bringley",
    image: "/books/allthebeauty.jpg",
    categories: ["beauty", "courage"]
  },
  {
    id: "stay-true",
    title: "Stay True",
    author: "Hua Hsu",
    image: "/books/staytrue.jpg",
    categories: ["beauty", "clarity"]
  },
  {
    id: "when-breath",
    title: "When Breath Becomes Air",
    author: "Paul Kalanithi",
    image: "/books/whenbreath.jpg",
    categories: ["beauty"]
  },
  {
    id: "gilead",
    title: "Gilead",
    author: "Marilynne Robinson",
    image: "/books/gilead.jpg",
    categories: ["beauty", "vulnerability"]
  },
  {
    id: "educated",
    title: "Educated",
    author: "Tara Westover",
    image: "/books/educated.jpg",
    categories: ["vulnerability", "courage"]
  },
  {
    id: "feel-free",
    title: "Feel Free",
    author: "Zadie Smith",
    image: "/books/feelfree.jpg",
    categories: ["vulnerability"]
  },
  {
    id: "sylvia-plath",
    title: "The Unabridged Journals of Sylvia Plath",
    author: "Sylvia Plath",
    image: "/books/The Unabridged Journals of Sylvia Plath .jpg",
    categories: ["vulnerability"]
  },
  {
    id: "human-acts",
    title: "Human Acts",
    author: "Han Kang",
    image: "/books/humanacts.jpg",
    categories: ["vulnerability", "courage", "perspective"]
  },
  {
    id: "the-white-book",
    title: "The White Book",
    author: "Han Kang",
    image: "/books/thewhitebook.jpg",
    categories: ["vulnerability"]
  },
  {
    id: "beale-street",
    title: "If Beale Street Could Talk",
    author: "James Baldwin",
    image: "/books/if beale street could talk .jpg",
    categories: ["vulnerability", "courage", "perspective"]
  },
  {
    id: "trains-gone",
    title: "Tell Me When the Train's Been Gone",
    author: "James Baldwin",
    image: "/books/tell me when the trains been gone.webp",
    categories: ["vulnerability", "clarity"]
  },
  {
    id: "giovannis-room",
    title: "Giovanni's Room",
    author: "James Baldwin",
    image: "/books/giovannis room.jpg",
    categories: ["vulnerability", "courage"]
  },
  {
    id: "joy-luck",
    title: "The Joy Luck Club",
    author: "Amy Tan",
    image: "/books/the joy luck club.jpg",
    categories: ["clarity", "perspective"]
  },
  {
    id: "pachinko",
    title: "Pachinko",
    author: "Min Jin Lee",
    image: "/books/pachinko.jpg",
    categories: ["courage", "perspective"]
  },
  {
    id: "demon-copperhead",
    title: "Demon Copperhead",
    author: "Barbara Kingsolver",
    image: "/books/demoncopperhead.jpg",
    categories: ["courage", "perspective"]
  },
  {
    id: "men-we-reaped",
    title: "Men We Reaped",
    author: "Jesmyn Ward",
    image: "/books/men we reaped.jpg",
    categories: ["courage", "perspective"]
  }
];

export const categories = [
  {
    id: "beauty",
    text: "to see the world through the lens of writers who widen my aperture for the beauty in this world"
  },
  {
    id: "vulnerability",
    text: "to learn the language of vulnerability and raw honesty"
  },
  {
    id: "clarity",
    text: "to gain clarity in my lived experiences"
  },
  {
    id: "courage",
    text: "to search for courage"
  },
  {
    id: "perspective",
    text: "to challenge my perspective and nurture my cultural dialogue/empathy"
  }
]; 