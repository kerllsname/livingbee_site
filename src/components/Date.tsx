import moment from 'moment/min/moment-with-locales';

function DateComponent() {
  const momentLocale = moment().locale('ru');

  return <p>{momentLocale.format('LL')}</p>;
}

export default DateComponent;
