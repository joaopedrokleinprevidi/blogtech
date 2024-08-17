import { Pagination } from "@/components/pagination";
import { RenderAllNoticias } from "@/components/renderAllNoticias";
import { SearchInput } from "@/components/search-input";
import { getAllNoticias } from "@/services/getAllNoticias";

export default function Home({
  searchParams: { page = 1, search },
}: {
  searchParams: {
    page: number;
    search?: string;
  };
}) {
  const pageIndex = !!page ? page - 1 : 1; // Ajustado para que contagem comece do zero
  const totalCards = getAllNoticias.length;
  const totalPages = Math.ceil(totalCards / 4);

  // const searchQuery = searchParams?.search ? searchParams.search : "";
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
        {totalCards > 4 && (
          <div className="mt-8">
            <Pagination currentPage={pageIndex} totalPages={totalPages} />
          </div>
        )}
      </div>
      <RenderAllNoticias currentPage={pageIndex} />
      {totalCards > 4 && (
        <div className="mb-8 flex justify-center">
          <Pagination currentPage={pageIndex} totalPages={totalPages} />
        </div>
      )}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2883204152245588"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
