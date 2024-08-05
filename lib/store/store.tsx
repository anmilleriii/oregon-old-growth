import { createStore, useStore } from "zustand";
import { immer } from "zustand/middleware/immer";

import { createContext, useContext, useRef } from "react";

import { layers } from "./layers";
import { LayerId, MapStore } from "./types";

const useCreateStore = createStore<MapStore>()(
  immer((set) => ({
    layers,
    toggleLayerVisibility: (id: LayerId) =>
      set((state) => {
        const layer = state.layers[id];
        if (!layer) return;
        layer.visible = !layer?.visible;
      }),
  }))
);

const MapContext = createContext<any>(null);

export function MapProvider({ children }: { children: React.ReactNode }) {
  const store = useRef(useCreateStore).current;

  return <MapContext.Provider value={store}>{children}</MapContext.Provider>;
}

function useMapContext() {
  const context = useContext(MapContext);
  if (!context) throw new Error("Missing MapContext.Provider in the tree");
  return context;
}

export function useMapStore() {
  const context = useMapContext();
  const store = useStore(context, (s) => s) as MapStore;
  return store;
}
