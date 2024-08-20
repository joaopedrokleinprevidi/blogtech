import { BookOpenCheck } from "lucide-react";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";

export function Header() {
  return (
    <header className="flex flex-col items-center justify-center p-2 bg-black shadow-lg">
      <Link href="/">
        <div className="flex items-center pb-2 gap-2">
          <BookOpenCheck className="w-11 h-11 text-white" />
          <h1 className="text-4xl text-gray-50 pb-2">Techformando</h1>
        </div>
      </Link>
      <h2 className="text-base text-gray-100 text-center">
        Transformando informação em evolução contínua.
      </h2>
      <div className="flex gap-3 items-center mt-4">
        <h3 className="text-sm text-gray-400 text-center">Siga-nos</h3>
        <a
          href="https://x.com/Techformando"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cursor-pointer flex items-center gap-1">
            <FaSquareXTwitter className="h-5 w-5 text-gray-400" />
            <p className="text-sm text-gray-400">Techformando</p>
          </div>
        </a>
      </div>
    </header>
  );
}
