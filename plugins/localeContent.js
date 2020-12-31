export default (context, inject) => {
  const localeContent = (data, key, locale) => {
    if (data[`${key}_${locale}`] && data[`${key}_${locale}`].length > 0) {
      return data[`${key}_${locale}`];
    } else {
      return data[`${key}_en`];
    }
  };
  inject("localeContent", localeContent);
};
