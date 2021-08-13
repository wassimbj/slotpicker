import { Langs, LangProps } from './types';

const lang: Record<Langs, LangProps> = {
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
