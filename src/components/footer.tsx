import { FaSquareXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-black text-white py-4 px-8 flex justify-between items-center gap-4">
      <p className="text-xs">
        &copy; 2024 Techformando. Todos os direitos reservados.
      </p>
      <a
        href="https://x.com/Techformando"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="cursor-pointer flex items-center gap-1">
          <FaSquareXTwitter className="h-6 w-6" />
          <p className="text-base">Techformando</p>
        </div>
      </a>
    </footer>
  );
}
