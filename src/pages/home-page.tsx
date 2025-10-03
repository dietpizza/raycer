import { ScreenFrame } from "@/components/layout";
import logo from "@/assets/raycer-logo.svg";

export function HomePage() {
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
          <textarea className="textarea w-full"></textarea>
          <div className="flex w-full justify-end">
            <button className="btn btn-neutral">Send</button>
          </div>
        </div>
      </div>
    </ScreenFrame>
  );
}
