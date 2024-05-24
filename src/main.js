import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import "./style.css";
import App from "./App.vue";

async function loadLocaleMessages() {
  const context = {
    en: () => import("./locales/en.json"),
    es: () => import("./locales/es.json"),
  };
  const messages = {};
  for (const [key, value] of Object.entries(context)) {
    const localeMessages = await value();
    messages[key] = localeMessages.default;
  }
  return messages;
}

loadLocaleMessages().then((messages) => {
  const i18n = createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: messages,
  });

  const app = createApp(App);
  app.use(i18n);
  app.mount("#app");
});
