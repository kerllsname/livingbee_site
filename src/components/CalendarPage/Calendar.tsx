import 'dayjs/locale/ru';

import { Flex } from '@mantine/core';
import { Calendar } from '@mantine/dates';

function CalendarComponent() {
  return (
    <Flex justify="center" align="center">
      <Calendar size="lg" locale="ru" />
    </Flex>
  );
}

export default CalendarComponent;
