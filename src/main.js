import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Importa il modulo Axios per le chiamate API
import axios from "axios";

// Configura Axios globalmente per l'applicazione
axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

// Crea l'istanza dell'applicazione Vue
const app = createApp(App);

// Usa il router definito in ./router
app.use(router);

// Monta l'applicazione nell'elemento con id 'app' nel tuo HTML
app.mount("#app");
