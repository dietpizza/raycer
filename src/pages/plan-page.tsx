import { useParams } from "react-router-dom";
import { ScreenFrame } from "@/components/layout/screen-frame";

export function PlanPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <ScreenFrame>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-slate-900">
        <h1 className="text-3xl font-bold">Plan Overview</h1>
        <p className="text-lg">
          Viewing plan <span className="font-semibold text-slate-700">{id}</span>
        </p>
      </div>
    </ScreenFrame>
  );
}