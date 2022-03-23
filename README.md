
# ⌚ slotpicker, nice and simple react component time-slot picker

**please note that this package is using [dayjs](https://github.com/iamkun/dayjs), its more lightweight then moment and have the same exact syntax**

[See Demo](https://rc-slotpicker.netlify.app)


## Install

```bash
npm install slotpicker
```

## Usage

**Note:** the `from`, `to`, `defaultSelectedTime` and `unAvailableSlots` parameters **_follows the 24-hour clock_**, and if your time picker has 00:00, you should put it in the from param.

```javascript
import SlotPicker from 'slotpicker';

<SlotPicker
  // Required, interval between two slots in minutes, 30 = 30 min
  interval={30}
  // Required, when user selects a time slot, you will get the 'from' selected value
  onSelectTime={(from) => console.log(from)}
  // Optional, array of unavailable time slots
  unAvailableSlots={['10:00', '15:30']}
  // Optional, 8AM the start of the slots
  from={'08:00'}
  // Optional, 09:00PM the end of the slots
  to={'21:00'}
  // Optional, 01:00 PM, will be selected by default
  defaultSelectedTime={'13:00'}
  // Optional, selected slot color
  selectedSlotColor='#F09999'
  // Optional, language of the displayed text, default is english (en)
  lang='ar'
/>;
```

> the **selectedSlot** you will get in the **onSelectTime** prop, is the 'from' slot, if you want to display like the 'from' and 'to' selected slots its simple, the **_from = selectedSlot and to = selectedSlot + interval_**, use dayjs to manage it

## Props

```ts
interface SlotPickerProps {
   interval: number
   onSelectTime: (from: DayJs) => any
   unAvailableSlots?: Array<string>
   selectedDate?: Date
   from?: string
   to?: string
   selectedSlotColor?: string
   lang?: 'ar' | 'en'
   defaultSelectedTime?: string
}
```

## TODO

- [x] ~~Rewrite the lib to TypeScript~~
