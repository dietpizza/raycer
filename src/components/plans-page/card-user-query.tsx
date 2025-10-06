import type { StepDataType } from "@/types";
import { PartsRenderer } from "../shared/parts-renderer";
import { cn } from "@/utils/tailwind";

type UserQueryCardProps = {
  step: StepDataType;
};

export function UserQueryCard({ step }: UserQueryCardProps) {
  return (
    <div
      className={cn(
        "collapse border outline-0",
        step.parts && "collapse-arrow"
      )}
    >
      <input type="checkbox" />
      <div className="flex flex-col collapse-title gap-2">
        <p className="font-semibold">User Query</p>
        <p className="text-sm">{step.summary}</p>
      </div>
      {step.parts && (
        <div className="collapse-content text-sm">
          <PartsRenderer parts={step.parts} />
        </div>
      )}
    </div>
  );
}
