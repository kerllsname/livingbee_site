import { Container, Flex, Text } from '@mantine/core';

function ProfileComponent() {
  return (
    <Container p="md">
      <Flex justify="center" direction="column">
        <Flex
          mt="md"
          p="sm"
          bd="2px solid var(--app-shell-border-color)"
          style={{ borderRadius: '10px' }}
          direction="column"
        >
          <Text size="xl">Ваши данные</Text>
        </Flex>
      </Flex>
    </Container>
  );
}

export default ProfileComponent;
