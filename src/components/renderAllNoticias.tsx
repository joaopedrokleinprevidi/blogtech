import { getAllNoticias } from "@/services/getAllNoticias";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export function RenderAllNoticias() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 p-8">
      {getAllNoticias.map((noticia) => (
        <div
          key={noticia.id}
          className="flex flex-col justify-between border border-gray-300 p-4 pb-2 rounded-lg hover:border-slate-300 hover:shadow-md transition-all duration-300 hover:bg-gray-100 h-[550px] bg-white"
        >
          <div className="flex justify-center items-center max-h-[50%]">
            <Image
              src={noticia.imagem}
              alt={noticia.titulo}
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
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
    </div>
  );
}
