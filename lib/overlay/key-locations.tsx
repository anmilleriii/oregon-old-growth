import { Card, Text, Title } from "@tremor/react";
import Image from "next/image";

const locations = [
  {
    id: "Blue River",
    title: "Blue River",
    image: "blue-river.webp",
    lngLat: { lng: -122.33775704881478, lat: 44.13690017139575 },
  },
  {
    id: "East Portland",
    title: "East Portland",
    image: "east-portland.webp",
    lngLat: { lng: -122.40972310272869, lat: 45.34732896787909 },
  },
  {
    id: "Reedsport",
    title: "Reedsport",
    image: "reedsport.webp",
    lngLat: { lng: -123.98520765202719, lat: 43.71048226902141 },
  },
  {
    id: "Shady Cove",
    title: "Shady Cove",
    image: "shady-cove.webp",
    lngLat: { lng: -122.552474528152, lat: 42.73011023550052 },
  },
];

type KeyLocationsProps = {
  onClick?: ({ lng, lat }: { lng: number; lat: number }) => void;
};

export function KeyLocations({ onClick }: KeyLocationsProps) {
  const handleClick = (id: string) => {
    const location = locations.find((l) => l.id === id);
    if (!location?.lngLat) {
      return;
    }
    onClick?.(location.lngLat);
  };
  return (
    <Card className="leading-loose flex flex-col gap-2 ">
      <Title className="text-neutral-600 font-semibold">
        Key Old Growth Locations
      </Title>
      <Text>
        These locations represent substantial concentrations of Old Growth
        forests on private lands.
      </Text>
      <div className="flex flex-row flex-wrap gap-4">
        {locations.map((location) => (
          <div
            className="cursor-pointer"
            key={location.title}
            onClick={() => handleClick(location.id)}
          >
            <h3 className="text-neutral-600 text-sm font-semibold">
              {location.title}
            </h3>
            <div className="relative w-32 h-32">
              <Image
                fill
                style={{ objectFit: "cover" }}
                src={`/oregon/key-locations/${location.image}`}
                alt={`Image of ${location.title}`}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
