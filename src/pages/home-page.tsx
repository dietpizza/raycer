import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ScreenFrame } from "@/components/layout";
import { TextArea } from "@/components/ui";

import logo from "@/assets/raycer-logo.svg";
import { nanoid } from "nanoid";

export function HomePage() {
  const [userQuery, setUserQuery] = useState("");
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleSend() {
    setLoading(true);

    setTimeout(navigateToPlans, 3000);
  }

  function navigateToPlans() {
    const id = nanoid(20);
    navigate(`/plans/${id}`);
  }

  return (
    <ScreenFrame>
      <div className="flex flex-1 flex-col items-center justify-center p-4 gap-8">
        <img src={logo} className="h-30 w-30 mt-40" />
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-center">
            What can i help you build today?
          </p>
          <p className="text-md text-center">
            Create new code, add features, or fix issues—let's make it happen.
          </p>
        </div>
        <div className="flex flex-col w-full border-2 border-background p-2 gap-2 mt-auto">
          <TextArea
            disabled={isLoading}
            className="w-full"
            placeholder="Describe your task, preferably in detail"
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
          />
          <div className="flex w-full justify-end">
            <button
              disabled={isLoading}
              onClick={handleSend}
              className="btn btn-neutral"
            >
              {isLoading ? (
                <>
                  <span className="loading loading-spinner" /> Sending
                </>
              ) : (
                "Send"
              )}
            </button>
          </div>
        </div>
      </div>
    </ScreenFrame>
  );
}
