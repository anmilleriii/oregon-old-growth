import { Layer, Source } from "react-map-gl";
import { useMapStore } from "../../store/store";
import { privateLandGeojson } from "./private-land-data";
import { layerStyles } from "@/lib/store/layers";

export function PrivateLandLayer() {
  return (
    <Source id="private-land" type="geojson" data={privateLandGeojson}>
      <Layer
        id="private-land-outline"
        type="fill"
        paint={layerStyles["private-land"].fill}
      />
      <Layer
        id="private-land-outline"
        type="line"
        paint={layerStyles["private-land"].line}
      />
    </Source>
  );
}
