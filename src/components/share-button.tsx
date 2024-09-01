"use client";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Share } from "lucide-react";

export function ShareButton({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: window.location.href,
        });
      } catch (err) {
        toast.error("O artigo não foi compartilhado.");
      }
    } else {
      toast.error(
        "O navegador atual não possui a compatibilidade necessária para usar este recurso."
      );
    }
  }

  return (
    <>
      <Button
        onClick={handleShare}
        className="gap-1 mb-4 flex items-center"
        variant="default"
        size="xs"
      >
        <span>Compartilhar</span>
        <Share className="w-5 h-5" />
      </Button>
    </>
  );
}
