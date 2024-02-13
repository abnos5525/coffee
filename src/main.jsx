import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import i18next from "i18next";
import global_fa from "./langs/fa/global.json"
import global_en from "./langs/en/global.json"
import {I18nextProvider, initReactI18next} from "react-i18next";

i18next
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: global_en
            },
            fa: {
                translation: global_fa
            }
        },
        lng: 'fa', // Set default language here
        fallbackLng: 'fa', // Fallback language
    });

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <I18nextProvider i18n={i18next}>
          <App />
      </I18nextProvider>
  </StrictMode>,
)
