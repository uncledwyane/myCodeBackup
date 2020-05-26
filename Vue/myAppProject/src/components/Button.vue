<template name='backButton'>
    <div class="buttonWrap">
        <span class="btnBack">
            <span class="material-icons">keyboard_arrow_left</span>
        </span>
    </div>
</template>

<script>
export default {
    components: {
        'backButton': 'backButton'
    }
}
</script>

<style lang="css" scoped>
    .material-icons{
        font-size: 35px!important;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        box-shadow: 0 0 5px rgba(0,0,0,.2);
        border-radius: 50%;
        background-color: rgba(255,255,255,.7);
    }
    .buttonWrap{
        width: 50px;
        height: 50px;
        position: fixed;
        right: 10px;
        bottom: 50px;
    }
</style>