"use client";

import * as turf from "@turf/turf";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef } from "react";
import { Map, MapRef, NavigationControl, ScaleControl } from "react-map-gl";
import { mapConfig } from "./map/config";
import { Overlay } from "./overlay/overlay";
import { MapProvider } from "./store/store";
import state from "./map/data/oregon-boundary.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "Monitoring At-Risk Old Growth Forests in Oregon",
    description:
      "Where are the Old Growth forests in Oregon, and where are they most at risk of timber harvest?",
    authors: "Al Miller",
    publishedTime: "2024-07-22T10:00:00Z",
  },
  metadataBase: new URL("https://oregon.anmiller.com"),
  title: "Monitoring At-Risk Old Growth Forests in Oregon",
  description:
    "Where are the Old Growth forests in Oregon, and where are they most at risk of timber harvest?",
};

export function OregonOldGrowth() {
  const mapRef = useRef<MapRef | null>(null);
  const handleClickKeyLocation = ({
    lng,
    lat,
  }: {
    lng: number;
    lat: number;
  }) => {
    mapRef.current?.flyTo({
      center: [lng, lat],
      essential: true,
      zoom: 10,
    });
  };

  return (
    <MapProvider>
      <div className="md:hidden text-center text-lg p-10">
        This map is intended for desktop only presently.
      </div>
      <div className="h-screen w-screen font-sans hidden md:block">
        <Overlay onClickKeyLocation={handleClickKeyLocation} />
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

            mapRef.current?.on("click", (e) => console.log(e.lngLat));
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
