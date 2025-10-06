import { cn } from "@/utils/tailwind";

type IconButtonProps = {
  icon: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export function IconButton({ icon, disabled, onClick }: IconButtonProps) {
  return (
    <div
      onClick={() => !disabled && onClick?.()}
      className={cn(
        "flex items-center justify-center rounded-md cursor-pointer hover:bg-base-300 h-8 w-8",
        disabled && "opacity-30"
      )}
    >
      {icon}
    </div>
  );
}
