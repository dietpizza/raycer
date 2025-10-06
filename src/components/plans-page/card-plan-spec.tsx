import type { FileChange, PlanSpecDataType } from "@/types";
import { FileChangesRenderer, StepRenderer } from "@/components/shared";
import { IconButton, Pagination } from "@/components/ui";
import { useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { usePlanningData } from "@/hooks/usePlanAnimation";

type PlanSpecCardProps = {
  isLoading?: boolean;
  iterations: Array<PlanSpecDataType>;
};

type PlanSpecDetailProps = {
  detail: PlanSpecDataType;
};

type PerFileChangesProps = {
  perFileChanges: FileChange[];
};

type PlanSpecFooterProps = {
  onChat: () => void;
};

type PlanSpecChatProps = {
  onClose: () => void;
  onUpdatePlan: (query: string) => void;
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

export function PlanSpecFooter({ onChat }: PlanSpecFooterProps) {
  return (
    <div className="flex justify-between mt-4">
      <button className="btn" onClick={onChat}>
        <ChatBubbleLeftRightIcon className="h-5 w-5" />
        Chat with plan
      </button>
      <button className="btn">Execute in CoPilot</button>
    </div>
  );
}

export function PlanSpecChat({ onUpdatePlan, onClose }: PlanSpecChatProps) {
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(false);

  function handleSend() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onUpdatePlan(query);
    }, 2000);
  }

  return (
    <div className="flex mt-4 gap-2">
      <button className="btn">
        <XMarkIcon className="h-5 w-5" onClick={onClose} />
      </button>
      <input
        type="text"
        className="input w-full"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn" onClick={handleSend}>
        {isLoading && <span className="h-4 w-4 loading" />}
        Send
      </button>
    </div>
  );
}

export function PlanSpecCard({ iterations, isLoading }: PlanSpecCardProps) {
  const [iter, setIter] = useState(0);
  const [showChatWithPlan, setChatWithPlan] = useState(false);

  function onPageChange(step: number) {
    return () => {
      setIter((s) => {
        return s + step;
      });
    };
  }

  function handleUpdatePlan() {
    setChatWithPlan(false);
  }

  return (
    <div className="collapse collapse-arrow border outline-0">
      <input type="checkbox" name="my-accordion-2" defaultChecked />
      <div className="flex collapse-title justify-between">
        <p className="text-md font-semibold">Plan Specification</p>
        {isLoading && <span className="loading h-6 w-6" />}
      </div>
      <div className="collapse-content text-sm">
        {iterations.length > 1 && (
          <div className="flex justify-end h-8 w-full ">
            <Pagination
              current={iter}
              total={iterations.length}
              onLeftClick={onPageChange(-1)}
              onRightClick={onPageChange(1)}
            />
          </div>
        )}
        <PlanSpecDetail detail={iterations[0]} />
        {showChatWithPlan ? (
          <PlanSpecChat
            onClose={() => setChatWithPlan(false)}
            onUpdatePlan={handleUpdatePlan}
          />
        ) : (
          <PlanSpecFooter onChat={() => setChatWithPlan(true)} />
        )}
      </div>
    </div>
  );
}
