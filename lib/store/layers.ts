import { LayerId, Layers, LayerStyles } from "./types";

export const layers: Layers = {
  "at-risk-old-growth": {
    title: "At Risk Old Growth (Old Growth located on Private Land in 2012)",
    visible: true,
  },
  "old-growth": {
    title: "Old Growth (2012)",
    visible: true,
  },
};

export const layerStyles: Record<LayerId, LayerStyles> = {
  "at-risk-old-growth": {
    fill: {
      "fill-color": "#dc2626", // red-600
      "fill-opacity": 0.8,
    },
    line: {
      "line-color": "#dc2626",
      "line-opacity": 0.9,
      "line-width": 2,
    },
  },
  "old-growth": {
    raster: {
      "raster-opacity": 1, // teal-700 #0f766e
    },
  },
};
