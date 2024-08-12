import { Card, List, ListItem, Text, Title } from "@tremor/react";

export function Disclaimers() {
  return (
    <Card id="disclaimers" className="leading-loose flex flex-col gap-2 ">
      <Title className="text-neutral-600 font-semibold">
        Disclaimers & Limitations
      </Title>
      <div>
        <Text>
          This information is furnished for educational purposes only. All work
          shown is free and available for reuse under MIT Licensce, and is
          derived from publically available data. This map should not be
          considered as authoritative but rather as a starting point for further
          understanding. Among other limitations:
        </Text>
        <List className="py-2 pl-2 *:py-1">
          <ListItem>Map resolution is at 30 meters or greater.</ListItem>
          <ListItem>Private land classification may be adjusted</ListItem>
          <ListItem>
            Some compression and simplification of layers is done for performant
            web rendering
          </ListItem>
          <ListItem>
            LEMMA GNN data used to derive old growth is from 2012, while the
            private land data is from 2024. Why the discrepancy? 2012 is the
            most recent dataset provided by LEMMA, aside from the 2017
            collection. This map could be improved through a new classification
            of Old Growth from 2024 satellite imagery.
          </ListItem>
          <ListItem>
            USFS timber harvesting on public lands was ommitted due to its minor
            overall contribution to timber harvests in Oregon.
          </ListItem>
        </List>
      </div>
    </Card>
  );
}
