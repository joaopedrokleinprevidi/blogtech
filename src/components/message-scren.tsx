import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function MessageScreen({ children }: { children: ReactNode }) {
  return (
    <div className="place-items-center  mx-auto text-center flex flex-col items-center">
      {children}
    </div>
  );
}

export function MessageScreenBanner({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <>
      <p className={cn("text-[10rem] font-black text-gray-300", className)}>
        {children}
      </p>
      <div className="text-center shadow-[rgba(255,255,255,1)_0px_-20px_20px_5px] w-full -mt-11 h-10 relative bg-white" />
    </>
  );
}

export function MessageScreenTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function MessageScreenSubTitle({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 text-lg leading-7 text-muted-foreground">{children}</p>
  );
}

export function MessageScreenBackButton() {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <Button className="text-base border border-slate-400" size="lg" asChild>
        <Link href="/">Voltar ao início</Link>
      </Button>
    </div>
  );
}
