import { AppShell } from '@mantine/core';

import HomePageComponent from './components/HomePage/Home.tsx';
import Navbar from './components/Navbar.tsx';

function App() {
  return (
    <AppShell>
      <AppShell.Main>
        <HomePageComponent />
      </AppShell.Main>
      <AppShell.Footer>
        <Navbar />
      </AppShell.Footer>
    </AppShell>
  );
}

export default App;
