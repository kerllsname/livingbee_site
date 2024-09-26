import { Center, Tabs } from '@mantine/core';
import {
  IconCalendar,
  IconHome,
  IconNotes,
  IconUserCircle,
} from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const { tabValue } = useParams();

  return (
    <Center h={70}>
      <Tabs
        variant="pills"
        defaultValue="home"
        value={tabValue}
        onChange={(value) => {
          value ? navigate(`/${value}`) : navigate('/error');
        }}
      >
        <Tabs.List>
          <Tabs.Tab value="calendar" visibleFrom="md">
            Календарь
          </Tabs.Tab>
          <Tabs.Tab value="home" visibleFrom="md">
            Главная
          </Tabs.Tab>
          <Tabs.Tab value="advice" visibleFrom="md">
            Справочник
          </Tabs.Tab>
          <Tabs.Tab value="profile" visibleFrom="md">
            Профиль
          </Tabs.Tab>
          <Tabs.Tab value="calendar" hiddenFrom="md">
            <IconCalendar />
          </Tabs.Tab>
          <Tabs.Tab value="home" hiddenFrom="md">
            <IconHome />
          </Tabs.Tab>
          <Tabs.Tab value="advice" hiddenFrom="md">
            <IconNotes />
          </Tabs.Tab>
          <Tabs.Tab value="profile" hiddenFrom="md">
            <IconUserCircle />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </Center>
  );
}

export default Navbar;
