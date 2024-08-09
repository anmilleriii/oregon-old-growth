import { useMapStore } from "../../store";
import { OldGrowthLayer } from "./old-growth-layer";
import { StateBoundaryLayer } from "./state-boundary-layer";

export function Layers() {
  const { layers } = useMapStore();

  return (
    <>
      {/* {layers["old-growth"].visible && <OldGrowthLayer />} */}
      {layers["state-boundary"].visible && <StateBoundaryLayer />}
    </>
  );
}
