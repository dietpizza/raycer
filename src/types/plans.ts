export type StepDataType = {
  summary: string;
  parts?: Array<string>;
};

export type PlanSpecDataType = {
  observation: StepDataType;
  approach: StepDataType;
};
