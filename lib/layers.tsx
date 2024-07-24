import { useStore } from "zustand";
import { PrivateLandLayer } from "./map/layers/private-land-layer";
import { StateBoundaryLayer } from "./map/layers/state-boundary-layer";
import { useMapStore } from "./store";

export function Layers() {
  const { layers } = useMapStore();

  return (
    <>
      {layers["state-boundary"].visible && <StateBoundaryLayer />}
      {layers["private-land"].visible && <PrivateLandLayer />}
      {layers["old-growth"].visible && <PrivateLandLayer />}
      {layers["at-risk-old-growth"].visible && <PrivateLandLayer />}
    </>
  );
}
