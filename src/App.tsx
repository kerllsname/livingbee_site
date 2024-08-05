import moment from 'moment/min/moment-with-locales';
import './App.css';

function App() {
  const momentLocale = moment().locale("ru");
  
  return (
    <>
      <h1>{momentLocale.format("LL")}</h1>
    </>
  );
}

export default App;
