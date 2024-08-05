import { Card, Icon, List, ListItem, Text, Title } from "@tremor/react";
import {
  RiExternalLinkLine,
  RiEyeCloseLine,
  RiEyeLine,
  RiLink,
} from "@remixicon/react";
export function InfoPanel() {
  return (
    <>
      <Card className="leading-loose flex flex-col gap-2 ">
        <Title>
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
        </Text>
      </Card>
      <Card className="leading-loose flex flex-col gap-2 ">
        <Title>Methodology</Title>
        <List>
          <ListItem>
            <Text>
              <strong>Oregon State Boundary</strong> data is from derived from
              the{" "}
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
              University. LEMMA provided a
              <a
                href="https://lemma.forestry.oregonstate.edu/data/structure-maps"
                target="_blank"
                className="underline"
              >
                2012 Gradient Nearest Neighbor (GNN) structure plot
              </a>
              with comprehensive forest information on the West Coast. From this
              data, the Old Growth raster tiles were created by a
              reclassification of the raster by pixels with the Late
              Successional Old Growth (LSOG) classification, which corresponds
              to a canvas cover greater than 10% and average tree diameterers.
              Pixels are at 30 meter resolution.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <strong>Private Land data</strong> is derived from the
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
      <Card className="leading-loose flex flex-col gap-2 ">
        <Title>Additional Resources</Title>
        <Text>
          Monitoring is crucial to preservation; loose data on "Where Old Growth
          forests are" has historically contributed to plausiable deniability
          for the harvest of Old Growth in Oregon, as recently as in 2019. While
          Old Growth locations are not perfectly understood or mapped in Oregon
          or across the country, there are a few adjacent or direct efforts
          underway to do so.
          https://oregonwild.org/nasa-maps-and-report-highlight-oregons-clearcutting-epidemic/
          and Stand.Earth
          https://stand.earth/press-releases/stand-research-group-launches-forest-eye-satellite-tool-to-track-old-growth-logging/
          monitors. Global Forest Watch (GFW) is likely the most comprehensive
          resource to learn more about global forest cover{" "}
          <a href="https://www.globalforestwatch.org/map">GWF</a>.`,
          <ul className="list-disc list-inside">
            <li>Resolution of 30 meters or greater.</li>
            <li>Private land classification may be adjusted</li>
            <li>
              Some compression and simplification of layers is done for
              performant web rendering
            </li>
            <li>
              LEMMA GNN data used to derive old growth is from 2012, while the
              private land data is from 2024.
            </li>
            <li>
              USFS timber harvesting on public lands was ommitted due to its
              minor overall contribution to timber harvests in Oregon.
            </li>
          </ul>
        </Text>
      </Card>
      <Card className="leading-loose flex flex-col gap-2 ">
        <Title>Disclaimers</Title>
        <Text>
          This information is furnished for educational purposes only. All work
          shown is free and available for reuse under MIT Licensce, and is
          derived from publically available data. This map should not be
          considered as authoritative but rather as a starting point for further
          understanding. Among other limitations, this map
          <ul className="list-disc list-inside">
            <li>Resolution of 30 meters or greater.</li>
            <li>Private land classification may be adjusted</li>
            <li>
              Some compression and simplification of layers is done for
              performant web rendering
            </li>
            <li>
              LEMMA GNN data used to derive old growth is from 2012, while the
              private land data is from 2024.
            </li>
            <li>
              USFS timber harvesting on public lands was ommitted due to its
              minor overall contribution to timber harvests in Oregon.
            </li>
          </ul>
        </Text>
        <div className="flex w-full justify-between">
          <a
            href="https://github.com/anmilleriii/oregon-old-growth"
            target="_blank"
            className="flex text-neutral-600 text-xs  items-center justify-center"
          >
            Source code and methodology
            <Icon icon={RiExternalLinkLine} color="neutral" size="xs" />
          </a>
          <a
            href="https://anmiller.com/about"
            target="_blank"
            className="flex text-neutral-600 text-xs  items-center justify-center"
          >
            A project by Al Miller
            <Icon icon={RiExternalLinkLine} color="neutral" size="xs" />
          </a>
        </div>
      </Card>
    </>
  );
}
