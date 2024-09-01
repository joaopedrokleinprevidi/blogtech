"use client";
import Head from "next/head";

import { GetAllNoticiasProps } from "@/services/getAllNoticias";

export function HeadArticleSEO({ noticia }: { noticia: GetAllNoticiasProps }) {
  if (!noticia) return;

  const dataDePublicacaoDaNoticia = noticia.dataDePublicacao.toISOString();

  return (
    <>
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Techformando" />
        <meta property="og:title" content={noticia.titulo} />
        <meta property="og:description" content={noticia.descricao} />
        <meta property="og:image" content={noticia.imagem} />
        <meta
          property="article:published_time"
          content={dataDePublicacaoDaNoticia}
        />
        <meta
          property="og:url"
          content={`https://www.techformando.com/${noticia.id}`}
        />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="yandex" content="index, follow" />
        <meta name="baidu" content="index, follow" />
        <meta name="alexa" content="index, follow" />
      </Head>
    </>
  );
}
