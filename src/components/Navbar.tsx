import { Center, Tabs } from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const { tabValue } = useParams();

  return (
    <Center m="sm">
      <Tabs
        variant="pills"
        defaultValue="home"
        value={tabValue}
        onChange={(value) => {
          value ? navigate(`/${value}`) : navigate('/error');
        }}
      >
        <Tabs.List>
          <Tabs.Tab value="calendar">Календарь</Tabs.Tab>
          <Tabs.Tab value="home">Главная</Tabs.Tab>
          <Tabs.Tab value="advice">Справочник</Tabs.Tab>
          <Tabs.Tab value="profile">Профиль</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </Center>
  );
}

export default Navbar;
