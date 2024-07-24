export type LayerId =
  | "at-risk-old-growth"
  | "old-growth"
  | "private-land"
  | "state-boundary";

export type LayerStyles = {
  fill?: mapboxgl.FillPaint;
  line?: mapboxgl.LinePaint;
  raster?: mapboxgl.RasterPaint;
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
