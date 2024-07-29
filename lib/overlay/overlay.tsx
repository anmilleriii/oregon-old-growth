import { InfoPanel } from "./info-panel";
import { LastUpdatedBanner } from "./last-updated-banner";
import { LayersControl } from "./layers-control";
import { DataSources } from "./data-sources";
import { FAQ } from "./faq";
import { KeyFacts } from "./key-facts";

export function Overlay() {
  return (
    <div
      className="pointer pointer-events-none absolute z-10 h-screen w-full pt-4 lg:w-1/3 lg:ml-4  flex flex-col gap-2  overflow-y-scroll *:pointer-events-auto *:bg-neutral-100"
      style={{ fontFamily: "sans-serif" }}
    >
      <InfoPanel />
      <FAQ />
      <LayersControl />
      <DataSources />
      <KeyFacts />
      <LastUpdatedBanner />
    </div>
  );
}
