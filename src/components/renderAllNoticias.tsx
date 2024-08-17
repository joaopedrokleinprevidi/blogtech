import { getAllNoticias } from "@/services/getAllNoticias";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export function RenderAllNoticias({
  currentPage,
  search,
}: {
  currentPage: number;
  search?: string;
}) {
  const noticiasPorPagina = 4;
  const inicio = currentPage * noticiasPorPagina;
  const fim = Math.min(inicio + noticiasPorPagina, getAllNoticias.length);

  let noticiasParaRenderizar;

  if (search && search.length > 0) {
    noticiasParaRenderizar = getAllNoticias.filter((noticia) =>
      noticia.titulo.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    noticiasParaRenderizar = getAllNoticias.slice(inicio, fim);
  }

  return (
    <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-2">
      {noticiasParaRenderizar.map((noticia) => (
        <div
          key={noticia.id}
          className="flex flex-col justify-between :sm:gap-3 border border-gray-300 p-4 pb-2 rounded-lg hover:border-slate-300 hover:shadow-md transition-all duration-300 hover:bg-gray-100 h-[550px] sm:h-[600px] bg-white"
        >
          <div className="flex justify-center items-center max-h-[50%]">
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
          </div>

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

{
  /* <div className="grid grid-cols-1 gap-8 p-3 lg:p-8">
{noticiasParaRenderizar.map((noticia) => (
  <div
    key={noticia.id}
    className="flex flex-col sm:flex-row lg:flex-row justify-between border border-gray-300 p-4 pb-2 rounded-lg hover:border-slate-300 hover:shadow-md transition-all duration-300 hover:bg-gray-100 h-[550px] bg-white"
  >
    <div className="flex justify-center items-center max-h-[50%] lg:max-h-[100%] lg:max-w-[50%]">
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
    </div>
    <div className="flex flex-col">
      <div className="flex flex-col pt-2 gap-3 pb-1 max-h-[40%] sm:max-h-[90%] lg:max-h-[90%] sm:pl-4 lg:pl-8">
        <h1 className="text-slate-800 text-xl sm:text-2xl lg:text-3xl line-clamp-3 lg:line-clamp-none">
          {noticia.titulo}
        </h1>
        <p className="text-gray-500 line-clamp-4 lg:line-clamp-none">
          {noticia.descricao}
        </p>
      </div>

      <div className="flex items-center sm:items-end lg:items-end justify-between sm:gap-4 lg:gap-8 max-h-[10%] sm:max-w-[100%] lg:max-w-[100%] sm:pl-4 lg:pl-8">
        <p className="text-xs text-gray-500">
          Postado em {noticia.dataDePublicacao.toLocaleDateString()}
        </p>
        <Link href={`/${noticia.id}`}>
          <Button>Leia mais</Button>
        </Link>
      </div>
    </div>
  </div>
))}
</div> */
}

{
  /* <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 p-8">
{noticiasParaRenderizar.map((noticia) => (
  <div
    key={noticia.id}
    className="flex flex-col justify-between border border-gray-300 p-4 pb-2 rounded-lg hover:border-slate-300 hover:shadow-md transition-all duration-300 hover:bg-gray-100 h-[550px] bg-white"
  >
    <div className="flex justify-center items-center max-h-[50%]">
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
    </div>
    <div className="flex flex-glow flex-col pt-2 pb-1 max-h-[40%]">
      <h1 className="text-slate-800 text-2xl pb-2 line-clamp-2">
        {noticia.titulo}
      </h1>
      <p className="text-gray-500 line-clamp-4">{noticia.descricao}</p>
    </div>
    <div className="flex items-center justify-between max-h-[10%]">
      <p className="text-xs text-gray-500">
        Postado em {noticia.dataDePublicacao.toLocaleDateString()}
      </p>
      <Link href={`/${noticia.id}`}>
        <Button>Leia mais</Button>
      </Link>
    </div>
  </div>
))}
</div> */
}
