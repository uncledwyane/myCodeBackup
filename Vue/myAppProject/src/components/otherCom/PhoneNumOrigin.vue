<template>
    <div class="myContainer">
        <div class="form">
            <h3 class="title">归属地查询：</h3>
            <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
                <mu-form-item prop="input" label="请输入号码...">
                    <mu-text-field v-model="form.input" @keyup="checkCurrent"></mu-text-field>
                </mu-form-item>
            </mu-form>
            <mu-button color="#B8EEE0" @click='search' style="color: #47867B; letter-spacing: 5px; font-size: 15px; margin-right: 20px;" round>查询</mu-button>
            <mu-button color="#FFEDD5" @click='clear' style="color: #867355; letter-spacing: 5px; font-size: 15px;" round>清除</mu-button>
            <div class="result" v-show="hasResult">
                <h3>查询结果：</h3>
                <p class="resultDetail provice">省份：{{ province }}</p>
                <p class="resultDetail city">城市：{{ city }}</p>
                <p class="resultDetail areacode">区号：{{ areacode }}</p>
                <p class="resultDetail zip">邮编：{{ zip }}</p>
                <p class="resultDetail company">运营商：{{ company }}</p>
            </div>
        </div>
        <router-link to='/home'>
            <mu-button fab color="blue" class="frashButton">
                <mu-icon value="android"></mu-icon>
            </mu-button>
        </router-link>
    </div>
</template>

<script>
import {Toast} from 'vant'
export default {
    data() {
        return {
            labelPosition: 'top',
            form: {
                totalNum: 0,
                input: '',
            },
            province: '',
            city: '',
            areacode: '',
            zip: '',
            company: '',
            card: '',
            isCurrent: false,
            hasResult: false
        }
    },
    methods: {
        showType(){
            console.log('Type:' + typeof(this.form.input));
        },
        checkCurrent(){
            if(this.form.input.length === 11) this.isCurrent = true
        },
        search(){
            if(this.form.input === ''){
                Toast('您没有输入号码,请输入...')
                this.province = ''
            }
            else if(this.form.input.length != 11){
                Toast('您输入的号码有误...')
                this.form.input = ''
            }
            else{
                console.log(typeof(this.form.input));
                this.hasResult = true
                this.$axios.get('/mobile/get?phone=' + this.form.input + '&key=48bcd8cfbb7a567d464b823d1016617a').then( res => {
                    this.province = res.data.result.province
                    this.city = res.data.result.city
                    this.areacode = res.data.result.areacode
                    this.zip = res.data.result.zip
                    this.company = res.data.result.company
                    this.card = res.data.result.card
                })
            }
        },
        clear(){
            this.form.input = '';
            this.hasResult = false;
        }
    }
}
</script>

<style lang="css" scoped>
    .myContainer{
        width: 90%;
        height: 90vh;
        padding: 20px 10px;
        margin: 0 auto;
        background-color: #fff;
    }
    .form{
        width: 100%;
        height: 200px;
    }
    .mu-form{
        width: 100% !important;
    }
    .mu-form-item{
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        font-weight: bolder;
        box-shadow: 0 0 6px rgba(0, 0, 0, .2);
    }
    .title{
        margin-bottom: 20px;
        text-shadow: 0 0 10px rgba(0, 0, 0, .3);
    }
    .result{
        width: 100%;
        padding: 10px;
        height: 250px;
        background-color: #fff;
        box-shadow: 0 0 6px rgba(0, 0, 0, .2);
        margin-top: 20px;
        border-radius: 10px;
    }
    .mu-fab-button{
        position: fixed;
        right: 15px;
        bottom: 60px;
    }
    .resultDetail{
        width: 100%;
        padding: 0 0 10px 10px;
        height: 30px;
        line-height: 30px;
        text-align: left;
        border: 2px dotted lightskyblue;
        border-radius: 5px;
    }
    .mu-inverse{
        margin-bottom: 10px;
    }
    .mu-raised-button .mu-button-wrapper{
        width: 147px !important;
    }
</style>