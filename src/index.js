import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl'; 
import App from './App';
import Russian from './lang/ru.json';
import English from './lang/en.json';
import Arabic from './lang/ar.json';


const locale = navigator.language;

let lang;
if (locale==="en") {
   lang = English;
} else {
   if (locale === "ru") {
       lang = Russian;
   }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <IntlProvider locale ={locale} messages={Russian}></IntlProvider>
        <App />
  </React.StrictMode>,
);
