import { useParams } from "react-router-dom";
import { ScreenFrame } from "@/components/layout";

export function PlanPage() {
  const { id } = useParams<{ id: string }>();

  return <ScreenFrame></ScreenFrame>;
}
