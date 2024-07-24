export type LayerId =
  | "at-risk-old-growth"
  | "old-growth"
  | "private-land"
  | "state-boundary";

export type Layer = {
  title: string;
  visible: boolean;
  style: { fill: any; line: any };
};

export type Layers = Record<LayerId, Layer>;

export type MapState = {
  layers: Layers;
};

export type MapActions = {
  toggleLayerVisibility: (id: LayerId) => void;
};

export type MapStore = MapState & MapActions;
