import React from 'react';
import langText from '../lang';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import { TimeSlotProps } from '../types';

dayjs.extend(utc);
dayjs.extend(duration);

export default function TimeSlot({
  isOff,
  slot,
  interval,
  lang,
  selectedSlotColor,
  isSelected,
  onSelect,
}: TimeSlotProps) {
  const isOnTheHour = slot.get('m') == 0; // e.g: 01:00 is, while 01:05 is not ¯\_(ツ)_/¯
  const langData = langText[lang];
  const amOrPm = (t: Dayjs): string =>
    t.format('A').toLowerCase() === 'am' ? langData.am : langData.pm;
  return (
    <React.Fragment>
      <div
        onClick={() => onSelect(slot)}
        className={`sp-timeslot ${isOff ? 'is-booked' : ''} ${
          isSelected && !isOff ? 'selected' : ''
        } ${isOnTheHour && 'with-tick'}`}
        style={isSelected && !isOff ? { background: selectedSlotColor } : {}}
      >
        <span
          className="sp-label"
          style={isSelected && !isOff ? { background: selectedSlotColor } : {}}
        >
          {isSelected && !isOff ? (
            <span className="sp-success-label">{langData.selectedTitle}</span>
          ) : null}
          {`${slot.format('hh:mm')}${amOrPm(slot)} - `}
          {`${slot.add(interval, 'm').format('hh:mm')}${amOrPm(slot)}`}
        </span>
        {isOff ? null : (
          <button onClick={() => onSelect(slot)} className="radioBtn"></button>
        )}
        {isOnTheHour && (
          <span className="sp-tick">
            <strong>{`${slot.format('hh')}`}</strong>
            {amOrPm(slot)}
          </span>
        )}
      </div>
    </React.Fragment>
  );
}
