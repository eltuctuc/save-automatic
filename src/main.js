import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MaterialIcon from './components/MaterialIcon.vue'

// Import Material Icons (Outline variant)
import 'material-symbols/outlined.css'

const app = createApp(App)

// Register MaterialIcon component globally
app.component('MaterialIcon', MaterialIcon)

app.use(store).use(router).mount('#app')
