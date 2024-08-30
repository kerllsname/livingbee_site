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
import { useEffect, useRef, useState } from 'react';

import DateComponent from './Date';
// import classes from './Homepage.module.css';

interface ToDoTask {
  title: string;
  summary: string;
}

function HomepageComponent() {
  const [tasks, setTasks] = useState<ToDoTask[]>([]);
  const [modalOpened, { open: openModal, close: closeModal }] =
    useDisclosure(false);

  const taskTitle = useRef<HTMLInputElement>(null);
  const taskSummary = useRef<HTMLInputElement>(null);

  function createTask() {
    if (taskTitle.current && taskSummary.current) {
      const newTask = {
        title: taskTitle.current.value,
        summary: taskSummary.current.value,
      };
      const currentTasks = tasks;

      currentTasks.push(newTask);
      saveTasks(currentTasks);
      setTasks(currentTasks);
    }
  }

  // function deleteTask(index) {
  //   const clonedTasks = [...tasks];

  //   clonedTasks.splice(index, 1);

  //   setTasks(clonedTasks);

  //   saveTasks([...clonedTasks]);
  // }

  function loadTasks() {
    if (window.localStorage.length) {
      const storage: unknown = JSON.parse(
        localStorage.getItem('tasks') ?? '""'
      );
      const storageTasks = storage as ToDoTask[];
      setTasks(storageTasks);
    }
  }

  function saveTasks(newTasks: ToDoTask[]) {
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  useEffect(() => {
    loadTasks();
  }, []);

  // function createTask() {
  //   if (taskTitle.current) {
  //     const task: ToDoTask = {
  //       title: taskTitle.current.value,
  //       summary: taskSummary.current.value,
  //     };

  //     setTasks([
  //       ...tasks,
  //       {
  //         title: taskTitle.current.value,
  //         summary: taskSummary.current.value,
  //       },
  //     ]);

  //     saveTasks([
  //       ...tasks,
  //       {
  //         title: taskTitle.current.value,
  //         summary: taskSummary.current.value,
  //       },
  //     ]);
  //   }
  // }

  // // function deleteTask(index: number) {
  // //   const clonedTasks = [...tasks];

  // //   clonedTasks.splice(index, 1);

  // //   setTasks(clonedTasks);

  // //   saveTasks([...clonedTasks]);
  // // }

  // function loadTasks() {
  //   // const loadedTasks = localStorage.getItem('tasks');

  //   if (window.localStorage.length) {
  //     const storage: unknown = JSON.parse(
  //       localStorage.getItem('tasks') ?? '""'
  //     );
  //     const storageTasks = storage as ToDoTask[];

  //     setTasks(storageTasks);
  //   }
  // }

  // function saveTasks(savedTasks: ToDoTask[]) {
  //   localStorage.setItem('tasks', JSON.stringify(savedTasks));
  // }

  // useEffect(() => {
  //   loadTasks();
  // }, []);

  return (
    <>
      <Modal opened={modalOpened} onClose={closeModal} title="Новая задача">
        <TextInput
          mt="xs"
          ref={taskTitle}
          placeholder="Task Title"
          required
          label="Title"
        />
        <TextInput
          ref={taskSummary}
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
              createTask();
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
          {tasks.length > 0 ? (
            tasks.map((task, index) => {
              if (task.title) {
                return (
                  <Card withBorder key={index} mt="sm">
                    <Group>
                      <Text>{task.title}</Text>
                    </Group>
                    <Text size="md" mt="sm">
                      {task.summary
                        ? task.summary
                        : 'No summary was provided for this task'}
                    </Text>
                  </Card>
                );
              }
              return <></>;
            })
          ) : (
            <Text size="lg" mt="md" color="dimmed">
              You have no tasks
            </Text>
          )}
        </Container>
      </Container>
    </>
  );
}

export default HomepageComponent;
