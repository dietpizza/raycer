import React from "react";

export type ScreenFrameProps = {
  children?: React.ReactNode;
};

export function ScreenFrame({ children }: ScreenFrameProps) {
  return (
    <div className="flex flex-col m-auto min-h-screen bg-amber-400 max-w-3xl">
      {children}
    </div>
  );
}
