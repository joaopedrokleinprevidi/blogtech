import { Button } from "@/components/ui/button";
import { getNoticia } from "@/services/getNoticia";
import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";
import { ShareButton } from "@/components/share-button";
import Head from "next/head";
import { HeadArticleSEO } from "@/components/head-seo-meta-tags";

export default function Noticia({ params }: { params: { noticiaId: string } }) {
  const noticia = getNoticia(parseInt(params.noticiaId));

  if (!noticia) {
    return <div>Notícia não encontrada.</div>;
  }

  return (
    <>
      <HeadArticleSEO noticia={noticia} />
      <div className="max-w-3xl mx-auto p-6">
        <Link href="/">
          <Button className="gap-1 mb-4" variant="default" size="xs">
            <ArrowLeftCircle className="w-5 h-5" />
            <span> Voltar </span>
          </Button>
        </Link>

        <h1 className="text-3xl font-bold mb-4">{noticia.titulo}</h1>
        <div className="flex items-end gap-4">
          <div className="flex items-center">
            <p className="text-sm text-gray-500 mb-4 mr-6">
              {noticia.tempoDeLeitura} min de leitura
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Publicado em{" "}
              {new Date(noticia.dataDePublicacao).toLocaleDateString()}
            </p>
          </div>
        </div>
        {noticia.mostrarDescricaoNaNoticia && (
          <h2 className="text-xl font-semibold text-gray-600 mb-6">
            {noticia.descricao}
          </h2>
        )}
        <article
          className="prose lg:prose-xl text-justify sm:text-left"
          dangerouslySetInnerHTML={{
            __html: noticia.conteudoNoticia || "",
          }}
        />

        <div className="flex items-center justify-between">
          <Link href="/">
            <Button
              className="gap-1 mb-4 flex items-center"
              variant="default"
              size="xs"
            >
              <ArrowLeftCircle className="w-5 h-5" />
              <span> Voltar </span>
            </Button>
          </Link>
          <ShareButton title={noticia.titulo} description={noticia.descricao} />
        </div>
      </div>
    </>
  );
}
