import React, { useState } from 'react';
import '../assets/style.css';
import TimeSlot from './TimeSlot';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';

dayjs.extend(utc);
dayjs.extend(duration);

interface Props {
  interval: number;
  unAvailableSlots?: Array<number>;
  selectedDate?: Date;
  from?: number;
  to?: number;
  lang?: "ar" | "en" | "fr";
  defaultSelectedTime?: number;
  onSelectTime: (selectedTime: number) => any;
}

export default function TimeSlotPicker({
  interval,
  unAvailableSlots,
  selectedDate,
  from,
  to,
  lang,
  defaultSelectedTime,
  onSelectTime,
}: Props) {
  // default stuff
  // 480 and 1020 are default stuff
  lang = !lang ? 'en' : lang;
  unAvailableSlots =
    !unAvailableSlots || unAvailableSlots.length == 0 ? [] : unAvailableSlots;
  selectedDate = !selectedDate ? new Date() : selectedDate;
  let startsAt = !from ? 480 : from;
  let endsAt = !to ? 1020 : to;
  // if (!lang) {
  //   lang = "en";
  // }
  // if (!unAvailableSlots) {
  //   unAvailableSlots = [];
  // }
  // if (!selectedDate) {
  //   selectedDate = new Date();
  // }

  let [selectedTime, setSelectedTime] = useState<number>(
    defaultSelectedTime || 0
  );

  const handleSelection = (e: any) => {
    let selectedSlot = e.target.value;
    onSelectTime(Number(selectedSlot));
    setSelectedTime(selectedSlot);
  };

  //  generate time slots
  let timeSlots = [];
  const isSelectedDateToday = dayjs(
    dayjs(new Date(selectedDate)).format('YYYY-MM-DD')
  ).isSame(dayjs().format('YYYY-MM-DD'));
  const currTime = dayjs().format('HH:mm');
  const currTimeInSec = dayjs.duration(`00:${currTime}`).asSeconds(); // time in sec

  for (
    let slot = startsAt;
    slot < endsAt - interval / 2;
    slot = slot + interval
  ) {
    timeSlots.push(
      <TimeSlot
        interval={interval}
        isOff={
          (slot < currTimeInSec && isSelectedDateToday) ||
          unAvailableSlots.indexOf(slot) !== -1
        }
        timeInSec={slot}
        lang={lang}
        key={slot}
        isSelected={selectedTime == slot}
        onSelect={handleSelection}
      />
    );
  }
  return (
    <div className="p-5">
      <div className={`time-selector-w d-block ${lang == 'ar' && 'sp-rtl'}`}>
        <div className="os-times-w">
          <div className="timeslots">{timeSlots.map(slot => slot)}</div>
        </div>
      </div>
    </div>
  );
}
