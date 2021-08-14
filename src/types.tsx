export type Langs = 'ar' | 'en' | 'fr';

export interface SlotPickerProps {
  interval: number;
  unAvailableSlots?: Array<number>;
  selectedDate?: Date;
  from?: number;
  to?: number;
  lang?: Langs;
  selectedSlotColor?: string
  defaultSelectedTime?: number;
  onSelectTime: (selectedTime: number) => any;
}

export interface TimeSlotProps {
  isOff: boolean;
  timeInSec: number;
  interval: number;
  lang: Langs;
  selectedSlotColor?: string
  isSelected: boolean;
  onSelect: (e: any) => any;
}

export interface LangProps {
  selectedTitle: string;
  am: string;
  pm: string;
}
