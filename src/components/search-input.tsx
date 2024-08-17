"use client";
import { Input } from "./ui/input";
import { useQueryState } from "nuqs";

export function SearchInput() {
  const [search, setSearch] = useQueryState("search", {
    history: "push",
    shallow: false,
  });

  if (search === "") setSearch(null);
  return (
    <>
      <Input
        id="search"
        placeholder="Buscar notícias..."
        className="w-48 h-10 mt-8 rounded-md bg-gray-100 border border-slate-400 focus:border-black focus:outline-0 text-black placeholder-gray-200"
        value={search || ""}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </>
  );
}
