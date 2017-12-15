import Home from './components/Home.vue'
import Stock from './components/stocks/Stock.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/stocks', component: Stock  }
]