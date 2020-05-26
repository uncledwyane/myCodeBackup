<template>
    <div class="weatherWrap">
        <div class="inputCity">
            <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="90">
                <mu-form-item prop="input" label="输入城市：">
                    <mu-text-field v-model="form.input"></mu-text-field>
                </mu-form-item>
            </mu-form>
            <mu-button color="primary" full-width @click="searchWeather" class="search">查询天气</mu-button>
            <mu-button color="secondary" full-width @click="clearWeather">重新查询</mu-button>
        </div>
        <div class="result" v-show="isShow">
            <div class="currentCity">
                <h5>当前城市：<span class="value">{{ currentCity }}</span></h5>
            </div>
            <div class="today">
                <h4>当前天气：</h4>
                <ul>
                    <li>
                        <div class="weather">天气：<span class="value">{{ weatherTodayResult.info }}</span></div>
                        <div class="air">空气指数：<span class="value">{{ weatherTodayResult.aqi }}</span></div>
                    </li>
                    <li>
                        <div class="temperature">温度：<span class="value">{{ weatherTodayResult.temperature }}</span></div>
                        <div class="wet">湿度：<span class="value">{{ weatherTodayResult.humidity }}</span></div>
                    </li>
                </ul>
            </div>
            <div class="future">
                <h4>未来五天：</h4>
                <ul v-for="item in weatherFutureResult" :key="item.aqi" class="eachDay">
                    <li>
                        <h5 class="time"><span class="value">{{ item.date }}</span></h5>
                        <div class="dayInfo">
                            <div class="info">温度：<span class="value">{{ item.temperature }}</span></div>
                            <div class="info">天气：<span class="value">{{ item.weather }}</span></div>
                            <div class="info">风向：<span class="value">{{ item.direct }}</span></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <router-link to='/home'>
            <backButton></backButton>
        </router-link>
    </div>
</template>

<script>
import { Toast } from 'vant';
import backButton from '../Button.vue'
export default {
    data() {
        return {
            labelPosition: 'top',
            form: {
                input: ''
            },
            cityList: [],
            noRepeatCityList: [],
            weatherTodayResult: [],
            weatherFutureResult: [],
            currentCity: '',
            isShow: false
        }
    },
    created(){
        this.getCityList();
    },
    methods: {
        searchWeather(){
            if(this.form.input == ''){
                Toast('请输入内容！');
            }else if(this.noRepeatCityList.indexOf(this.form.input) === -1){
                Toast('列表中没有这个城市！');
            }
            else{
                // 请求天气数据
                this.$axios.get('/simpleWeather/query?city='+ this.form.input +'&key=99ce5c5761db67db16787f0706e1ff64').then( res => {
                    this.isShow = true;
                    this.currentCity = res.data.result.city;
                    this.weatherTodayResult = res.data.result.realtime; //当前天气
                    this.weatherFutureResult = res.data.result.future; //未来五天天气
                });
                this.form.input = '';
            }
        },
        getCityList(){
            this.$axios.get('/simpleWeather/cityList?key=99ce5c5761db67db16787f0706e1ff64').then( res => {
                for(var i = 0; i < res.data.result.length; i++){
                    this.cityList.push(res.data.result[i].city);
                }
                for(var i = 0; i < this.cityList.length; i++){
                    if(this.noRepeatCityList.indexOf(this.cityList[i]) === -1){
                        this.noRepeatCityList.push(this.cityList[i]);
                    }
                }
            });
        },
        clearWeather(){
            this.isShow = false;
        }
    },
    components: {
        'backButton': backButton
    }
}
</script>

<style lang="css" scoped>
    .weatherWrap{
        width: 95%;
        height: 100vh;
        margin: 0 auto; 
    }
    .inputCity{
        width: 100%;
        padding: 10px 10px 0px 10px;
        margin-top: 10px;
        background-color: #fff;
        box-shadow: 0 0 7px rgba(0,0,0,.1);
        border-radius: 5px;
        margin-bottom: 10px;
    }
    .mu-raised-button.mu-button-full-width{
        position: relative;
        top: -15px;
    }
    .result{
        width: 100%;
    }
    .currentCity, .today, .future{
        width: 100%;
        background-color: #fff;
        box-shadow: 0 0 7px rgba(0,0,0,.1);
        border-radius: 5px;
        margin-bottom: 10px;
    }
    .currentCity{
        width: 40%;
        margin: 0px auto 10px auto;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .today{
        padding: 10px;
    }
    .today ul{
        width: 100%;
        border-radius: 5px;
    }
    .today ul li{
        display: flex;
        width: 100%;
    }
    .today ul li div{
        width: 50%;
        height: 30px;
        line-height: 30px;
        text-align: center;
    }
    .value{
        color: #FF4081;
    }
    .future{
        padding: 5px;
    }
    .future h4{
        width: 100%;
    }
    .future ul{
        width: 100%;
        padding: 5px;
        background-color: #fff;
        border-bottom: 1px solid rgb(219, 219, 219);
    }
    .time{
        width: 27%;
        height: 25px;
        line-height: 25px;
        background-color: rgba(226, 252, 255, .3);
        margin: 0 auto 10px auto;
        text-align: center;
        border-radius: 3px;
    }
    .eachDay{
        margin-bottom: 10px;
    }
    .dayInfo{
        display: flex;
    }
    .dayInfo .info{
        width: 33%;
        text-align: left;
        font-size: 12px;
    }
    .search{
        margin-bottom: 10px;
    }
</style>