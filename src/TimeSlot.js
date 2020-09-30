import React from "react";
import langText from './lang';
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";
dayjs.extend(utc);
dayjs.extend(duration);

export default function TimeSlot({
  is_off,
  time_s,
  interval,
  lang,
  is_selected,
  onSelect,
}) {

   let is_pure_time = dayjs
   .utc(dayjs.duration(time_s, "s").as("milliseconds"))
   .get('s') == 0;

  return (
    <React.Fragment>
      <div
        className={`dp-timeslot ${is_off ? "is-booked" : ''} ${
          is_selected && !is_off ? "selected" : ""
        } ${is_pure_time ? 'with-tick' : ''}`}
        data-minutes={time_s}
      >
        <span className="dp-label">
          {is_selected && !is_off ? (
            <span className="dp-success-label">{langText[`${lang}`].selectedTitle}</span>
          ) : null}
          {dayjs
            .utc(dayjs.duration(time_s, "s").as("milliseconds"))
            .format("mm:ss")}{" "}
          {time_s >= 720 ? `${langText[`${lang}`].pm}` : `${langText[`${lang}`].am}`} - {" "}
          {dayjs
            .utc(dayjs.duration(time_s + interval, "s").as("milliseconds"))
            .format("mm:ss")}{" "}
          {time_s >= 720 ? `${langText[`${lang}`].pm}` : `${langText[`${lang}`].am}`}
        </span>
        {is_off ? null : (
          <input
            type="radio"
            name="time"
            value={time_s}
            onChange={onSelect}
            // className="absolute top-0 left-0 w-full h-full cursor-pointer z-10 opacity-0"
            className='radioBtn'
          />
        )}
        <span class="dp-tick">
          <strong>
            {
              is_pure_time ? dayjs.utc(dayjs.duration(time_s, "s").as("milliseconds")).get('m') : null
            }
          </strong>
          {is_pure_time ? (
            time_s >= 720 ? `${langText[`${lang}`].pm}` : `${langText[`${lang}`].am}`
          ): null}
        </span>
      </div>
    </React.Fragment>
  );
}
