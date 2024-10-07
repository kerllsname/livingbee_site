import 'mapbox-gl/dist/mapbox-gl.css';

import { Container } from '@mantine/core';

import MainInfoSection from './MainInfo';
import WeatherSection from './Weather';

function HomePageComponent() {
  return (
    <Container p="md">
      <MainInfoSection />
      <WeatherSection />
    </Container>
  );
}

export default HomePageComponent;
