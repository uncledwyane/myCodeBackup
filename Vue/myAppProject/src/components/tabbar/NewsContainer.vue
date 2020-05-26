<template>
    <div>
        <van-tabs color='pink' @click="sendCate" class="cateBar">
            <van-tab v-for="(category, index) in newsCategory" :title="category" :key="index">
                <van-skeleton :row="18" :loading='loadingIsShow' />
            </van-tab>
        </van-tabs>

        <!--新闻列表-->
        <div class="allNewsList">
            <ul class="newsList">
                    <li class="newsItem" v-for="(news,index) in newsList" :key="news.title">
                        <router-link to='/home/news/newsdetail' @click.native="sendRouteData(news)">
                            <div class="newsDetailWrap">
                                <div class="newsImg">
                                    <img :src="news.pic" alt="">
                                </div>
                                <div class="newsInfo" :class="'news'+index">
                                    <h5 class="newsTitle">{{ news.title }}</h5>
                                    <div class="otherInfo">
                                        <span class="newsTime">{{ news.time }}</span>
                                        <van-tag round type="primary">{{ news.category}}</van-tag>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </li>
            </ul>
        </div>
        <div class="loadmore">
            <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" large v-show="this.newsList != ''" @click='loadMore'>加载更多</van-button>
        </div>
        <!--返回按钮-->
        <router-link to='/home' class="back">
            <span class="backButton"><van-icon name="wap-home-o" size='30'/></span>
        </router-link>
    </div>
</template>

<script>
import { Toast } from 'vant'
export default {
    data() {
        return {
            newsCategory: [],
            chooseWhat: '',
            loadingIsShow: false,
            newsList: [],
            newsTitle: '',
            newsTime: '',
            newsPic: '',
            start: 0,
            choosedCategory: ''
        }
    },
    created() {
        this.getNewsIndex(),
        this.getNewsList()
    },
    methods: {
        // 获取新闻分类索引
        getNewsIndex(){
            this.$axios.get('/news/channel?appkey=e13ea65ea209d516').then( res => {
                this.newsCategory = res.data.result
            })
        },
        // 切换到此页默认请求头条的数据
        getNewsList(){
            this.$axios.get('/news/get?channel=头条&appkey=e13ea65ea209d516').then( res => {
                    this.newsList = res.data.result.list
            })
        },
        // 点击首页分类之后更新新闻列表
        sendCate(index, category){
            this.choosedCategory = category;
            this.$axios.get('/news/get?channel=' + category + '&start=' + this.start + '&appkey=e13ea65ea209d516').then( res => {
                    this.newsList = res.data.result.list;
            })
        },
        sendRouteData(msg){
            this.$router.push({
                name: '/home/news/newsdetail',
                query: {
                    data: msg
                }
            });
        },
        // 加载更多的新闻
        loadMore(){
            this.start += 10;
            this.$axios.get('/news/get?channel=' + this.choosedCategory + '&start=' + this.start + '&appkey=e13ea65ea209d516').then( res => {
                for(var i = 0; i < res.data.result.list.length; i++){
                    this.newsList.push(res.data.result.list[i]);
                }
            })
        }
    },
}
</script>

<style lang="css">
    .van-tabs--line .van-tabs__wrap{
        box-shadow: 0 1px 10px rgba(0, 0, 0, .1);
        margin-bottom: 10px;
    }
    .van-tabs__content{
        padding: 5px 15px;
    }
    .allNewsList{
        width: 100%;
        margin-top: 45px;
        margin-bottom: 10px;
    }
    .newsList{
        list-style: none;
        width: 95%;
        margin: 0 auto;
    }
    .newsList .newsItem{
        width: 100%;
        height: 80px;
        border-radius: 5px;
        box-shadow: 0 0 3px rgba(0, 0, 0, .2);
        margin-bottom: 10px;
    }
    .newsImg{
        float: left;
        width: 20%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .newsImg img{
        width: 50px;
        height: 50px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
    }
    .newsInfo{
        width: 80%;
        height: 80px;
        float: right;
        padding: 10px;
    }
    .newsTitle{
        color: #000;
    }
    .newsTime{
        color: #999;
    }
    .otherInfo{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .newsCategory{
        display: block;
        width: 50px;
        height: 20px;
        border: 1px solid lightskyblue;
        text-align: center;
        line-height: 20px;
        border-radius: 10px;
        color: lightskyblue;
    }
    .van-tabs--line .van-tabs__wrap{
        position: fixed;
    }
    .van-ellipsis{
        white-space: normal !important;
        flex-basis: 15% !important;
    }
    span.backButton{
        width: 50px;
        height: 50px;
        display: flex;
        position: fixed;
        bottom: 50px;
        right: 15px;
        background-color: #fff;
        box-shadow: 0 5px 10px rgba(0,0,0,.1);
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        
    }
    .loadmore{
        width: 90%;
        height: 50px;
        margin: 0 auto 5px auto;
    }
    .loadmore .van-button--normal{
        width: 100%;
    }
</style>