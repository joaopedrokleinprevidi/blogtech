"use client";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useQueryState } from "nuqs";
import { Tooltip } from "./tooltip";

export function SearchInput() {
  const [search, setSearch] = useQueryState("search", {
    history: "push",
    shallow: false,
  });

  if (search === "") setSearch(null);
  return (
    <div className="flex items-center justify-center gap-2  mt-8">
      <Input
        id="search"
        placeholder="Buscar notícias..."
        autoComplete="off"
        className="w-48 h-8 rounded-md bg-gray-100 border border-slate-400 focus:border-black focus:outline-0 text-black placeholder-gray-200"
        value={search || ""}
        onChange={(e) => {
          setSearch(e.target.value);
          if (e.target.value.length == 0) {
            setSearch(null);
          }
        }}
      />
      {search && search.length > 0 && (
        <Tooltip text="Limpar pesquisa">
          <Button
            variant="destructive"
            size="xs"
            onClick={() => setSearch(null)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </Tooltip>
      )}
    </div>
  );
}
