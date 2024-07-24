import { Card, List, ListItem, Text, Title } from "@tremor/react";
import { DataSources } from "./data-sources";
import { FAQ } from "./faq";

export function InfoPanel() {
  return (
    <Card
      className="text-tremor-default col-start-1 row-start-1 row-end-3 m-8 h-fit w-[450px] rounded-lg bg-neutral-100 p-4 text-neutral-800 shadow-xl"
      style={{ fontFamily: "sans-serif" }}
    >
      <Title className="text-tremor-title font-semibold">
        Monitoring Planned Timber Harvests of Oregon&apos;s Last Remaining Old
        Growth Forests (2024)
      </Title>
      <Text className="text-tremor-default">
        This map seeks to answer how much of Oregon&apos;s Late Spectral forest
        classification (Old Growth) remains [1], and cross indexes planned
        timber harvest data from USFS [2] to highlight which Old Growth Forests
        are most at-risk of being logged.
      </Text>
      <List>
        <ListItem>Old Growth Forest</ListItem>
        <ListItem>Logging year</ListItem>
      </List>
      <FAQ />
      <DataSources />
      <p className="tremor-text">
        A project by{" "}
        <a
          href="https://anmiller.com/about"
          target="_blank"
          className="text-blue-700 underline"
        >
          Al Miller
        </a>
      </p>
    </Card>
  );
}
