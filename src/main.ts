import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from "./plugins/router"
import loader from "./plugins/loader"
loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(loader)
  .mount('#app')
