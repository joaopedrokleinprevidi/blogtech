export default function NoticiaNotFound() {
  return (
    <div className="grid grid-cols-1 gap-8 p-8 h-[430px] mb-28">
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="text-3xl tracking-tight text-gray-900 sm:text-5xl">
          Notícia não encontrada
        </h1>
        <p className="mt-6 text-lg leading-7 text-muted-foreground">
          Lamentamos, não existe nenhuma notícia com este título.
        </p>
        <p className="mt-3 text-lg leading-7 text-muted-foreground">
          Limpe sua pesquisa ou tente novamente.
        </p>
      </div>
    </div>
  );
}
