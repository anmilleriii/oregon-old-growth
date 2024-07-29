import { Layer, Source } from "react-map-gl";
import { stateBoundaryGeojson } from "./state-boundary-data";
import { layerStyles } from "@/lib/store/layers";

export function StateBoundaryLayer() {
  return (
    <Source id="state-boundary" type="geojson" data={stateBoundaryGeojson}>
      <Layer
        slot="state-boundary"
        id="state-boundary-fill"
        type="fill"
        paint={layerStyles["state-boundary"].fill}
      />
      <Layer
        slot="state-boundary"
        id="state-boundary-outline"
        type="line"
        paint={layerStyles["state-boundary"].line}
      />
    </Source>
  );
}
