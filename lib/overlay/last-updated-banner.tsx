import { Card, Title } from "@tremor/react";

export function LastUpdatedBanner() {
  return (
    <Card className="text-tremor-metric col-start-2 col-end-2 row-start-3 m-4 h-fit w-fit place-self-end justify-self-end rounded-lg bg-neutral-100 p-4 text-neutral-800 shadow-xl">
      <Title className="text-xs text-neutral-700">
        Last updated {new Date().toDateString()}
      </Title>
    </Card>
  );
}
