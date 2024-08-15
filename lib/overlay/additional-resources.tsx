import { Card, List, ListItem, Text, Title } from "@tremor/react";

export function AdditionalResources() {
  return (
    <Card className="leading-loose flex flex-col gap-2 ">
      <Title className="text-neutral-600 font-semibold">
        Additional Resources
      </Title>

      <div>
        <Text>
          Understanding is crucial to preservation; patchy data on &quot;Where
          Old Growth forests are&quot; has historically contributed to
          plausiable deniability for the harvest of Old Growth in Oregon, as
          recently as in 2019. While Old Growth locations are not perfectly
          understood or mapped in Oregon or across the country, there are a few
          adjacent efforts underway;
        </Text>
        <List>
          <ListItem>
            <Text>
              <a
                href="https://stand.earth/press-releases/stand-research-group-launches-forest-eye-satellite-tool-to-track-old-growth-logging/"
                className="underline font-bold"
              >
                Stand.Earth Forest Eye
              </a>{" "}
              is an innovative database for tracking logging transactions. A
              higher-fidelity, monthly-monitoring approach of Old Growth logging
              can be considered the gold standard for this project. The Forest
              Eye project is currently focused solely on British Columbia but
              could be expanded in the future.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <a
                href="https://oregonwild.org/nasa-maps-and-report-highlight-oregons-clearcutting-epidemic/"
                className="underline font-bold"
              >
                Oregon Wild
              </a>{" "}
              collaborates with NASA to quantify clearcutting along the Oregon
              Coast Range, and continues to work towards mapping old growth in
              Oregon.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <a
                href="https://www.globalforestwatch.org/map"
                className="underline font-bold"
              >
                Global Forest Watch
              </a>{" "}
              is an excellent resource for all forest types, loss and gain to
              all purposes including wildfire.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <a
                href="https://www.lucascometto.com/cascadia-oregon"
                className="underline font-bold"
              >
                Wilderness Photographer Lucas Cometto
              </a>{" "}
              has beautifully captured some of Oregons most famous old growth
              forests, including Arcadia Cedar Grove, Valley of the Giants, and
              more.
            </Text>
          </ListItem>
        </List>
      </div>
    </Card>
  );
}
