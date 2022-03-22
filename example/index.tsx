import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SlotPicker from '../.';

const App = () => {
  return (
    <div style={{ padding: '3rem' }}>
      {['ar', 'en'].map((lang: 'ar' | 'en') => (
        <>
          <br />
          <SlotPicker
            interval={60}
            from={7.41}
            to={23}
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
