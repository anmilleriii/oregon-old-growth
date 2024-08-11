import { LayerId, Layers, LayerStyles } from "./types";

export const layers: Layers = {
  "at-risk-old-growth": {
    title: "At Risk Old Growth (Old Growth located on Private Land in 2012)",
    visible: true,
    disableToggleVisibility: true,
  },
  "old-growth": {
    title: "Old Growth (2012)",
    visible: true,
    disableToggleVisibility: true,
  },
  "state-boundary": {
    title: "Oregon State Boundary (2024)",
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
  "state-boundary": {
    fill: {
      "fill-color": "#d4d4d4", // neutral-100
      "fill-opacity": 1,
    },
    line: {
      "line-color": "#d4d4d4",
      "line-opacity": 0.6,
      "line-width": 2,
    },
  },
};
