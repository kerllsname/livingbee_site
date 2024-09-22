import { Flex, Group, Text } from '@mantine/core';
import Map from 'react-map-gl';

function MainInfoSection() {
  return (
    <Group
      p="sm"
      bd="2px solid var(--app-shell-border-color)"
      justify="space-between"
      style={{ borderRadius: '10px' }}
    >
      <Flex direction="column">
        <Text size="xl">Общая информация</Text>
        <Text c="dimmed">Пасека: Пчёлки</Text>
        <Text c="dimmed">Местоположение: Деревня Малявки</Text>
        <Text c="dimmed">Координаты: 53.84, 27.61</Text>
      </Flex>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoia2VybGwiLCJhIjoiY2t1azh6aWh1MHJiMzJ3cGVtbTN5dTdvMSJ9.8ZObRkwHgXkxx2xJY3BXUQ"
        initialViewState={{
          longitude: 27.617832,
          latitude: 53.846959,
          zoom: 15,
        }}
        style={{ width: 300, height: 300, borderRadius: 10 }}
        mapStyle="mapbox://styles/mapbox/standard"
      />
    </Group>
  );
}

export default MainInfoSection;
