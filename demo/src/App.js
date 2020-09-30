import React, { useState } from 'react';
import SlotPicker from 'slotpicker';
import secondsToTime from './utils/secToTime';
// import dayjs from 'dayjs'


function App() {

  const [selectedTime, setSelectedTime] = useState(0)
  const interval = 30;
  return (
    <div className='mx-auto container'>
      <div className='bg-white shadow-md p-5 rounded-lg mt-20'>
        <h1 className='mt-5 font-bold text-center text-2xl'>⌚ SlotPicker Demo </h1>
        <div className='mt-10'>
          <SlotPicker
            unavailableSlots={[780]}
            interval={interval}
            lang='en'
            selected_date={new Date()}
            onSelectTime={(val) => setSelectedTime(val)}
          />
        </div>

        <div className='max-w-lg mx-auto bg-gray-200 p-5 mt-3 rounded flex justify-center'>
          <code className='block'>
              FROM: {selectedTime} = {!selectedTime ? 'Nothing' : secondsToTime(selectedTime)}
              <br />
              TO: {!selectedTime ? 0 : selectedTime + interval} = {!selectedTime ? 'Nothing' : secondsToTime(selectedTime + interval)}
              <br />
              INTERVAL: {interval}
          </code>
        </div>
      </div>
    </div>
  );
}

export default App;
