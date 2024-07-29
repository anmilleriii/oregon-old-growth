import { Card, List, ListItem, Text, Title } from "@tremor/react";

export function KeyFacts() {
  return (
    <Card className="w-fit">
      <Title>Overview</Title>
      <div className="flex flex-col flex-wrap gap-4">
        <div>
          <Text className="text-tremor-metric text-teal-800">
            50,332,100 acres
          </Text>

          <Text className="text-tremor-default">
            of Old Growth in Oregon in 2012
          </Text>
        </div>
        <div>
          <Text className="text-tremor-metric text-rose-800">
            40,12,332 acres
          </Text>
          <span className="text-lg text-rose-800">(50%)</span>
          <Text className="text-tremor-label">
            of Old Growth at risk on private land in (2012)
          </Text>
        </div>
      </div>
      <Text>
        A project by{" "}
        <a
          href="https://anmiller.com/about"
          target="_blank"
          className="text-blue-700 underline"
        >
          Al Miller
        </a>
      </Text>
    </Card>
  );
}
