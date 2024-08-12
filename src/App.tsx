import './App.css';
import { MantineProvider } from '@mantine/core';
import DateComponent from './components/Date';
import '@mantine/core/styles.css';

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="dark">
        <DateComponent />
      </MantineProvider>
    </>
  );
}

export default App;
