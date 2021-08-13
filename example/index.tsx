import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SlotPicker from '../.';

const App = () => {
  return (
    <div style={{ padding: '3rem' }}>
      {['ar', 'en', 'fr'].map((lang: 'ar' | 'en' | 'fr') => (
        <>
          <br />
          <SlotPicker
            interval={20}
            lang={lang}
            onSelectTime={(s: number) => console.log(s)}
          />
        </>
      ))}
      <br />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
