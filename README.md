> ⌚ slotpicker, a nice and simple time slot picker, its actually a React component, i hope you find it useful

**please note that this package is using [dayjs](https://github.com/iamkun/dayjs), its more lightweight then moment and have the same exact syntax that momentjs is using**

*Available in three langs: **ar, en and fr**, if you know any other, you can edit the lang.js file* 

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
   // Required, interval between two slots in minutes, 30 = 30 min
   interval={30} 
   // Optional, array of unavailable time slots
   unAvailableSlots={[]}
   // Optional, if you have a calendar with the time picker, put it here
   selectedDate={new Date()}
   // Optional, 8 = 08:00 AM, the start of the slots
   from={8*60}
   // Optional,  20 = 08:00 PM, the end of the time
   to={20*60}
   // Optional, language of the displayed text, default is english (en)
   lang={'ar'}
   // 13 = 01:00 PM, will be selected by default
   defaultSelectedTime={13*60}
   // the most important prop here, 
   // when user selects a time slot, you will get the "from" selected value in secs
   onSelectTime={(selectedSlot) => alert(selectedSlot)}
/>
```
>**the selectedSlot you will get in the onSelectTime prop**, is the "from" slot, if you want to display like the "from" and "to" selected slots its simple, the ***from = selectedSlot and to = selectedSlot + interval***, use dayjs or momentjs to convert the secs to a readable format

**if you are storing the slots in some db, store them as seconds like that, then get them and convert them as i said using dayjs or momentjs, im doing that in my current project and its so easy and smooth to work with**

### TODO

- [ ] Rewrite the lib to TypeScript
