import { InfoPanel } from "./overlay/info-panel";
import { LastUpdatedBanner } from "./overlay/last-updated-banner";
import { LayersControl } from "./overlay/layers-control";

export function Overlay() {
  return (
    <div
      className="pointer pointer-events-none absolute z-10 grid h-screen w-full auto-rows-auto grid-cols-2 grid-rows-3 overflow-y-scroll *:pointer-events-auto"
      style={{ fontFamily: "sans-serif" }}
    >
      <LastUpdatedBanner />
      <InfoPanel />
      <LayersControl />
    </div>
  );
}
