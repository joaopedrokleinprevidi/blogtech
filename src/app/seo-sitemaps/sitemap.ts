import type { MetadataRoute } from "next";
import { getAllNoticias, GetAllNoticiasProps } from "@/services/getAllNoticias";

export default function sitemap(): MetadataRoute.Sitemap {
  const noticias = getAllNoticias;

  const baseSitemap: MetadataRoute.Sitemap = [
    {
      url: "https://techformando.vercel.app/",
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  const noticiasSitemap = noticias.map((noticia: GetAllNoticiasProps) => ({
    url: `https://techformando.vercel.app/${noticia.id}`,
    priority: 0.8,
    lastModified: `${new Date(noticia.dataDePublicacao)}`,
  }));

  // Retorna o sitemap completo
  return [...baseSitemap, ...noticiasSitemap];
}