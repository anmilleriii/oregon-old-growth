import { Layer, Source } from "react-map-gl";

import { layerStyles } from "@/lib/store/layers";
import { mapConfig } from "../config";

const TILESET_ID = "anmiller314.46cfk8np";

/** raster including old growth and at-risk old growth */
export function OldGrowthLayer() {
  return (
    <Source
      id="old-growth"
      type="raster"
      tiles={[
        `https://api.mapbox.com/v4/anmiller314.46cfk8np/{z}/{x}/{y}.webp?access_token=${mapConfig.accessToken}`,
      ]}
      tileSize={256}
    >
      <Layer
        id="old-growth-fill"
        type="raster"
        paint={{
          ...layerStyles["old-growth"].raster,
        }}
      />
    </Source>
  );
}
