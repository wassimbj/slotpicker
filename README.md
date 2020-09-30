> ⌚ slotpicker, a nice and simple time slot picker, its actually a React component, i hope you find it useful

**please note that this package is using [dayjs](https://github.com/iamkun/dayjs), its more lightweight then moment and have the same exact syntax that momentjs is using**

the good news is that slotpicker is available in multiple langs, the bad news that are **only 3 langs**, **en, ar, and fr**, sorry i only know those 3, if you know another lang feel free to go to the lang.js file and follow the pattren there.

[See Demo](https://rc-slotpicker.netlify.app)

<br />

#### Install
```bash
npm install slotpicker
```
<hr />

#### Usage
```javascript
import SlotPicker from 'slotpicker';

<SlotPicker 
   interval={30}, // Required, interval between two slots in minutes, 30 = 30 min
   unavailableSlots={[]}, // Optional, array of unavailable time slots
   selected_date={new Date()}, // Optional, if you have a calendar with the time picker, put it here
   from={8*60}, // Optional, 8 = 08:00 AM, the start of the slots
   to={20*60}, // Optional,  20 = 08:00 PM, the end of the time
   lang={'ar'}, // Optional, language of the displayed text, default is english (en)
   defaultSelectedTime={13*60}, // 13 = 01:00 PM, will be selected by default
   onSelectTime={(selectedSlot) => alert(selectedSlot)}, // the most important prop here, 
   // when user selects a time slot, you will get the "from" selected value in secs
/>
```
>**the selectedSlot you will get in the onSelectTime prop**, is the "from" slot, if you want to display like the "from" and "to" selected slots its simple, the ***from = selectedSlot and to = selectedSlot + interval***, use dayjs or momentjs to convert the secs to a readable format

**if you are storing the slots in some db, store them as seconds like that, then get them and convert them as i said using dayjs or momentjs, im doing that in my current project and its so easy and smooth to work with**
