import { getAllNoticias } from "./getAllNoticias";

export function getNoticia(id: number) {
  return getAllNoticias.find((noticia) => noticia.id === id);
}
