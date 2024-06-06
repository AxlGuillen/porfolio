import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import "./style.css";
import App from "./App.vue";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

// Importa la librería de Font Awesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Importa el paquete completo de íconos
import "@fortawesome/fontawesome-free/css/all.css";

// Añade manualmente los íconos que vas a usar
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faHome, faGithub, faLinkedin);

// Optimiza el DOM para cargar solo los íconos utilizados
dom.watch();

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

  // Registrar el componente globalmente
  app.component("DotLottieVue", DotLottieVue);
  app.component("font-awesome-icon", FontAwesomeIcon);
  app.mount("#app");
});
