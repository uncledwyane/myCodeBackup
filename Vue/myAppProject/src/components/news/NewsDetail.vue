<template>
    <div class="newsContainer">
        <div class="header">
            <div class="title">
                <h4 class="newsTitle">{{ recived.title }}</h4>
            </div>
            <div class="info">
                <span class="newsTime">发布时间：{{ recived.time }}</span>
                <span class="newsfrom">来源：{{ recived.src }}</span>
            </div>
        </div>
        <div class="content">
            <p v-html="recived.content" class="newsDetail"></p>
        </div>
        <div class="footer">
            <p>评论：</p>
            <mu-container>
                <mu-text-field  v-model="commentContent" placeholder="Comment" multi-line :rows="3" :rows-max="6" full-width></mu-text-field>
                <mu-button full-width color="primary" @click="pushComment">发表评论</mu-button>
            </mu-container>
            <hr>
            <p>评论列表：</p>
            <ul v-for="item in commentList" :key="item" class="commentList">
                <li class="commentContent">{{ item }}</li>
            </ul>
        </div>
        <mu-button fab color="indigo" class="frashButton" to="/home/news">
            <mu-icon value="android"></mu-icon>
        </mu-button>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            recived: {
                title: '',
                content: '',
                pic: '',
                time: '',
                category: '',
                src: ''
            },
            commentList: [],
            commentContent:'',
            gotMsg: ''
        }
    },
    mounted(){
        this.getData();
    },
    methods: {
        getData(){
            if(this.$route.query.data != null){
                this.recived.title = this.$route.query.data.title;
                this.recived.content = this.$route.query.data.content;
                this.recived.src = this.$route.query.data.src;
                this.recived.time = this.$route.query.data.time;
                this.recived.category = this.$route.query.data.category;
            }
        },
        pushComment(){
            if(this.commentContent === ''){
                Toast('请输入内容！')
            }
            else{
                this.commentList.push(this.commentContent)
                this.commentContent = ''
            }
        }
    },
}
</script>

<style lang="css" scoped>
    .newsContainer{
        padding: 20px;
        background-color: #fff;
        margin: 0 auto; 
    }
    .newsDetail h2{
        align-items: center;
    }
    .newsDetail >>> .art_p{
        color: #000;
        text-align: justify;
    }
    .newsDetail>>>video{
        width: 300px;
        display: block;
        margin: auto;
    }
    .newsDetail>>>img{
        width: 60vw;
        align-items: center;
        margin: 15px 0;
    }
    .info{
        display: flex;
        justify-content: space-between;
    }
    .newsTime,
    .newsfrom{
        font-size: 12px;
        color: blue;
    }
    .newsDetail >>> .art_img_mini.j_p_gallery{
        margin: 10px auto;
        text-align: center;
    }
    .newsDetail >>> .art_img_mini .art_img_tit{
        font-size: 11px;
    }
    .newsDetail >>>  h2{
        font-size: 11px;
    }
    .newsDetail >>> .art_video{
        margin: 0 auto;
        text-align: center;
    }
    .header{
        margin-bottom: 10px;
        padding: 10px;
    }
    .content{
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
        margin-bottom: 10px;
    }
    .footer {
        display: block;
        background-color: #fff;
        padding: 20px 10px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
        margin-bottom: 45px;
    }
    .commentList{
        padding: 5px;
        list-style: none;
        margin: 0;
    }
    li.commentContent{
        border: 1px dotted lightblue;
        padding: 5px;
        margin: 5px 0;
    }
    .frashButton {
        position: fixed;
        bottom: 70px;
        right: 20px;
    }
    .mui-table-view .mui-media, .mui-table-view .mui-media-body{
        text-align: center;
    }
</style>