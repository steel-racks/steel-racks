import { MetadataRoute } from "next";

const siteUrl = "https://www.steelsrack.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const imageUrls = Array.from({ length: 87 }, (_, index) =>
    `${siteUrl}/media/image-${String(index + 1).padStart(3, "0")}.webp`
  );

  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${siteUrl}/hero-attractive.png`,
        `${siteUrl}/al-najim-logo-horizontal.webp`,
        `${siteUrl}/media/service-shearing.webp`,
        `${siteUrl}/media/service-bending.webp`,
        `${siteUrl}/media/service-lasering-notching.webp`,
        ...imageUrls,
      ],
    },
  ];
}
