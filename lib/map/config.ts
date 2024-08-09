// to calculate:
// import * as turf from "@turf/turf";
// import { stateBoundaryGeojson } from "../map/layers/state-boundary-data";
//
// const bounds = turf.bbox(stateBoundaryGeojson);
// const center = turf.center(stateBoundaryGeojson);
// const [longitude, latitude] = center.geometry.coordinates;

export const mapConfig = {
  initialViewState: {
    longitude: -121.98341677608257,
    latitude: 44.14206219001663,
    zoom: 6,
  },
  minZoom: 5,
  mapStyle: "mapbox://styles/anmiller314/clzn5x9t4005b01rahadu0251",
  accessToken:
    "pk.eyJ1IjoiYW5taWxsZXIzMTQiLCJhIjoiY2xyMDlidHV4MGF4OTJsbnh5d3ZrYjR5aCJ9.hPgeIjvqWjh4nH06YTsNcA",
  mapboxAccessToken:
    "pk.eyJ1IjoiYW5taWxsZXIzMTQiLCJhIjoiY2xyMDlidHV4MGF4OTJsbnh5d3ZrYjR5aCJ9.hPgeIjvqWjh4nH06YTsNcA",
};
