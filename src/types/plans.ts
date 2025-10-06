export type StepDataType = {
  summary: string;
  parts?: Array<string>;
};

export type FileChange = {
  fileName: string;
  details: StepDataType;
};

export type PlanSpecDataType = {
  observation: StepDataType;
  approach: StepDataType;
  perFileChanges?: Array<FileChange>;
};
