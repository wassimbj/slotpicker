import React, { useState } from 'react';
import SlotPicker from 'slotpicker';

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
            <span role="img" aria-label="emoji">
              ⌚
            </span>{' '}
            SlotPicker Demo
          </h1>
          <label className="text-center font-bold block mt-10">
            Select language
          </label>
          <select
            onChange={e => setLang(e.target.value)}
            className="mx-auto w-40 text-center block mt-1 bg-gray-200 p-1 border-2 border-gray-400 rounded-md appearance-none"
          >
            <option value="ar" selected={lang === 'ar'}>
              Arabic
            </option>
            <option value="en" selected={lang === 'en'}>
              English
            </option>
          </select>
          <div className="mt-10">
            <SlotPicker
              interval={30}
              from={'07:00'}
              to={'20:00'}
              unAvailableSlots={['12:00']}
              lang={lang}
              defaultSelectedTime="12:00"
              onSelectTime={s => setSelectedTime(s)}
            />
          </div>

          <div className="max-w-sm mx-auto bg-gray-800 text-gray-400 p-5 mt-3 rounded">
            <p className="block mb-2 font-semibold text-lg">
              <span className="font-light text-base">
                interval: {`${interval} min`}
              </span>
            </p>
            <code className="block">
              From:{' '}
              {!selectedTime ? 'Select one' : selectedTime.format('hh:mmA')}
              <br />
              To:{' '}
              {!selectedTime
                ? 'Select one'
                : selectedTime.add(interval, 'm').format('hh:mmA')}
            </code>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
