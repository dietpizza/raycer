import type { PlanSpecDataType } from "@/types";
import { StepRenderer } from "@/components/shared";

type PlanSpecCardProps = {
  iterations: Array<PlanSpecDataType>;
};

type PlanSpecDetailProps = {
  detail: PlanSpecDataType;
};

export function PlanSpecDetail({ detail }: PlanSpecDetailProps) {
  const { observation, approach } = detail;

  return (
    <div className="flex flex-col gap-4">
      <StepRenderer title="Observations" step={observation} />
      <StepRenderer title="Approach" step={approach} />
    </div>
  );
}

export function PlanSpecCard({ iterations }: PlanSpecCardProps) {
  return (
    <div className="collapse collapse-arrow border outline-0">
      <input type="checkbox" name="my-accordion-2" />
      <div className="collapse-title font-semibold">Plan Specification</div>
      <div className="collapse-content text-sm">
        <PlanSpecDetail detail={iterations[0]} />
      </div>
    </div>
  );
}
