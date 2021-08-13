import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SlotPicker from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <SlotPicker interval={30} onSelectTime={(from: number) => from} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});