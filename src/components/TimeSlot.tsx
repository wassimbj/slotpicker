import React from 'react';
import langText from '../lang';
import dayjs from 'dayjs';
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
  const _24HourClockTime = slot * 60;
  const isPureTime =
    dayjs
      .utc(dayjs.duration(_24HourClockTime, 's').as('milliseconds'))
      .get('m') == 0; // e.g: 01:00 is, while 01:25 is not pure time ¯\_(ツ)_/¯
  const langData = langText[lang];
  const secToPrettyTime = (sec: number): string =>
    dayjs.utc(dayjs.duration(sec, 's').as('milliseconds')).format('hh:mm');

  const amOrPm = (t: number): string =>
    t >= 12 * 60 * 60 && t < 24 * 60 * 60 ? `${langData.pm}` : `${langData.am}`;

  return (
    <React.Fragment>
      <div
        className={`sp-timeslot ${isOff ? 'is-booked' : ''} ${
          isSelected && !isOff ? 'selected' : ''
        } ${isPureTime ? 'with-tick' : 'with-tick'}`}
        data-minutes={_24HourClockTime}
        style={isSelected && !isOff ? { background: selectedSlotColor } : {}}
      >
        <span
          className="sp-label"
          style={isSelected && !isOff ? { background: selectedSlotColor } : {}}
        >
          {isSelected && !isOff ? (
            <span className="sp-success-label">{langData.selectedTitle}</span>
          ) : null}
          {`${secToPrettyTime(_24HourClockTime)}${amOrPm(
            _24HourClockTime
          )} - ${secToPrettyTime(_24HourClockTime + interval * 60)}${amOrPm(
            _24HourClockTime + interval * 60
          )}`}
        </span>
        {isOff ? null : (
          <input
            type="radio"
            name="time"
            value={_24HourClockTime}
            onChange={onSelect}
            className="radioBtn"
          />
        )}
        {/* <span className="sp-tick">
          <strong>
            {isPureTime
              ? dayjs
                  .utc(dayjs.duration(_24HourClockTime, 's').as('milliseconds'))
                  .format('hh')
              : null}
          </strong>
          {isPureTime ? amOrPm(_24HourClockTime) : null}
        </span> */}
        <span className="sp-tick">
          <strong>
            {dayjs
              .utc(dayjs.duration(_24HourClockTime, 's').as('milliseconds'))
              .format('hh')}
          </strong>
          {amOrPm(_24HourClockTime)}
        </span>
      </div>
    </React.Fragment>
  );
}
