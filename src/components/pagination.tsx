"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useQueryState, parseAsInteger } from "nuqs";
import { Button } from "./ui/button";
import { Tooltip } from "./tooltip";
import { useEffect } from "react";

export function Pagination({
  totalPages,
  isSearching,
}: {
  isSearching: boolean;
  totalPages: number;
}) {
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger
      .withDefault(1)
      .withOptions({ history: "push", shallow: false })
  );

  const handleNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  const handlePrevPage = () => {
    const prevPage = page - 1;
    setPage(prevPage);
  };

  const hasPreviousPage = page > 1;
  const hasNextPage = page < totalPages;
  const hasPages = totalPages > 0;

  if (!hasPages) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (isSearching) {
      setPage(1);
    }
  }, [isSearching, setPage]);

  return (
    <div className="flex items-center gap-4 justify-end">
      <p className="text-sm text-gray-700">
        Página {page} de {totalPages}
      </p>
      <div className="flex gap-1 text-gray-700">
        <Tooltip text="Página anterior">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={handlePrevPage}
            disabled={!hasPreviousPage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </Tooltip>
        <Tooltip text="Página seguinte">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={handleNextPage}
            disabled={!hasNextPage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}
