import VueRouter from 'vue-router'

import Home from '../src/components/tabbar/HomeContainer.vue'
import Shop from '../src/components/tabbar/ShopContainer.vue'
import NewsPage from '../src/components/tabbar/NewsContainer.vue'
import Search from '../src/components/tabbar/SearchContainer.vue'
import NewsList from '../src/components/news/NewsList.vue'
import NewsContent from '../src/components/news/NewsContent.vue'
import Joke from '../src/components/joke/Joke.vue'
import PNOrigin from '../src/components/otherCom/PhoneNumOrigin.vue'
import NewsDetail from '../src/components/news/NewsDetail.vue'
import TodayInHistory from '../src/components/otherCom/TodayInHistory.vue'
import HuangLi from '../src/components/otherCom/LaoHuangLi.vue'
import CarsBrand from '../src/components/otherCom/CarsBrand.vue' 
import CarSieres from '../src/components/otherCom/CarSieres.vue'
import Weather from '../src/components/otherCom/Weather.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/shop', component: Shop },
        { path: '/home/news', component: NewsPage },
        { path: '/search/:id', component: Search },
        { path: '/home/newslist/', name: 'newslist',component: NewsList},
        { path: '/news/newscontent/:id', component: NewsContent },
        { path: '/home/joke', component: Joke },
        { path: '/home/phoneNumberOrigin', component: PNOrigin },
        { path: '/home/news/newsdetail', name: '/home/news/newsdetail', component: NewsDetail},
        { path: '/home/todayinhistory', name: 'todayofhistory', component: TodayInHistory},
        { path: '/home/huangli', component: HuangLi },
        { path: '/home/carbrand', component: CarsBrand },
        { path: '/home/carbrand/carsieres', name: 'carsieres', component: CarSieres },
        { path: '/home/weather', component: Weather }
    ]
})

export default router