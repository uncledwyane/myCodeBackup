<template>
    <div class="carWrap">
        <ul class="carBrandList">
                <li v-for="item in allCarBrand" :key="item.brand_name" class="eachBrand" @click='intoCar(item)'> 
                    <div class="brandLogo">
                        <img :src="item.brand_logo" alt="">
                    </div>
                    <div class="brandName">
                        {{ item.brand_name }}
                    </div>
                </li>
        </ul>
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
            allCarBrand: {},
            noRepeatIndexList: [],
            nameA: []      
        }
    },
    created() {
        this.getAllCarBrand();
    },
    methods: {
        getAllCarBrand(){
            this.$axios.get('/cxdq/brand?key=263727fbc15be15c9f56d73c90464dfb').then( res => {
                this.allCarBrand = res.data.result;
                for(var i = 0; i < this.allCarBrand.length; i++){
                    // 去除重复的字母,并添加到 noRepeatIndexList 中
                    if(this.noRepeatIndexList.indexOf(this.allCarBrand[i].first_letter) == -1){
                        this.noRepeatIndexList.push(this.allCarBrand[i].first_letter);
                    }

                    if(this.allCarBrand[i].first_letter == 'A'){
                        this.nameA.push(this.allCarBrand[i]);
                    }
                };
                
            }); 
        },
        intoCar(value){
            this.$router.push({
                name: 'carsieres',
                params: {
                    car: value
                }
            });
        }
    },
    components: {
        'backButton': backButton
    }
}
</script>

<style lang="css" scoped>
    .van-index-bar .van-index-bar__sidebar .van-index-bar__sidebar{
        font-size: 13px !important;
        line-height: 20px !important;
    }
    .carWrap{
        width: 100vw;
        height: 100vh;
    }
    .carBrandList{
        width: 95%;
        margin: 15px auto; 
        border-radius: 10px;
        overflow: hidden;
        background-color: #fff;
    }
    .eachBrand{
        width: 100%;
        height: 60px;
        display: flex;
        border-bottom: 1px dotted rgb(219, 219, 219);
        margin-bottom: 5px;
    }
    .brandLogo{
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .brandLogo img{
        width: 50px;
        height: 50px;
    }
    .brandName{
        width: 80%;
        line-height: 60px;
    }
</style>