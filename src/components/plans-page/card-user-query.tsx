import type { StepDataType } from "@/types";
import { PartsRenderer } from "../shared/parts-renderer";

type UserQueryCardProps = {
  step: StepDataType;
};

export function UserQueryCard({ step }: UserQueryCardProps) {
  return (
    <div className="collapse collapse-arrow border outline-0">
      <input type="checkbox" />
      <div className="flex flex-col collapse-title gap-2">
        <p className="font-semibold">User Query</p>
        <p className="text-sm">{step.summary}</p>
      </div>
      <div className="collapse-content text-sm">
        {step.parts && <PartsRenderer parts={step.parts} />}
      </div>
    </div>
  );
}
