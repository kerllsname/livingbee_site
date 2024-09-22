import { Group, Image, Text } from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface WeatherData {
  data: {
    current: {
      temp_c: string;
      condition: {
        text: string;
        icon: string;
      };
    };
  };
}

function WeatherSection() {
  const [weatherData, setWeatherData] = useState<WeatherData>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://api.weatherapi.com/v1/current.json?key=9432c4d1af3c4fa784b123337242209&q=53.84,27.61&aqi=no'
      );

      setWeatherData(result);
    };

    fetchData();
  }, []);
  return (
    <Group
      p="sm"
      bd="2px solid var(--app-shell-border-color)"
      mt="sm"
      mb="sm"
      style={{ borderRadius: '10px' }}
    >
      <Text size="xl">Погода на пасеке</Text>
      <Group gap="xs">
        {' '}
        <Image
          src={weatherData ? weatherData.data.current.condition.icon : ''}
          w="30"
        />
        <Text>{weatherData ? weatherData.data.current.temp_c : ''}</Text>
      </Group>
    </Group>
  );
}

export default WeatherSection;
