"use client";

import { RiEyeCloseLine, RiEyeLine } from "@remixicon/react";
import { Button, Card, List, ListItem, Title } from "@tremor/react";
import { cx } from "../utils";
import { useMapStore } from "../store/store";
import { Layer, LayerId, LayerStyles } from "../store/types";
import { layerStyles } from "../store/layers";

export function LayersControl() {
  const { layers } = useMapStore();

  return (
    <Card>
      <Title>Map Layers</Title>
      <List className="flex-start flex flex-col gap-2">
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

function LayerControl({
  id,
  styles,
  layer,
}: {
  id: string;
  styles: LayerStyles;
  layer: Layer;
}) {
  const { toggleLayerVisibility } = useMapStore();

  let keyStyles: string;
  if (styles.raster) {
    keyStyles = cx(
      `bg-[${styles.raster["raster-color"]}]`,
      `bg-opacity-20`,
      `border-[${styles.raster["raster-color"]}]`,
      "h-4 w-4"
    );
  } else {
    keyStyles = cx(
      `bg-[${styles.fill?.["fill-color"]}]`,
      `bg-opacity-20`,
      `border-[${styles.line?.["line-color"]}]`,
      "h-4 w-4"
    );
  }

  return (
    <ListItem className="flex justify-start gap-4">
      <div className={keyStyles}></div>
      <label htmlFor={id}>{layer.title}</label>
      <Button
        icon={layer.visible ? RiEyeLine : RiEyeCloseLine}
        size="xs"
        variant="light"
        className="flex flex-grow justify-end"
        onClick={() => toggleLayerVisibility(id as LayerId)}
      />
    </ListItem>
  );
}
