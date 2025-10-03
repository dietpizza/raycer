import React, { useRef, useEffect } from "react";
import { cn } from "@/utils/tailwind";

export type TextAreaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    maxHeight?: string;
  };

export function TextArea({
  maxHeight = "200px",
  className,
  ...rest
}: TextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `calc(${textarea.scrollHeight}px + 4px)`;
    }
  }, [rest.value]);

  return (
    <textarea
      ref={textareaRef}
      className={cn("textarea resize-none overflow-y-auto", className)}
      style={{ maxHeight }}
      {...rest}
    />
  );
}
