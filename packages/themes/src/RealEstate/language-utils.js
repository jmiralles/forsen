import es from './es.json';
import cat from './cat.json';

export function getUrlParameter(keyword, query_string) {
  keyword = keyword.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp(keyword + '=([^&#]*)');
  var results = regex.exec(query_string);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export function label(lang, text) {
  const local = getLocal(text, lang);
  return local;
}

export function labelFormatter(text) {
  return lang => label(lang, text);
}

export function getLocal(text, lang) {
  const locales = lang === 'cat' ? cat : es;

  return locales[text];
}
