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
      "fill-color": "#E11D48", // red pixels
      "fill-opacity": 0.8,
    },
    line: {
      "line-color": "#E11D48",
      "line-opacity": 0.9,
      "line-width": 2,
    },
  },
  "old-growth": {
    raster: {
      "raster-opacity": 0.8,
    },
  },
  "private-land": {
    fill: {
      "fill-color": "#E11D48", //
      "fill-opacity": 0.8,
    },
    line: {
      "line-color": "#E11D48",
      "line-opacity": 0.9,
      "line-width": 2,
    },
  },
  "state-boundary": {
    fill: {
      "fill-color": "#E11D48",
      "fill-opacity": 0.8,
    },
    line: {
      "line-color": "#E11D48",
      "line-opacity": 0.9,
      "line-width": 2,
    },
  },
};
