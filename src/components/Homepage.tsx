import {
  Button,
  Card,
  Center,
  Container,
  Group,
  Modal,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import DateComponent from './Date';
// import classes from './Homepage.module.css';

function HomepageComponent() {
  const [modalOpened, { open: openModal, close: closeModal }] =
    useDisclosure(false);
  return (
    <>
      <Modal opened={modalOpened} onClose={closeModal} title="Новая задача">
        <TextInput
          mt="xs"
          // ref={taskTitle}
          placeholder="Task Title"
          required
          label="Title"
        />
        <TextInput
          // ref={taskSummary}
          mt="md"
          placeholder="Task Summary"
          label="Summary"
        />
        <Group mt="md" justify="space-between">
          <Button
            onClick={() => {
              closeModal();
            }}
            variant="subtle"
          >
            Закрыть
          </Button>
          <Button
            onClick={() => {
              // createTask();
              closeModal();
            }}
          >
            Create Task
          </Button>
        </Group>
      </Modal>
      <Container fluid m="xl">
        <Center>
          <Title order={2}>
            <DateComponent />
          </Title>
        </Center>
        <Container>
          <Group justify="space-between" mt="xl" mb="md">
            <Title order={3}>Задачи на сегодня</Title>
            <Button onClick={openModal}>Новая задача</Button>
          </Group>

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
    </>
  );
}

export default HomepageComponent;
