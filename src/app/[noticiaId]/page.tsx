import { Button } from "@/components/ui/button";
import { getNoticia } from "@/services/getNoticia";
import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";

export default function Noticia({ params }: { params: { noticiaId: string } }) {
  const noticia = getNoticia(parseInt(params.noticiaId));

  if (!noticia) {
    return <div>Notícia não encontrada.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link href="/">
        <Button className="mb-4">
          <ArrowLeftCircle className="w-3.5 h-3.5" />
          <span>Voltar</span>
        </Button>
      </Link>
      <h1 className="text-3xl font-bold mb-4">{noticia.titulo}</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-6">
        {noticia.descricao}
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Publicado em {new Date(noticia.data).toLocaleDateString()}
      </p>

      <article
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{
          __html: noticia.conteudo || "",
        }}
      />
    </div>
  );
}
