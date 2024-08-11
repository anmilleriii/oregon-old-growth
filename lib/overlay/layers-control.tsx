"use client";

import { Card, List, ListItem, Title } from "@tremor/react";
import { layerStyles } from "../store/layers";
import { useMapStore } from "../store/store";
import { Layer, LayerId, LayerStyles } from "../store/types";
import { cx } from "../utils";

export function LayersControl() {
  const { layers } = useMapStore();

  return (
    <Card className="leading-loose flex flex-col gap-2 ">
      <Title className="text-neutral-600 font-semibold">Data</Title>
      <List className="">
        {Object.entries(layers)?.map(([id, layer]) => {
          return (
            <LayerControl
              key={id}
              id={id}
              layer={layer}
              styles={layerStyles[id as LayerId]}
            />
          );
        })}
      </List>
    </Card>
  );
}

const STYLE = {
  "at-risk-old-growth": "bg-[#f23a25]",
  "old-growth": "bg-[#49bdad]",
  "state-boundary":
    "bg-[#d4d4d4] bg-opacity-5 border-[#d4d4d4] border-2 border-opacity-60",
};

function LayerControl({
  id,
  layer,
}: {
  id: string;
  styles: LayerStyles;
  layer: Layer;
}) {
  const keyStyles = STYLE[id as LayerId];

  return (
    <ListItem className="flex justify-start gap-2">
      <div className={cx(keyStyles, "h-4 w-4")}></div>
      <label htmlFor={id}>{layer.title}</label>
    </ListItem>
  );
}
