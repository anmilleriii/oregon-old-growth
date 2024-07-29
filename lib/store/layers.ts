import { LayerId, Layers, LayerStyles } from "./types";

export const layers: Layers = {
  "at-risk-old-growth": {
    title: "At Risk Old Growth (Old Growth located on Private Land)",
    visible: true,
  },
  "old-growth": {
    title: "Old Growth",
    visible: true,
  },
  "private-land": {
    title: "Private Land",
    visible: true,
  },
  "state-boundary": {
    title: "Oregon State Boundary",
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
      "raster-opacity": 0.9, // teal-700 #0f766e
    },
  },
  "private-land": {
    fill: {
      "fill-color": "#fcd34d", // amber-300
      "fill-opacity": 0.8,
    },
    line: {
      "line-color": "#fcd34d",
      "line-opacity": 0.9,
      "line-width": 2,
    },
  },
  "state-boundary": {
    fill: {
      "fill-color": "#d4d4d4", // neutral-300
      "fill-opacity": 0.05,
    },
    line: {
      "line-color": "#d4d4d4",
      "line-opacity": 0.6,
      "line-width": 2,
    },
  },
};
