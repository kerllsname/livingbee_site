import { AppShell } from '@mantine/core';

import Homepage from './components/Homepage.tsx';
import Navbar from './components/Navbar.tsx';

function App() {
  return (
    <AppShell>
      <AppShell.Main>
        <Homepage />
      </AppShell.Main>
      <AppShell.Footer>
        <Navbar />
      </AppShell.Footer>
    </AppShell>
  );
}

export default App;
