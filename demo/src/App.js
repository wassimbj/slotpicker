import React, { useState } from 'react';
import SlotPicker from 'slotpicker';
import secondsToTime from './utils/secToTime';


function App() {
  const [selectedTime, setSelectedTime] = useState(0)
  const [lang, setLang] = useState('en')
  const interval = 30;
  return (
    <div className='mx-auto container'>
      <div className='bg-white shadow-md p-5 rounded-lg mt-20'>
        <h1 className='mt-5 font-bold text-center text-2xl'>⌚ SlotPicker Demo </h1>
        <label className="text-center font-bold block mt-10">Select language</label>
        <select onChange={(e) => setLang(e.target.value)} className="mx-auto w-40 text-center block mt-1 bg-gray-200 p-1 border-2 border-gray-400 rounded-md appearance-none">
          <option value="ar" selected={lang === "ar"}>Arabic</option>
          <option value="en" selected={lang === "en"}>English</option>
          <option value="fr" selected={lang === "fr"}>French</option>
        </select>
        <div className='mt-10'>
          <SlotPicker
            unAvailableSlots={[8*60, 12*60, 14*60]}
            interval={interval}
            lang={lang}
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
