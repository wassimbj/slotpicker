import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';

dayjs.extend(utc);
dayjs.extend(duration);

export default function secondsToTime(s){
   let time = dayjs.utc(dayjs.duration(s, "s").as("milliseconds")).format("mm:ss");
   let ampm = s >= 720 ? "PM" : "AM";

   return `${time} ${ampm}`;
}
