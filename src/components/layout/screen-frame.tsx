import React from "react";

export type ScreenFrameProps = {
  children?: React.ReactNode;
};

export function ScreenFrame({ children }: ScreenFrameProps) {
  return (
    <div className="flex flex-col m-auto min-h-screen border-l border-r border-background max-w-3xl">
      {children}
    </div>
  );
}
