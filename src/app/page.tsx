import { RenderAllNoticias } from "@/components/renderAllNoticias";

export default function Home() {
  return (
    <>
      <div className="p-8 pb-0 flex flex-col justify-center">
        <h1 className="text-2xl pb-2 text-center sm:text-3xl lg:text-4xl">
          Confira as últimas notícias sobre o mundo tech!
        </h1>
        <p className="text-sm text-gray-500 text-center lg:text-base">
          Explore as tendências mais recentes, descubra inovações tecnológicas e
          acompanhe os eventos que estão moldando o futuro da tech.
        </p>
      </div>
      <RenderAllNoticias />
    </>
  );
}
