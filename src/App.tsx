import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar.tsx';

function App() {
  return (
    <AppShell footer={{ height: 70 }}>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      <AppShell.Footer>
        <Navbar />
      </AppShell.Footer>
    </AppShell>
  );
}

export default App;
