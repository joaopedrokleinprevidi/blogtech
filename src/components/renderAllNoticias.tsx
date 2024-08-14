import { getAllNoticias } from "@/services/getAllNoticias";
import Image from "next/image";
import { Button } from "./ui/button";
import "../utils/style.css";
import Link from "next/link";

export function RenderAllNoticias() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 p-8">
      {getAllNoticias.map((noticia) => (
        <div
          key={noticia.id}
          className="flex flex-col justify-between border border-gray-300 p-4 rounded-lg cursor-pointer hover:border-slate-300 hover:shadow-md transition-all duration-300 hover:bg-gray-100 h-[500px] bg-white"
        >
          <div className="flex justify-center items-center ">
            <Image
              src={noticia.imagem}
              alt={noticia.titulo}
              width={75}
              height={75}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              quality={80}
              loading="lazy"
            />
          </div>

          <div className="flex flex-glow flex-col pt-4 pb-4 ">
            <h1 className="text-slate-800 text-2xl pb-3 card-config-2-lines">
              {noticia.titulo}
            </h1>
            <p className="text-gray-500  card-config-4-lines">
              {noticia.descricao}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500">
              Postado em {noticia.data.toLocaleDateString()}
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
