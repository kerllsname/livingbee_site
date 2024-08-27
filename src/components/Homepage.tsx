import { Card, Container, Center, Group, Text, Title } from '@mantine/core';

import DateComponent from './Date';
// import classes from './Homepage.module.css';

function HomepageComponent() {
  return (
    <Container fluid>
      <Center>
        <Title order={2}>
          <DateComponent />
        </Title>
      </Center>
      <Container>
        <Title order={3}>Задачи на сегодня</Title>
        <Card withBorder>
          <Group>
            <Text>Почистить улей</Text>
          </Group>
          <Text size="md" mt="sm">
            No summary was provided for this task
          </Text>
        </Card>
      </Container>
    </Container>
  );
}

export default HomepageComponent;
