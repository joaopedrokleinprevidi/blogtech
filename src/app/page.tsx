import { Pagination } from "@/components/pagination";
import { RenderAllNoticias } from "@/components/renderAllNoticias";
import { SearchInput } from "@/components/search-input";
import { getAllNoticias, GetAllNoticiasProps } from "@/services/getAllNoticias";
import "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2883204152245588";

export default function Home({
  searchParams: { page = 1, search },
}: {
  searchParams: {
    page: number;
    search?: string;
  };
}) {
  const pageIndex: number = !!page ? page - 1 : 1; // Ajustado para que contagem comece do zero

  let noticiasParaRenderizar: GetAllNoticiasProps[];
  let totalCards: number;

  if (search && search.length > 0) {
    noticiasParaRenderizar = getAllNoticias.filter((noticia) =>
      noticia.titulo.toLowerCase().includes(search.toLowerCase())
    );
    totalCards = noticiasParaRenderizar.length;
  } else {
    noticiasParaRenderizar = getAllNoticias;
    totalCards = noticiasParaRenderizar.length;
  }

  const noticiasPorPagina = 4;
  const totalPages = Math.ceil(totalCards / noticiasPorPagina);

  return (
    <>
      <div className="p-8 pb-0 flex flex-col justify-center items-center">
        <h1 className="text-2xl pb-2 text-center sm:text-3xl lg:text-4xl">
          Confira as últimas notícias sobre o mundo tech!
        </h1>
        <p className="text-sm text-gray-500 text-center lg:text-base">
          Explore as tendências mais recentes, descubra inovações tecnológicas e
          acompanhe os eventos que estão moldando o futuro da tech.
        </p>
        <SearchInput />
        {totalCards > noticiasPorPagina && (
          <div className="mt-8">
            <Pagination totalPages={totalPages} isSearching={!!search} />
          </div>
        )}
      </div>
      <RenderAllNoticias
        currentPage={pageIndex}
        noticiasPorPagina={noticiasPorPagina}
        noticias={noticiasParaRenderizar}
      />
      {totalCards > noticiasPorPagina && (
        <div className="mb-8 flex justify-center">
          <Pagination totalPages={totalPages} isSearching={!!search} />
        </div>
      )}
    </>
  );
}
