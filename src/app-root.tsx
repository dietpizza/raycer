import { Routes, Route } from "react-router-dom";
import { HomePage, PlanPage } from "@/pages";

export function AppRoot() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plans/:id" element={<PlanPage />} />
    </Routes>
  );
}
