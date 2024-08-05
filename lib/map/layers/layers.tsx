import { useMapStore } from "../../store";
import { PrivateLandLayer } from "./private-land-layer";
import { StateBoundaryLayer } from "./state-boundary-layer";

export function Layers() {
  const { layers } = useMapStore();

  return (
    <>
      {/* {layers["at-risk-old-growth"].visible && <PrivateLandLayer />} */}
      {/* {layers["old-growth"].visible && <PrivateLandLayer />} */}
      {layers["private-land"].visible && <PrivateLandLayer />}
      {layers["state-boundary"].visible && <StateBoundaryLayer />}
    </>
  );
}
