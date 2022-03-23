import { Dayjs } from 'dayjs';

export type Langs = 'ar' | 'en';

export interface SlotPickerProps {
  interval: number;
  unAvailableSlots?: Array<string>;
  from?: string;
  to?: string;
  lang?: Langs;
  selectedSlotColor?: string;
  defaultSelectedTime?: string;
  onSelectTime: (selectedTime: Dayjs) => any;
}

export interface TimeSlotProps {
  isOff: boolean;
  slot: Dayjs;
  interval: number;
  id?: string;
  lang: Langs;
  selectedSlotColor?: string;
  isSelected: boolean;
  onSelect: (val: Dayjs) => any;
}

export interface LangProps {
  selectedTitle: string;
  am: string;
  pm: string;
}
