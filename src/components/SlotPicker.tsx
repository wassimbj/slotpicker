import React, { useState } from 'react';
import '../assets/style.css';
import TimeSlot from './TimeSlot';
import { SlotPickerProps } from '../types';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
dayjs.extend(utc);
dayjs.extend(duration);

export default function TimeSlotPicker({
  interval,
  unAvailableSlots,
  from, // 09:00
  to, // 20:00
  lang,
  selectedSlotColor,
  defaultSelectedTime,
  onSelectTime,
}: SlotPickerProps) {
  // default stuff
  lang = !lang ? 'en' : lang;
  let disabledSlots: string[] = [];
  if (!!unAvailableSlots) {
    disabledSlots = unAvailableSlots;
  }

  selectedSlotColor = !selectedSlotColor ? '#028702' : selectedSlotColor;
  // following the 24-hour clock
  let startsAt = !from ? '08:00' : from; // 8AM
  let endsAt = !to ? '20:00' : to; // 8PM
  if (
    Number.parseInt(startsAt.split(':')[0]) < 0 ||
    Number.parseInt(startsAt.split(':')[0]) > 23 ||
    Number.parseInt(endsAt.split(':')[0]) < 0 ||
    Number.parseInt(endsAt.split(':')[0]) > 23 ||
    Number.parseInt(startsAt.split(':')[1]) < 0 ||
    Number.parseInt(startsAt.split(':')[1]) > 59 ||
    Number.parseInt(endsAt.split(':')[1]) < 0 ||
    Number.parseInt(endsAt.split(':')[1]) > 59
  ) {
    throw new Error(
      'SlotPicker Error: hours value is between 00-23, and minutes is between 00-59'
    );
  }

  let [selectedTime, setSelectedTime] = useState<{ data: string } | undefined>(
    { data: defaultSelectedTime || '' } || undefined
  );

  const handleSelection = (data: Dayjs) => {
    setSelectedTime({ data: data.format('HH:mm') });
    onSelectTime(data);
  };

  const currTime = dayjs().format('HH:mm');
  const timeSlots: Dayjs[] = [
    dayjs()
      .set('h', Number.parseInt(startsAt.split(':')[0]))
      .set('m', Number.parseInt(startsAt.split(':')[1])),
  ];

  // `i` is just to not cause an infinity loop, if sth went wrong
  let limit = 100;
  let timeAt: string = startsAt;
  while (
    dayjs(`01-01-2001 ${timeAt}`).isBefore(dayjs(`01-01-2001 ${endsAt}`)) &&
    limit > 0
  ) {
    let t = dayjs()
      .set('h', Number.parseInt(timeAt.split(':')[0]))
      .set('m', Number.parseInt(timeAt.split(':')[1]))
      .add(interval, 'm');
    timeSlots.push(t);

    timeAt = t.format('HH:mm');
    limit--;
  }

  return (
    <div className="p-5">
      <div className={`time-selector-w d-block ${lang == 'ar' && 'sp-rtl'}`}>
        <div className="os-times-w">
          <div className="timeslots">
            {timeSlots.map((slot, i) => (
              <TimeSlot
                interval={interval}
                // the slot is off if it's less then current time or already blacklisted(in unAvailableSlots)
                isOff={
                  slot.isBefore(currTime) ||
                  disabledSlots.indexOf(slot.format('HH:mm')) !== -1
                }
                selectedSlotColor={selectedSlotColor}
                slot={slot}
                lang={lang || 'en'}
                key={i}
                isSelected={selectedTime?.data == slot.format('HH:mm')}
                onSelect={handleSelection}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
