import moment from 'moment/min/moment-with-locales';

import classes from './Date.module.css';

function DateComponent() {
  const momentLocale = moment().locale('ru');

  return <div className={classes.date}>{momentLocale.format('LL')}</div>;
}

export default DateComponent;
