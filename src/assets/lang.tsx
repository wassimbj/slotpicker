interface Props {
  selectedTitle: string;
  am: string;
  pm: string;
}

const lang: Record<'ar' | 'en' | 'fr', Props> = {
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
    am: 'matin',
    pm: 'midi',
  },
};

export default lang;
