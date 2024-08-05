import { RiExternalLinkLine } from "@remixicon/react";
import { Card, Icon, Text, Title } from "@tremor/react";

export function Info() {
  return (
    <Card className="leading-loose flex flex-col gap-2 ">
      <Title className="text-neutral-600 font-semibold">
        Monitoring Oregon&apos;s Last Remaining Old Growth Forests
      </Title>
      <Text>
        In 2024, less than 10% of Oregon&apos;s Old Growth remains (
        <a
          href="https://geohub.oregon.gov/datasets/db39d521d1424c9ea3632ab3a4c2a38e/explore"
          target="_blank"
          className="underline"
        >
          Oregon Wild
        </a>
        ).Of that, y (z%) is located on private land. Old Growth located on
        Private land is at greater risk of being harvested compared to public
        land. This map shows Old Growth in Oregon compared with private land,
        highlighting where the most At-Risk Old Growth exists in Oregon. While
        Old Growth can be lost to wildfires, harvesting continues to pose a
        threat.
      </Text>{" "}
      <div className="flex w-full justify-between">
        <a
          href="https://github.com/anmilleriii/oregon-old-growth"
          target="_blank"
          className="flex text-neutral-500 text-xs  items-center justify-center"
        >
          Source code
          <Icon icon={RiExternalLinkLine} color="neutral" size="xs" />
        </a>
        <a
          href="https://anmiller.com/about"
          target="_blank"
          className="flex text-neutral-500 text-xs  items-center justify-center"
        >
          A project by Al Miller
          <Icon icon={RiExternalLinkLine} color="neutral" size="xs" />
        </a>
      </div>
    </Card>
  );
}
