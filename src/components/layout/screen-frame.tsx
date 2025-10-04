import { cn } from "@/utils/tailwind";
import React from "react";

export type ScreenFrameProps = {
  children?: React.ReactNode;
  className?: string;
};

export function ScreenFrame({ children, className }: ScreenFrameProps) {
  return (
    <div
      className={cn(
        "flex flex-col m-auto min-h-screen border-l border-r border-background max-w-3xl",
        className
      )}
    >
      {children}
    </div>
  );
}
