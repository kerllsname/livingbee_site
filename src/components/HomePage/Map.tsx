import { Flex, Group, Text } from '@mantine/core';
import { IconMapPinFilled } from '@tabler/icons-react';
import Map, { Marker } from 'react-map-gl';

function MapComponent(props: {
  mapJustify: string;
  mapAlign: string;
  mapVisible: string;
  mapHidden: string;
  mapLong: number;
  mapLat: number;
}) {
  return (
    <Group
      justify={props.mapJustify}
      align={props.mapAlign}
      visibleFrom={props.mapVisible}
      hiddenFrom={props.mapHidden}
    >
      <Flex direction="column">
        <Text c="dimmed">Пасека: Пчёлки</Text>
        <Text c="dimmed">Местоположение: Деревня Малявки</Text>
        <Text c="dimmed">
          Координаты: {props.mapLat}, {props.mapLong}
        </Text>
      </Flex>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoia2VybGwiLCJhIjoiY2t1azh6aWh1MHJiMzJ3cGVtbTN5dTdvMSJ9.8ZObRkwHgXkxx2xJY3BXUQ"
        initialViewState={{
          longitude: props.mapLong,
          latitude: props.mapLat,
          zoom: 15,
        }}
        style={{ width: 300, height: 300, borderRadius: 10 }}
        mapStyle="mapbox://styles/mapbox/outdoors-v12"
      >
        <Marker
          longitude={props.mapLong}
          latitude={props.mapLat}
          anchor="bottom"
        >
          <IconMapPinFilled color="red" />
        </Marker>
      </Map>
    </Group>
  );
}

export default MapComponent;
