import type { FileChange, PlanSpecDataType } from "@/types";
import { FileChangesRenderer, StepRenderer } from "@/components/shared";

type PlanSpecCardProps = {
  iterations: Array<PlanSpecDataType>;
};

type PlanSpecDetailProps = {
  detail: PlanSpecDataType;
};

type PerFileChangesProps = {
  perFileChanges: FileChange[];
};

export function PerFileChanges({ perFileChanges }: PerFileChangesProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-md font-semibold">File-by-File Changes</p>
      {perFileChanges.map((e) => (
        <FileChangesRenderer fileName={e.fileName} details={e.details} />
      ))}
    </div>
  );
}

export function PlanSpecDetail({ detail }: PlanSpecDetailProps) {
  const { observation, approach, perFileChanges } = detail;

  return (
    <div className="flex flex-col gap-4">
      <StepRenderer title="Observations" step={observation} />
      <StepRenderer title="Approach" step={approach} />
      {perFileChanges?.length && (
        <PerFileChanges perFileChanges={perFileChanges} />
      )}
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
