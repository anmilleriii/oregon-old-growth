import { AdditionalResources } from "./additional-resources";
import { Disclaimers } from "./disclaimers";
import { Info } from "./info";
import { KeyLocations } from "./key-locations";
import { LayersControl } from "./layers-control";
import { Methodology } from "./methodology";

export function Overlay({
  onClickKeyLocation,
}: {
  onClickKeyLocation?: ({ lng, lat }: { lng: number; lat: number }) => void;
}) {
  return (
    <div
      className="pointer pointer-events-none absolute z-10 h-screen w-full pt-4 lg:w-1/3 lg:ml-4  flex flex-col gap-2  overflow-y-scroll *:pointer-events-auto *:bg-neutral-100"
      style={{ fontFamily: "sans-serif" }}
    >
      <Info />
      <LayersControl />
      <KeyLocations onClick={onClickKeyLocation} />
      <Methodology />
      <Disclaimers />
      <AdditionalResources />
    </div>
  );
}
