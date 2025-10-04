import type { StepDataType } from "@/types";
import { PartsRenderer } from "./parts-renderer";

type StepRendererProps = {
  title: string;
  step: StepDataType;
};

export function StepRenderer({ title, step }: StepRendererProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold">{title}</p>
      <p>{step.summary}</p>
      {step.parts && <PartsRenderer parts={step.parts} />}
    </div>
  );
}
