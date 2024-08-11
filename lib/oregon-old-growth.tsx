"use client";

import * as turf from "@turf/turf";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef } from "react";
import { Map, MapRef, NavigationControl, ScaleControl } from "react-map-gl";
import { mapConfig } from "./map/config";
import { Overlay } from "./overlay/overlay";
import { MapProvider } from "./store/store";
import state from "./map/data/oregon-boundary.json";

export function OregonOldGrowth() {
  const mapRef = useRef<MapRef | null>(null);

  return (
    <MapProvider>
      <div className="md:hidden text-center text-lg p-10">
        This map is intended for desktop only presently.
      </div>
      <div className="h-screen w-screen font-sans hidden md:block">
        <Overlay />
        <Map
          ref={mapRef}
          onLoad={(event) => {
            // @ts-expect-error
            mapRef.current = event.target;
            // @ts-expect-error
            const bounds = turf.bbox(state);
            // @ts-expect-error
            mapRef.current.fitBounds(bounds, {
              offset: [180, 0],
              padding: 150,
              duration: 1600,
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
        </Map>
      </div>
    </MapProvider>
  );
}
