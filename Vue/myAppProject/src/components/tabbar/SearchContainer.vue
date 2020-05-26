<template>
    <div>
        <h3>内容： {{ title }}</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            time: '',
            content: '',
            category: '',
        }
    },
    created() {
        
    },
    mounted(){
        this.getMsg()
    },
    methods: {
        getMsg(){
            // this.$bus.$on('newsMsg', gotRes => {
            //     // this.title = gotRes.title
            //     // this.time = gotRes.time
            //     // this.content = gotRes.content
            //     // this.category = gotRes.category
            //     this.title = gotRes
            //     console.log('得到的数据：' + gotRes );
            // })
            this.title = parseInt(this.$route.params.id) + 1
        }
    },
}
</script>

<style lang="css">
    body{
        background-color: lightblue;
    }
</style>