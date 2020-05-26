<template>
    <div class="jokeContainer">
        <ul class="jokeList">
            <li v-for="item in jokeList" :key="item.content" class="eachJoke">{{ item.content }}</li>
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
            jokeList: []
        }
    },
    created() {
        this.getJokeList();
    },
    methods: {
        getJokeList(){
            this.$axios.get('/joke/randJoke.php?key=c6b27d38cce47c69c8da59fb60d0a71e').then( response => {
                this.jokeList = response.data.result;
            });
        }
    },
    components: {
        'backButton': backButton
    }
}
</script>

<style lang="css" scoped>
    body{
        margin: 0;
        padding: 0;
    }
    .jokeContainer{
        width: 100%;
        padding-left: 5px;
        padding-right: 5px;
        padding-top: 20px;
        background-color: rgb(255, 255, 255);
    }
    .jokeList{
        width: 95%;
        margin: 0 auto;
    }
    .eachJoke{
        width: 100%;
        text-align: left;
        padding: 5px 0 5px 5px;
        margin-bottom: 15px;
        color: rgb(255, 245, 245);
        background-image: linear-gradient(to bottom right, rgba(255, 0, 0,.3), rgba(0, 0, 255,.3));
        border-radius: 7px;
        box-shadow: 0 0 4px rgba(0,0,0,.3);
    }
</style>