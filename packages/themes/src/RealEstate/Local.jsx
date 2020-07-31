import React, { useEffect, useState} from 'react';
import { getUrlParameter, getLocal } from './language-utils';
import * as _ from 'lodash';


export default ({getLabel = () => '', code}) => {
  const [lang, setLang] = useState('es');

  useEffect(() => {
    const lang = getUrlParameter('lang', window.location.search);
    setLang(lang);
  }, []);

  let text = '';

  if (code) {
    text = getLocal(code, lang);
  } else {
    text = _.isFunction(getLabel) ? getLabel(lang) : getLabel;
  }

  return <>{text}</>;
};
