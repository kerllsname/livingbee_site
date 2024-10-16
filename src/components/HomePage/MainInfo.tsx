import { Divider, Flex, Text } from '@mantine/core';

import MapComponent from './Map';

function MainInfoSection() {
  return (
    <Flex
      p="sm"
      bd="2px solid var(--app-shell-border-color)"
      style={{ borderRadius: '10px' }}
      direction="column"
    >
      <Text size="xl">Общая информация</Text>
      <Divider size="xs" mt="xs" mb="xs" />
      <MapComponent
        mapJustify="space-between"
        mapAlign="flex-start"
        mapVisible="sm"
        mapHidden=""
        mapLong={27.761158}
        mapLat={53.946244}
      />
      <MapComponent
        mapJustify="center"
        mapAlign="center"
        mapVisible=""
        mapHidden="sm"
        mapLong={27.761158}
        mapLat={53.946244}
      />
    </Flex>
  );
}

export default MainInfoSection;
