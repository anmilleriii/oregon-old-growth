"use client";

import { RiEyeCloseLine, RiEyeLine } from "@remixicon/react";
import { Button, Card, List, ListItem, Title } from "@tremor/react";
import { cx } from "../utils";
import { useMapStore } from "../store/store";
import { Layer, LayerId } from "../store/types";

export function LayersControl() {
  const { layers } = useMapStore();

  return (
    <Card className="text-tremor-default col-start-1 row-auto m-8 h-fit w-96 grid-flow-row grid-flow-col rounded-lg bg-neutral-100 p-4 text-neutral-800 shadow-xl">
      <Title className="text-tremor-title font-medium">Layer</Title>
      <List className="flex-start flex flex-col gap-2">
        {Object.entries(layers)?.map(([id, layer]) => {
          return <LayerControl layer={layer} id={id} key={id} />;
        })}
      </List>
    </Card>
  );
}

function LayerControl({ layer, id }: { id: string; layer: Layer }) {
  const { toggleLayerVisibility } = useMapStore();

  return (
    <ListItem className="flex justify-start gap-4">
      <div
        className={cx(
          `bg-[${layer.style?.fill["fill-color"]}]`,
          `bg-opacity-20`,
          // `border-2`,
          `border-[${layer.style?.line["line-color"]}]`,
          "h-4 w-4"
        )}
      ></div>
      <label htmlFor={id}>{layer.title}</label>
      <Button
        icon={layer.visible ? RiEyeCloseLine : RiEyeLine}
        size="xs"
        className="flex flex-grow justify-end"
        onClick={() => toggleLayerVisibility(id as LayerId)}
      />
    </ListItem>
  );
}
