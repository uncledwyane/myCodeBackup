<template>
    <div class="goodsWrap">
        <div class="goods">
            <div class="goodsImg">
                <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="">
                <div class="goodsInfo">
                    <p class="subTitle">可能是地表最强Pad</p>
                    <span class="price">￥6899.0</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        connect(){
        }
    },
}
</script>

<style lang="css">
    .goodsWrap{
        width: 95%;
        height: 100vh;
        margin: 10px auto;
        box-shadow: 0 0 5px rgba(0,0,0,.1);
    }
    .goodsImg img{
        width: 200px;
    }
</style>