import React from "react";
import langText from '../assets/lang';
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";
dayjs.extend(utc);
dayjs.extend(duration);


interface Props {
  isOff: boolean
  timeInSec: number
  interval: number
  lang: "ar" | "en" | "fr"
  isSelected: boolean
  onSelect: (e: any) => any
}

export default function TimeSlot({
  isOff,
  timeInSec,
  interval,
  lang,
  isSelected,
  onSelect,
}: Props) {

   const isPureTime = dayjs
   .utc(dayjs.duration(timeInSec, "s").as("milliseconds"))
   .get('s') == 0;

   const langData = langText[lang]

  return (
    <React.Fragment>
      <div
        className={`sp-timeslot ${isOff ? "is-booked" : ''} ${
          isSelected && !isOff ? "selected" : ""
        } ${isPureTime ? 'with-tick' : ''}`}
        data-minutes={timeInSec}
      >
        <span className="sp-label">
          {isSelected && !isOff ? (
            <span className="sp-success-label">{langData.selectedTitle}</span>
          ) : null}
          {dayjs
            .utc(dayjs.duration(timeInSec, "s").as("milliseconds"))
            .format("mm:ss")}{" "}
          {timeInSec >= 720 ? `${langData.pm}` : `${langData.am}`} - {" "}
          {dayjs
            .utc(dayjs.duration(timeInSec + interval, "s").as("milliseconds"))
            .format("mm:ss")}{" "}
          {timeInSec >= 720 ? `${langData.pm}` : `${langData.am}`}
        </span>
        {isOff ? null : (
          <input
            type="radio"
            name="time"
            value={timeInSec}
            onChange={onSelect}
            className='radioBtn'
          />
        )}
        <span className="sp-tick">
          <strong>
            {
              isPureTime ? dayjs.utc(dayjs.duration(timeInSec, "s").as("milliseconds")).get('m') : null
            }
          </strong>
          {isPureTime ? (
            timeInSec >= 720 ? `${langData.pm}` : `${langData.am}`
          ): null}
        </span>
      </div>
    </React.Fragment>
  );
}