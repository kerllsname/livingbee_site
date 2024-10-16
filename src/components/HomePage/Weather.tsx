import { Divider, Flex, Group, Image, Loader, Text } from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface WeatherData {
  data: {
    current: {
      temp_c: number;
      condition: {
        text: string;
        icon: string;
      };
    };
    forecast: {
      forecastday: {
        0: {
          day: {
            maxtemp_c: number;
            condition: {
              text: string;
              icon: string;
            };
          };
        };
        1: {
          day: {
            maxtemp_c: number;
            condition: {
              text: string;
              icon: string;
            };
          };
        };
        2: {
          day: {
            maxtemp_c: number;
            condition: {
              text: string;
              icon: string;
            };
          };
        };
      };
    };
  };
}

function WeatherSection() {
  const [weatherData, setWeatherData] = useState<WeatherData>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://api.weatherapi.com/v1/forecast.json?key=9432c4d1af3c4fa784b123337242209&q=53.946244,27.761158&days=3&aqi=no&alerts=no'
      );

      setWeatherData(result);
    };

    fetchData();
  }, []);
  return (
    <Flex
      p="sm"
      bd="2px solid var(--app-shell-border-color)"
      style={{ borderRadius: '10px' }}
      direction="column"
      mt="md"
    >
      <Text size="xl">Погода на пасеке</Text>
      <Divider size="xs" mt="xs" mb="xs" />
      <Group justify="center">
        <Flex direction="column" align="center" gap="xs">
          <Text>Сейчас</Text>
          <Image
            src={
              weatherData ? (
                weatherData.data.current.condition.icon
              ) : (
                <Loader color="blue" />
              )
            }
            w="30"
          />
          <Text>
            {weatherData ? (
              `${Math.floor(weatherData.data.current.temp_c)}°`
            ) : (
              <Loader color="blue" />
            )}
          </Text>
        </Flex>
        <Flex direction="column" align="center" gap="xs">
          <Text>Сегодня</Text>
          <Image
            src={
              weatherData ? (
                weatherData.data.forecast.forecastday[0].day.condition.icon
              ) : (
                <Loader color="blue" />
              )
            }
            w="30"
          />
          <Text>
            {weatherData ? (
              `${Math.floor(weatherData.data.forecast.forecastday[0].day.maxtemp_c)}°`
            ) : (
              <Loader color="blue" />
            )}
          </Text>
        </Flex>
        <Flex direction="column" align="center" gap="xs">
          <Text>Завтра</Text>
          <Image
            src={
              weatherData ? (
                weatherData.data.forecast.forecastday[1].day.condition.icon
              ) : (
                <Loader color="blue" />
              )
            }
            w="30"
          />
          <Text>
            {weatherData ? (
              `${Math.floor(weatherData.data.forecast.forecastday[1].day.maxtemp_c)}°`
            ) : (
              <Loader color="blue" />
            )}
          </Text>
        </Flex>
        <Flex direction="column" align="center" gap="xs">
          <Text>Послезавтра</Text>
          <Image
            src={
              weatherData ? (
                weatherData.data.forecast.forecastday[2].day.condition.icon
              ) : (
                <Loader color="blue" />
              )
            }
            w="30"
          />
          <Text>
            {weatherData ? (
              `${Math.floor(weatherData.data.forecast.forecastday[2].day.maxtemp_c)}°`
            ) : (
              <Loader color="blue" />
            )}
          </Text>
        </Flex>
      </Group>
    </Flex>
  );
}

export default WeatherSection;
