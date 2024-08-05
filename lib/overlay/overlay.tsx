import { InfoPanel } from "./info-panel";
import { LayersControl } from "./layers-control";

export function Overlay() {
  return (
    <div
      className="pointer pointer-events-none absolute z-10 h-screen w-full pt-4 lg:w-1/3 lg:ml-4  flex flex-col gap-2  overflow-y-scroll *:pointer-events-auto *:bg-neutral-100"
      style={{ fontFamily: "sans-serif" }}
    >
      <InfoPanel />
      <LayersControl />
    </div>
  );
}
