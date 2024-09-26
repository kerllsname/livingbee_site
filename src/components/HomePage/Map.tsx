import { Flex, Group, Text } from '@mantine/core';
import Map from 'react-map-gl';

function MainInfoSection() {
  return (
    <Flex
      p="sm"
      bd="2px solid var(--app-shell-border-color)"
      style={{ borderRadius: '10px' }}
      direction="column"
    >
      <Text size="xl">Общая информация</Text>
      <Group justify="space-between" align="flex-start" visibleFrom="sm">
        <Flex direction="column">
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
      <Group justify="center" align="center" hiddenFrom="sm">
        <Flex direction="column">
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
    </Flex>
  );
}

export default MainInfoSection;
