import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { IconButton } from "./icon-button";

type PaginationProps = {
  current: number;
  total: number;
  onLeftClick?: () => void;
  onRightClick?: () => void;
};

export function Pagination({
  current = 0,
  total = 0,

  onLeftClick,
  onRightClick,
}: PaginationProps) {
  return (
    <div className="flex items-center gap-2">
      <IconButton
        disabled={current < 1}
        onClick={onLeftClick}
        icon={<ChevronLeftIcon className="text-sm h-4 w-4" />}
      />
      <p>{`${current + 1}/${total}`}</p>
      <IconButton
        disabled={current == total - 1}
        onClick={onRightClick}
        icon={<ChevronRightIcon className="text-sm h-4 w-4" />}
      />
    </div>
  );
}
