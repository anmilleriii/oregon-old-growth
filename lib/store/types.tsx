import {
  FillLayerSpecification,
  LineLayerSpecification,
  RasterLayerSpecification,
} from "mapbox-gl";

export type LayerId =
  | "at-risk-old-growth"
  | "old-growth"
  | "private-land"
  | "state-boundary";

export type LayerStyles = {
  fill?: FillLayerSpecification["paint"];
  line?: LineLayerSpecification["paint"];
  raster?: RasterLayerSpecification["paint"];
};

export type Layer = {
  title: string;
  visible: boolean;
};

export type Layers = Record<LayerId, Layer>;

export type MapState = {
  layers: Layers;
};

export type MapActions = {
  toggleLayerVisibility: (id: LayerId) => void;
};

export type MapStore = MapState & MapActions;
