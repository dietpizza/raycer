import type { StepDataType } from "@/types";
import { PartsRenderer } from "./parts-renderer";

type FileChangesRendererType = {
  fileName: string;
  details: StepDataType;
};

export function FileChangesRenderer({
  fileName,
  details,
}: FileChangesRendererType) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xs font-semibold underline cursor-pointer self-start">
        {fileName}
      </p>
      {details.summary && <p className="text-sm">{details.summary}</p>}
      {details.parts && <PartsRenderer parts={details.parts} />}
    </div>
  );
}
