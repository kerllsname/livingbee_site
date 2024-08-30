import { AppShell } from '@mantine/core';

import Homepage from './components/Homepage.tsx';
import Navbar from './components/Navbar.tsx';

function App() {
  return (
    <AppShell layout="alt" pb="xl">
      <AppShell.Main pb="xl">
        <Homepage />
      </AppShell.Main>
      <AppShell.Footer>
        <Navbar />
      </AppShell.Footer>
    </AppShell>
  );
}

export default App;
