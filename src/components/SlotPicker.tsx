import React, { useState } from 'react';
import '../assets/style.css';
import TimeSlot from './TimeSlot';
import { SlotPickerProps } from '../types';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';

dayjs.extend(utc);
dayjs.extend(duration);

export default function TimeSlotPicker({
  interval,
  unAvailableSlots,
  selectedDate,
  from,
  to,
  lang,
  selectedSlotColor,
  defaultSelectedTime,
  onSelectTime,
}: SlotPickerProps) {
  // default stuff
  lang = !lang ? 'en' : lang;
  unAvailableSlots =
    !unAvailableSlots || unAvailableSlots.length === 0 ? [] : unAvailableSlots;
  selectedDate = !selectedDate ? new Date() : selectedDate;
  selectedSlotColor = !selectedSlotColor ? '#000000' : selectedSlotColor;
  // following the 24-hour clock
  let startsAt = !from ? 8 : from; // 8AM
  let endsAt = !to ? 20 : to; // 8PM
  if (endsAt < startsAt) {
    throw new Error('Slotpicker: `to` must be greater then the `from` slot');
  } else if (endsAt > 25 || startsAt < 1) {
    throw new Error(
      'Slotpicker: Please follow the 24-hour clock when you put the params, e.g: 00:00 => 24:00, so put 24'
    );
  }

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
    let slot = startsAt * 60;
    slot < endsAt * 60; // this will ensure the end slot doesn't exceed the `to` param
    slot = slot + interval
  ) {
    timeSlots.push(
      <TimeSlot
        interval={interval}
        // the slot is off if it's less the then current time or already blacklisted(in unAvailableSlots)
        isOff={
          (slot < currTimeInSec && isSelectedDateToday) ||
          unAvailableSlots.indexOf(slot / 60) !== -1
        }
        selectedSlotColor={selectedSlotColor}
        slot={slot}
        lang={lang}
        key={slot}
        isSelected={selectedTime == slot * 60}
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
