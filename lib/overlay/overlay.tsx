import { Info } from "./info";
import { Methodology } from "./methodology";
import { LayersControl } from "./layers-control";
import { Disclaimers } from "./disclaimers";
import { AdditionalResources } from "./additional-resources";

export function Overlay() {
  return (
    <div
      className="pointer pointer-events-none absolute z-10 h-screen w-full pt-4 lg:w-1/3 lg:ml-4  flex flex-col gap-2  overflow-y-scroll *:pointer-events-auto *:bg-neutral-100"
      style={{ fontFamily: "sans-serif" }}
    >
      <Info />
      <Methodology />
      <LayersControl />
      <Disclaimers />
      <AdditionalResources />
    </div>
  );
}
