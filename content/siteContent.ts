export type FeatureItem = {
  href: string;
  title: string;
  description: string;
  image: string;
};

export type StoryItem = {
  title: string;
  excerpt: string;
  author: string;
  image: string;
};

export type FilmItem = {
  title: string;
  filmmaker: string;
  duration: string;
  image: string;
};

export type ConversationItem = {
  type: "Interview" | "Panel" | "Dialogue";
  title: string;
  description: string;
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/stories", label: "Stories" },
  { href: "/films", label: "Films" },
  { href: "/conversations", label: "Conversations" },
  { href: "/festival", label: "Festival" },
] as const;

export const homeFeatures: FeatureItem[] = [
  {
    href: "/stories",
    title: "Stories",
    description: "Written works, essays, and literary fragments from across the diaspora.",
    image:
      "https://images.unsplash.com/photo-1455885666463-9c41e18888a7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    href: "/films",
    title: "Films",
    description: "Short films and moving image experiments rooted in diasporic memory.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
  },
  {
    href: "/conversations",
    title: "Conversations",
    description: "Interviews, panels, and collective dialogue around belonging and imagination.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
];

export const festivalAnnouncement = {
  title: "Becoming Diaspora Film Festival",
  date: "Date: TBC",
  description:
    "A gathering of films, written works, and conversations documenting identity, migration, and cultural memory through contemporary African diaspora storytelling.",
};

export const storyItems: StoryItem[] = [
  {
    title: "Letters Between Cities",
    excerpt:
      "A braided essay on language, distance, and family memory between Lagos and London.",
    author: "Adaeze M.",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Salt Roads",
    excerpt:
      "A short fiction piece tracing migration routes through food, ritual, and inherited stories.",
    author: "Kwesi N.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Archive of Small Sounds",
    excerpt:
      "Poetic nonfiction on listening to neighborhoods that hold layered diasporic histories.",
    author: "Ruth A.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "After the Border",
    excerpt:
      "A visual-text collaboration unpacking identity shifts across generations in transit.",
    author: "Musa K.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  },
];

export const filmItems: FilmItem[] = [
  {
    title: "Night Market Reveries",
    filmmaker: "Tariro D.",
    duration: "14 min",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "The Weight of Water",
    filmmaker: "Samuel O.",
    duration: "27 min",
    image:
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Between Languages",
    filmmaker: "Amina K.",
    duration: "11 min",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Inheriting the Frame",
    filmmaker: "Kojo E.",
    duration: "33 min",
    image:
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=900&q=80",
  },
];

export const conversationItems: ConversationItem[] = [
  {
    type: "Interview",
    title: "Filming Memory Beyond Borders",
    description:
      "A dialogue with emerging filmmakers on documenting inherited memory through contemporary visual language.",
  },
  {
    type: "Panel",
    title: "Belonging, Translation, and Form",
    description:
      "Writers and critics discuss how multilingual lives shape narrative structure, voice, and audience.",
  },
  {
    type: "Dialogue",
    title: "Community Storytelling in Urban Archives",
    description:
      "Artists explore collaborative archives and ethical documentation of neighborhood histories.",
  },
];
