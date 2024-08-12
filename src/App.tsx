import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import NotFoundTitle from './components/404/NotFoundTitle.tsx';
import Navbar from './components/Navbar.tsx';

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <NotFoundTitle />
      <Navbar />
    </MantineProvider>
  );
}

export default App;
