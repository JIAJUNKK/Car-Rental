import React from 'react';
import { View, Text} from 'react-native';
import { useState } from 'react';

import dayjs from 'dayjs';
import DateTimePicker from 'react-native-ui-datepicker';

import { calendarStyles } from './styles';

const BookingCalendar = () => {
  const [date, setDate] = useState(dayjs());

  return (
    <View style={calendarStyles.container}>
      <DateTimePicker
        mode="single"
        date={date}
        onChange={(params) => setDate(params.date)}
      />
    </View>
  )
}
export default BookingCalendar
