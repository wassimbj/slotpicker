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
};

export default lang;
