import { BookOpenCheck } from "lucide-react";

export function Header() {
  return (
    <header className="flex flex-col items-center justify-center p-2 bg-black shadow-lg">
      <div className="flex items-center pb-2 gap-2">
        <BookOpenCheck className="w-11 h-11 text-white" />
        <h1 className="text-4xl text-gray-50 pb-2">Techformando</h1>
      </div>
      <h2 className="text-base text-gray-100 text-center">
        Transformando informação em evolução contínua.
      </h2>
    </header>
  );
}
