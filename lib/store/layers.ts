import { Layers } from "./types";

export const layers: Layers = {
  "at-risk-old-growth": {
    style: {
      fill: {
        // red
        "fill-color": "#E11D48",
        "fill-opacity": 0.8,
      },
      line: {
        "line-color": "#E11D48",
        "line-opacity": 0.9,
        "line-width": 2,
      },
    },
    title: "At Risk Old Growth (Old Growth located on Private Land)",
    visible: true,
  },
  "private-land": {
    style: {
      fill: {
        // orange
        "fill-color": "#f59e0b",
        "fill-opacity": 0.8,
      },
      line: {
        "line-color": "#f59e0b",
        "line-opacity": 0.9,
        "line-width": 2,
      },
    },
    title: "Private Land",
    visible: true,
  },
  "state-boundary": {
    style: {
      fill: {
        "fill-color": "#d4d4d4",
        "fill-opacity": 0.2,
      },
      line: {
        "line-color": "#d4d4d4",
        "line-opacity": 0.4,
        "line-width": 2,
      },
    },
    title: "Oregon State Boundary",
    visible: true,
  },
  "gfw-loss-2001-through-2022": {
    title: "Global Forest Watch (GFW) Loss (2001 - 2022)",
    visible: true,
  },
  "old-growth": {
    style: {
      fill: {
        "fill-color": "#ef4444",
        "fill-opacity": 0.1,
      },
      line: {
        "line-color": "#ef4444",
        "line-opacity": 0.4,
        "line-width": 2,
      },
    },
    title: "Old Growth (Late Spectral Forest)",
    visible: true,
  },
  "planned-timber-harvests": {
    style: {
      fill: {
        "fill-color": "#ef4444",
        "fill-opacity": 0.1,
      },
      line: {
        "line-color": "#ef4444",
        "line-opacity": 0.4,
        "line-width": 2,
      },
    },
    title: "Planned Timber Harvests (July 2024)",
    visible: true,
  },
  "historic-timber-harvests": {
    style: {
      fill: {
        "fill-color": "#7f1d1d",
        "fill-opacity": 0.1,
      },
      line: {
        "line-color": "#7f1d1d",
        "line-opacity": 0.4,
        "line-width": 2,
      },
    },
    title: "Historic Timber Harvests (1950 - 2024)",
    visible: true,
  },
  "intersection-of-historic-harvest-in-old-growth": {
    style: {
      fill: {
        "fill-color": "#3b82f6",
        "fill-opacity": 0.1,
      },
      line: {
        "line-color": "#3b82f6",
        "line-opacity": 0.4,
        "line-width": 2,
      },
    },
    title: "Intersection of Historic Harvest of Old Growth (1950 - 2024)",
    visible: true,
  },
  "intersection-of-planned-harvest-in-old-growth": {
    style: {
      fill: {
        "fill-color": "#3b82f6",
        "fill-opacity": 0.1,
      },
      line: {
        "line-color": "#3b82f6",
        "line-opacity": 0.4,
        "line-width": 2,
      },
    },
    title: "Intersection of Planned Harvest of Old Growth (July 2024 - 2026)",
    visible: true,
  },
};
