import { ScreenFrame } from "@/components/layout";
import { PlanSpecCard, UserQueryCard } from "@/components/plans-page";

import { SAMPLE_PLAN_DATA } from "@/SAMPLE_DATA";

export function PlanPage() {
  return (
    <ScreenFrame className="p-4 gap-2 select-none">
      <UserQueryCard step={SAMPLE_PLAN_DATA.userQuery} />
      <PlanSpecCard iterations={SAMPLE_PLAN_DATA.planSpec.iterations} />
    </ScreenFrame>
  );
}
