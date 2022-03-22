export type Langs = 'ar' | 'en';

export interface SlotPickerProps {
  interval: number;
  unAvailableSlots?: Array<number>;
  selectedDate?: Date;
  from?: number;
  to?: number;
  lang?: Langs;
  selectedSlotColor?: string;
  defaultSelectedTime?: number;
  onSelectTime: (selectedTime: number) => any;
}

export interface TimeSlotProps {
  isOff: boolean;
  slot: number;
  interval: number;
  lang: Langs;
  selectedSlotColor?: string;
  isSelected: boolean;
  onSelect: (e: any) => any;
}

export interface LangProps {
  selectedTitle: string;
  am: string;
  pm: string;
}

// export interface SelectedSlotResult {
//   from: {
//     hour: number; // 8,
//     minute: number; // 30
//   };
//   to: {
//     hour: number; // 9
//     minute: number; // 30
//   };
// }
