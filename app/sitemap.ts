import type { MetadataRoute } from "next";
import { bridalJournalPosts } from "@/lib/bridalJournal";

export default function sitemap(): MetadataRoute.Sitemap {
  const bridalJournalPages = bridalJournalPosts.map((post) => ({
    url: `https://www.hollyshideaway.co.uk/bridal-journal/${post.slug}`,
    lastModified: new Date(post.published),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://www.hollyshideaway.co.uk",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.hollyshideaway.co.uk/bridal-nails-orpington",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...bridalJournalPages,
  ];
}
