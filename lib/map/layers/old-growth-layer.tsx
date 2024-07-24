import { Layer, Source } from "react-map-gl";

import { layerStyles } from "@/lib/store/layers";

const OLD_GROWTH_TILES = "https://abc.com";

export function OldGrowthLayer() {
  return (
    <Source id="old-growth" type="raster" tiles={[OLD_GROWTH_TILES]}>
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
