import i18n from '../../i18n.config';

export const getProductTitleByLanguage = (title: string, titleEng: string) => {
  if (i18n.languages[0] === 'en_US') {
    return titleEng;
  } else if (i18n.languages[0] === 'es_MX') {
    return title;
  } else {
    return title;
  }
};
