import { Layer, Source } from "react-map-gl";

import { layerStyles } from "@/lib/store/layers";

const AT_RISK_OLD_GROWTH_TILES = "https://abc.com";

export function AtRiskOldGrowthLayer() {
  return (
    <Source
      id="at-risk-old-growth"
      type="raster"
      tiles={[AT_RISK_OLD_GROWTH_TILES]}
    >
      <Layer
        id="at-risk-old-growth-fill"
        type="raster"
        paint={{
          ...layerStyles["at-risk-old-growth"].raster,
        }}
      />
    </Source>
  );
}
