import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SlotPicker from '../.';

const App = () => {
  return (
    <div style={{ padding: "3rem" }}>
      <SlotPicker
        interval={20}
        lang="en"
        onSelectTime={(s: number) => console.log(s)}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
