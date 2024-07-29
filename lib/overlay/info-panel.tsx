import { Card, List, ListItem, Text, Title } from "@tremor/react";

export function InfoPanel() {
  return (
    <Card>
      <Title>
        Monitoring Planned Timber Harvests of Oregon&apos;s Last Remaining Old
        Growth Forests (2024)
      </Title>
      <Text>
        This map seeks to answer how much of Oregon&apos;s Late Spectral forest
        classification (Old Growth) remains [1], and cross indexes planned
        timber harvest data from USFS [2] to highlight which Old Growth Forests
        are most at-risk of being logged.
      </Text>
      <Text>Click on a pixel to see who owns the plot.</Text>
      <Title>Disclaimers</Title>
      <Text>
        This information is provided as-is. All data is publically available. No
        gurantee of accurracy is implied.
      </Text>
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
