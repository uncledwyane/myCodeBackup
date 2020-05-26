<template>
    <div>
        <div class="Wrap">
            <ul class="allItem">
                <li class='eachItem'>
                    <div class="title">阳历</div>
                    <div class="content">{{ huangData.yangli }}</div>
                </li>
                <li class='eachItem'>
                    <div class="title">阴历</div>
                    <div class="content">{{ huangData.yinli }}</div>
                </li>
                <li class='eachItem'>
                    <div class="title">五行</div>
                    <div class="content">{{ huangData.wuxing }}</div>
                </li>
                <li class='eachItem'>
                    <div class="title">冲煞</div>
                    <div class="content">{{ huangData.chongsha }}</div>
                </li>
                <li class='eachItem'>
                    <div class="title">彭祖百忌</div>
                    <div class="content">{{ huangData.baiji }}</div>
                </li>
                <li class='eachItem'>
                    <div class="title">吉神宜趋</div>
                    <div class="content">{{ huangData.jishen }}</div>
                </li>
                <li class='eachItem'>
                    <div class="title">宜</div>
                    <div class="content">{{ huangData.yi }}</div>
                </li>
                <li class='eachItem'>
                    <div class="title">忌</div>
                    <div class="content">{{ huangData.ji }}</div>
                </li>
                <li class='eachItem'>
                    <div class="title">凶神宜忌</div>
                    <div class="content">{{ huangData.xiongshen }}</div>
                </li>
            </ul>
        </div>
        <router-link to='/home'>
            <backButton></backButton>
        </router-link>
    </div>
</template>

<script>
import backButton from '../Button.vue'
export default {
    data() {
        return {
            huangData: [],
            year: '',
            month: '',
            day: ''
        }
    },
    created(){
        this.getHuangli();
    },
    methods: {
        getHuangli(){
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            this.year = year;
            this.month = month;
            this.day = day;
            this.$axios.get('/laohuangli/d?date=' + year +'-'+ month + '-' + day + '&key=9937eb6440c1973acf40d6eda1180d6e').then( res => {
                this.huangData = res.data.result;
            });
        }
    },
    components: {
        'backButton': backButton
    }
}
</script>

<style lang="css" scoped>
    .Wrap{
        width: 95%;
        margin: 20px auto;
    }
    .allItem{
        width: 100%;
    }
    .eachItem{
        width: 100%;
        border: 1px solid #000;
        margin-bottom: 10px;
        display: flex;
        box-shadow: 3px 5px 5px rgba(0,0,0, .3);
    }
    .eachItem .title,.content{
        height: 40px;
    }
    .eachItem .title{
        width: 25%;
        border-right: 1px solid #000;
        background-color: lightpink;
        padding: 3px;
        text-align: center;
        line-height: 40px;
    }
    .eachItem .content{
        width: 75%;
        padding: 3px;
        background-color: skyblue;
        line-height: 40px;
    }
</style>