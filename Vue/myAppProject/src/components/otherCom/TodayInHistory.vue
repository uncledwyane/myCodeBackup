<template>
    <div class="wrapContainer">
        <div class="today">   
            <h4>今天是：<span class="time">{{ date | formatDate}}</span></h4>
        </div>
        <div class="history">
            <ul class="thingList">
                <li v-for="item in dataList" :key="item._id" class="eachThing">
                    <div class="title">{{ item.title }}</div>
                    <div class="date">{{ item.date }}</div>
                </li>
            </ul>
        </div>
        <router-link :to='lastPath'>
            <backButton class="backButton"></backButton>
        </router-link>
    </div>
</template>

<script>
import backButton from '../Button.vue'
var pddDate = function(date){
    return date < 10 ? '0' + date : date;
};
export default {
    data () {
        return {
            date: new Date(),
            thisMonth: '',
            thisDay: '',
            dataList: [],
            lastPath: ''
        };
    },
    filters: {
        formatDate(){
            var date = new Date();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            return month + '月' + day + '日';
        }
    },
    created(){
        this.getTodayDate();
        this.getData();
    },
    mounted(){
        this.getPath();
    },
    methods: {
        getTodayDate(){
            var date = new Date();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            this.thisMonth = month;
            this.thisDay = day;
        },
        getData(){
            // 请求历史上的今天数据
            this.$axios.get("/todayOnhistory/queryEvent.php?key=f0bb67904439f76cc40f2d9cd37e2a5d&date="+ this.thisMonth +"/"+ this.thisDay).then( res => {
                    this.dataList = res.data.result
            })
        },
        // 接收首页传过来的path
        getPath(){
            this.lastPath = this.$route.params.path;
        }
    },
    components: {
        'backButton': backButton
    }
}
</script>

<style lang="css" scoped>
    .wrapContainer{
        width: 100%;
        height: 100%;
    }
    .today{
        width: 90%;
        height: 60px;
        margin: 20px auto 10px auto;
        border-radius: 10px;
        display: flex;
        align-items: center;
        padding-left: 20px;
        box-shadow: 0 0 10px rgba(0,0,0,.1);
    }
    .time{
        color: rgb(255, 98, 125);
    }
    .history{
        width: 90%;
        margin: 0 auto;
    }
    .thingList{
        width: 100%;
        margin: 0 auto;
    }
    .eachThing{
        width: 100%;
        height: 50px;
        border-radius: 5px;
        margin-bottom: 10px;
        overflow: hidden;
        box-shadow: 0 0 3px rgba(0,0,0,.5);
        background-image: linear-gradient(to right,#24c6dc,#514a9d);
    }
    .title{
        width: 100%;
        height: 30px;
        padding-top: 5px;
        padding-left: 5px;
        font-size: 13px;
        color: #fff;
    }
    .date{
        width: 100%;
        height: 20px;
        line-height: 20px;
        background-color: rgba(255,255,255,.5);
        color: #222;
        font-size: 12px;
        padding-left: 5px;
        letter-spacing: 1px;
    }
    .backButton{
        position: fixed;
        bottom: 100px;
        right: 15px;
    }
</style>