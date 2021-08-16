import React, { useState } from 'react';
import SlotPicker from 'slotpicker';
import secondsToTime from './utils/secToTime';

function App() {
  const [selectedTime, setSelectedTime] = useState(0);
  const [lang, setLang] = useState('en');
  const interval = 30;
  return (
    <>
      <a
        href="https://github.com/wassimbj/slotpicker"
        className="bg-black hover:text-gray-300 text-center text-white font-semibold block w-full p-2"
      >
        Github
      </a>

      <div className="mx-auto max-w-4xl">
        <div className="bg-white shadow p-5 rounded-lg mt-5">
          <h1 className="mt-5 font-bold text-center text-2xl">
            ⌚ SlotPicker Demo
          </h1>
          <label className="text-center font-bold block mt-10">
            Select language
          </label>
          <select
            onChange={(e) => setLang(e.target.value)}
            className="mx-auto w-40 text-center block mt-1 bg-gray-200 p-1 border-2 border-gray-400 rounded-md appearance-none"
          >
            <option value="ar" selected={lang === 'ar'}>
              Arabic
            </option>
            <option value="en" selected={lang === 'en'}>
              English
            </option>
            <option value="fr" selected={lang === 'fr'}>
              French
            </option>
          </select>
          <div className="mt-10">
            <SlotPicker
              unAvailableSlots={[8 * 60, 12 * 60, 14 * 60]}
              interval={interval}
              lang={lang}
              selected_date={new Date()}
              onSelectTime={(val) => setSelectedTime(val)}
            />
          </div>

          <div className="max-w-sm mx-auto bg-gray-800 text-gray-400 p-5 mt-3 rounded">
            <p className="block mb-2 font-semibold text-lg">
              Result
              <span className="font-light text-base"> (interval: {`${interval} min`}) </span>
            </p>
            <code className="block">
              From: {`${selectedTime}s`} = {' '}
              {!selectedTime ? ' Nothing' : secondsToTime(selectedTime)}
              <br />
              To: {`${!selectedTime ? 0 : selectedTime + interval}s`} = {' '}
              {!selectedTime
                ? ' Nothing'
                : secondsToTime(selectedTime + interval)}
            </code>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
