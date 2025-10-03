import { Routes, Route } from "react-router-dom";
import { HomePage, PlanPage } from "@/pages";

export function AppRoot() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plan/:id" element={<PlanPage />} />
    </Routes>
  );
}
