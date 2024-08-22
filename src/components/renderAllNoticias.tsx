import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import NoticiaNotFound from "./noticiaNotFound";

export function RenderAllNoticias({
  currentPage,
  noticias,
  noticiasPorPagina,
}: {
  currentPage: number;
  noticias: any[];
  noticiasPorPagina: number;
}) {
  const inicioPaginacao = currentPage * noticiasPorPagina;
  let fimPaginacao = Math.min(inicioPaginacao + noticiasPorPagina);
  const noticiasParaRenderizar = noticias.slice(inicioPaginacao, fimPaginacao);

  if (noticiasParaRenderizar.length === 0) {
    return <NoticiaNotFound />;
  }

  return (
    <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-2">
      {noticiasParaRenderizar.map((noticia) => (
        <div
          key={noticia.id}
          className="flex flex-col justify-between :sm:gap-3 border border-gray-300 p-4 pb-2 rounded-lg hover:border-slate-300 hover:shadow-md transition-all duration-300 hover:bg-gray-100 h-[550px] sm:h-[600px] bg-white"
        >
          <Link
            href={`/${noticia.id}`}
            className="flex justify-center items-center h-[50%]"
          >
            <Image
              src={noticia.imagem}
              alt={noticia.titulo}
              width={451}
              height={262}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                backgroundPosition: "center center",
                borderRadius: "7px",
              }}
              quality={80}
              loading="lazy"
            />
          </Link>

          <div className="flex flex-col pt-2 gap-3 pb-1 max-h-[40%] sm:pl-2">
            <h1 className="text-slate-800 text-xl sm:text-2xl lg:text-3xl line-clamp-3 ">
              {noticia.titulo}
            </h1>
            <p className="text-gray-500 line-clamp-4">{noticia.descricao}</p>
          </div>
          <div className="flex items-center justify-between sm:gap-4 lg:gap-8 h-min sm:max-w-[100%] lg:max-w-[100%] sm:pl-2">
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-8">
              <p className="text-xs text-gray-500">
                Postado em {noticia.dataDePublicacao.toLocaleDateString()}
              </p>
              <p className="text-xs text-gray-500">
                Tempo de leitura: {noticia.tempoDeLeitura} min
              </p>
            </div>
            <Link href={`/${noticia.id}`}>
              <Button>Leia mais</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
