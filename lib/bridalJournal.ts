export type BridalJournalImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type BridalJournalSection = {
  heading: string;
  paragraphs: string[];
};

export type BridalJournalPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  readTime: string;
  intro: string;
  sections: BridalJournalSection[];
  images: BridalJournalImage[];
};

export const bridalJournalPosts: BridalJournalPost[] = [
  {
    slug: "when-to-book-bridal-nail-trial",
    title: "When should you book your bridal nail trial?",
    description:
      "A simple guide to timing your bridal nail trial and wedding day manicure, from Holly's Hideaway in Chelsfield, Orpington.",
    category: "Bridal planning",
    published: "2026-08-10",
    readTime: "3 minute read",
    intro:
      "Your bridal nail trial is there to take the pressure off the final appointment. It gives us time to look at shape, colour and design before the wedding day, so you are not making those decisions at the last minute.",
    sections: [
      {
        heading: "Give yourself enough time before the wedding",
        paragraphs: [
          "I recommend allowing enough time between your trial and wedding day manicure to decide what you love and make any small changes if you want to.",
          "There is no need for the trial to be the week before the wedding. The important thing is that it happens early enough for the final manicure to feel completely considered rather than rushed.",
        ],
      },
      {
        heading: "Bring your ideas with you",
        paragraphs: [
          "If you have saved nail inspiration, colours, wedding details or photographs of your dress, flowers or jewellery, bring them along. They can all help us work towards something that feels right for you.",
          "The trial is also the right time to talk through nail length, shape and whether gel, builder gel or nail polish is the best fit for your wedding nails.",
        ],
      },
      {
        heading: "The wedding day manicure should feel easy",
        paragraphs: [
          "By the time you return for your wedding day manicure, the big decisions have already been made. We can concentrate on creating the finished nails in a calm, unhurried appointment.",
          "The Bridal Experience at Holly's Hideaway includes both appointments and is designed to give you plenty of time at each one.",
        ],
      },
    ],
    images: [],
  },
];

export function getBridalJournalPost(slug: string) {
  return bridalJournalPosts.find((post) => post.slug === slug);
}
