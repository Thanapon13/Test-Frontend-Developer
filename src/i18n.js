import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  th: {
    translation: {
      "Test 1": "แบบทดสอบที่ 1",
      "Laout & Style": "การจัดการหน้าเว็บ",
      "Test 2": "แบบทดสอบที่ 2",
      "Connect && API": "การเชื่อมต่อ API",
      "Test 3": "แบบทดสอบที่ 3",
      "Form && Table": "การจัดการหน้าฟอร์ม",
      "Layout & Style": "การจัดการหน้าเว็บ",
      "Move Shape": "เปลี่ยนรูปแบบ",
      "Move Position": "เปลี่ยนตำแหน่ง",
      "Home Page": "กลับหน้าหลัก",
      "Layout Form": "การจัดการหน้าฟอร์ม"
    }
  },
  en: {
    translation: {
      " Test 1": "Test 1",
      "Laout & Style": "Laout & Style",
      " Test 2": "Test 2",
      "Connect && API": "Connect && API",
      " Test 3": "Test 3",
      "Form && Table": "Form && Table",
      "Layout & Style": "Layout & Style",
      "Move Shape": "Move Shape",
      "Move Position": "Move Position",
      "Home Page": "Home Page",
      "Layout Form": "Layout Form"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "th",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
