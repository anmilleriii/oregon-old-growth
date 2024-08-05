"use client";

import * as turf from "@turf/turf";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef } from "react";
import { Map, MapRef, NavigationControl, ScaleControl } from "react-map-gl";
import { mapConfig } from "./map/config";
import { Layers } from "./map/layers/layers";
import { stateBoundaryGeojson } from "./map/layers/state-boundary-data";
import { Overlay } from "./overlay/overlay";
import { MapProvider } from "./store/store";

export function OregonOldGrowth() {
  const mapRef = useRef<MapRef | null>(null);

  return (
    <MapProvider>
      <div className="lg:hidden text-center text-lg p-10">
        This map is intended for desktop only presently.
      </div>
      <div className="h-screen w-screen font-sans hidden lg:block">
        <Overlay />
        <Map
          ref={mapRef}
          onLoad={(event) => {
            // @ts-expect-error
            mapRef.current = event.target;
            const bounds = turf.bbox(stateBoundaryGeojson);
            // @ts-expect-error
            mapRef.current.fitBounds(bounds, {
              offset: [230, 0],
              padding: 150,
            });
          }}
          style={{
            width: "100vw",
            maxHeight: "100vh",
            overflowY: "hidden",
            motion: "",
          }}
          {...mapConfig}
        >
          <ScaleControl
            position="bottom-right"
            style={{
              backgroundColor: "#f5f5f5",
            }}
          />
          <NavigationControl
            position="bottom-right"
            style={{
              backgroundColor: "#f5f5f5",
            }}
          />
          <Layers />
        </Map>
      </div>
    </MapProvider>
  );
}
