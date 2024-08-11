import { Card, List, ListItem, Text, Title } from "@tremor/react";

export function Methodology() {
  return (
    <Card className="leading-loose flex flex-col gap-2 ">
      <Title className="text-neutral-600 font-semibold">Methodology</Title>
      <List>
        <ListItem>
          <Text>
            <strong>Oregon State Boundary</strong> data is from derived from the{" "}
            <a
              href="https://geohub.oregon.gov/datasets/db39d521d1424c9ea3632ab3a4c2a38e/explore"
              target="_blank"
              className="underline"
            >
              Oregon Geographic Information Council (OGIC) GEOHub Data
            </a>
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            <strong>Old Growth</strong> data is from the Landscape Ecology,
            Modeling, Mapping & Analysis (LEMMA) group at Oregon State
            University. LEMMA provided a{" "}
            <a
              href="https://lemma.forestry.oregonstate.edu/data/structure-maps"
              target="_blank"
              className="underline"
            >
              2012 Gradient Nearest Neighbor (GNN) structure plot
            </a>{" "}
            with comprehensive forest information on the West Coast. From this
            data, the Old Growth raster tiles were created by a reclassification
            of the raster by pixels with the Late Successional Old Growth (LSOG)
            classification, which corresponds to a canvas cover greater than 10%
            and average tree diameterers. Pixels are at 30 meter resolution.
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            <strong>Private Land data</strong> is derived from the{" "}
            <a
              href="https://gis.blm.gov/orarcgis/rest/services/Land_Status/BLM_OR_Ownership/MapServer"
              target="_blank"
              className="underline"
            >
              BLM OR Ownership dataset
            </a>
            . Private lands are coarsely derived by selecting the inverse of
            city and county, state, tribal, and federal agency owned lands.
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            Lastly, <strong>At Risk Old Growth</strong> is considered as the
            overlap of Old Growth located within private land. Old Growth on
            private land can be considered to be at the greatest threat, as
            approximately 90% of timber harvests occur on private lands
            nationally, even considering that private land comprises only
            approximately 40% of land in Oregon (
            <a
              href="https://sgp.fas.org/crs/misc/R45688.pdf"
              target="_blank"
              className="underline"
            >
              Congressional Research Service
            </a>
            ).
          </Text>
        </ListItem>
      </List>
    </Card>
  );
}
