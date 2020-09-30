import React, { useState } from "react";
import './assets/style.css'
import TimeSlot from "./TimeSlot";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";

dayjs.extend(utc);
dayjs.extend(duration);

export default function TimeSlotPicker({
  interval,
  unavailableSlots,
  selected_date,
  from,
  to,
  lang,
  defaultSelectedTime,
  onSelectTime,
}) {

  // default stuff
  if(!lang){
    lang = 'en';
  }
  if(!unavailableSlots){
    unavailableSlots = [];
  }
  if(!selected_date){
    selected_date = new Date();
  }

  let [selectedTime, setSelectedTime] = useState(defaultSelectedTime || 0);

  // let formattedSelectedDate = `${dayjs(new Date(selected_date)).format("D")} ${dayjs(new Date(selected_date)).format("MMMM")}`;

  const handleSelection = (e) => {
    let selectedSlot = e.target.value;
    onSelectTime(Number(selectedSlot));
    setSelectedTime(selectedSlot);
  };

  //  generate time slots
  let timeSlots = [];
  const selected_date_is_today = dayjs(dayjs(new Date(selected_date)).format('YYYY-MM-DD')).isSame(dayjs().format('YYYY-MM-DD'));
  const curr_time = dayjs().format('HH:mm');
  const curr_time_s = dayjs.duration(`00:${curr_time}`).asSeconds(); // time in sec

  // if(!available_times.loading){
    // console.log('available_times.data: ', available_times)
    let startsAt = !from ? 480 : from;
    let endsAt = !to ? 1020 : to;
  
    for (let slot = startsAt; slot < endsAt - interval / 2; slot = slot + interval) {
      timeSlots.push(
        <TimeSlot
          interval={interval}
          is_off={(slot < curr_time_s && selected_date_is_today) || (unavailableSlots.indexOf(slot) !== -1)}
          time_s={slot}
          lang={lang}
          key={slot}
          is_selected={selectedTime == slot}
          onSelect={handleSelection}
        />
      );
    }
  // }

  return (
    <div className="p-5">
      <div className="time-selector-w d-block">
        {/* <div className="times-header font-bold text-gray-700">
          اختر الوقت الذي يناسبك لهذا التاريخ <span>{formattedSelectedDate}</span>
        </div> */}
        <div className="os-times-w">
          <div className="timeslots">
            {
              timeSlots.map((slot) => slot)
            }
          </div>
        </div>
      </div>
    </div>
  );
}
