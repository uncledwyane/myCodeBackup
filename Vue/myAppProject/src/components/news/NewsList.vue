<template>
    <div class="container">
        <mu-button fab color="indigo" class="frashButton">
            <mu-icon value="refresh"></mu-icon>
        </mu-button>
        <div class="mui-card" style="margin-bottom: 35px;">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media"  v-for='(item, index) in newslist' :key="item.title">
                    <router-link :to="'/home/newslist/newscontent/' + index">
                        <a href="javascript:;">
                        <img class="mui-media-object mui-pull-right" :src="item.pic">
                        <div class="mui-media-body">
                            <h5 class="title">{{ item.title }}</h5>
                            <p class='mui-ellipsis'>
                                <span>时间: {{ item.time }}</span>
                                <span>类型：{{ item.category }}</span>
                            </p>
                        </div>
                        </a>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newslist: [],
        }
    },
    created(){
        this.getApiDate()
    },
    mounted() {},
    methods: {
        getApiDate(){
            this.$axios.get('/news/get?channel=头条&appkey=e13ea65ea209d516').then( response => {
                this.newslist = response.data.result.list
            })
        }
    }
}
</script>

<style lang="css" scoped>
    .container{
        padding-top: 0px;
        margin-bottom: 25px;
    }
    .mui-ellipsis{
        color: #666;
        display: flex;
        justify-content: space-between;
    }
    .title{
        padding: 0;
        color: #000;
    }
    p{
        font-size: 10px;
    }
    .frashButton{
        position: fixed;
        bottom: 60px;
        right: 10px;
        z-index: 1000;
    }
</style>