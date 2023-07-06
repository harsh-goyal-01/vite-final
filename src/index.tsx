import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from 'react-intl';
import English from './languages/en.json';
import Spanish from './languages/es.json';
// Render a YouTube video player
let lang;
const local=navigator.language;
if(local==="en-US")
{
  lang=English;
}
else{
  lang=Spanish;
}
console.log(`You are running this application in ${import.meta.env.MODE} mode!!`);
console.log(`${import.meta.env.VITE_SECRET_KEY}`);
const rootElement= document.getElementById('root');

ReactDOM.render(
  <IntlProvider locale={local} messages={lang}>
    <App />
    </IntlProvider>,
  rootElement
);

reportWebVitals(console.log);
