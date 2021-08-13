import { Langs } from "./types";

interface Props {
  selectedTitle: string;
  am: string;
  pm: string;
}

const lang: Record<Langs, Props> = {
  en: {
    selectedTitle: 'selected time',
    am: 'AM',
    pm: 'PM',
  },

  ar: {
    selectedTitle: 'الوقت المحدد',
    am: 'صباحا',
    pm: 'مساء',
  },

  fr: {
    selectedTitle: 'heure sélectionnée',
    am: 'Matin',
    pm: 'Midi',
  },
};

export default lang;
