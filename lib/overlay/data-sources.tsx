import { Card, List, ListItem, Title } from "@tremor/react";

const dataSources = [
  {
    title: "ETM+ ",
    href: "https://databasin.org/maps/4a4aa521df39482fb0645b6ccc5a6715/",
  },
  {
    title: "GeoHub Oregon",
    href: "https://databasin.org/maps/4a4aa521df39482fb0645b6ccc5a6715/",
  },
  {
    title: "Oregon LEMMA",
    href: "https://lemma.forestry.oregonstate.edu/data/structure-maps",
  },
  {
    title: "USFS Timber Harvest Data",
    href: "https://databasin.org/maps/4a4aa521df39482fb0645b6ccc5a6715/",
    details: "",
    // https://data-usfs.hub.arcgis.com/datasets/usfs::timber-harvests-feature-layer/about
  },
];

export function DataSources() {
  return (
    <Card>
      <Title>Data Sources</Title>
      <List>
        {dataSources.map((source, index) => (
          <ListItem key={source.title}>
            {source.title}
            <a href={source.href}>[{index + 1}]</a>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
