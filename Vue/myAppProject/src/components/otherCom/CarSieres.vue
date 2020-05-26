<template>
    <div class="carsWrap">
        <div class="brand">
            <div class="brandLogo">
                <img :src="brand_logo" alt="" class="logo">
            </div>
        </div>
        <div class="allCars">
            <table class="tableWrap">
                <thead class="tableHead">
                    <th class="carInfo">车名</th>
                    <th class="carInfo">车型</th>
                    <th class="carInfo">车厂</th>
                </thead>
                <tbody class="tableBody">
                    <tr v-for="car in cars" :key="car.id" class="eachCar">
                        <td class="carDetail">{{ car.name }}</td>
                        <td class="carDetail">{{ car.levelname }}</td>
                        <td class="carDetail">{{ car.sname }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <router-link to='/home/carbrand'>
            <backButton></backButton>
        </router-link>
    </div>
</template>

<script>
import backButton from '../Button.vue'

export default {
    data() {
        return {
            id: '',
            brand_logo: '',
            brand_name: '',
            cars: []
        }
    },
    created() {
        this.getId();
    },
    mounted() {
        this.getCarsWithId();
    },
    methods:{
        getId(){
            this.id = this.$route.params.car.id;
            this.brand_logo = this.$route.params.car.brand_logo;
            this.brand_name = this.$route.params.car.brand_name;
        },
        getCarsWithId(){
            this.$axios.get('/cxdq/series?brandid='+ this.id +'&levelid=&key=263727fbc15be15c9f56d73c90464dfb').then(
                res => {
                    this.cars = res.data.result;
                }
            );
        }
    },
    components: {
        'backButton': backButton
    }
}
</script>

<style lang="css" scoped>
    .carsWrap{
        width: 100vw;
        height: 100vh;
    }
    .brand{
        width: 50%;
        margin: 15px auto;
        box-shadow: 0 0 8px rgba(0,0,0,.1);
        background-color: #fff;
        border-radius: 10px;
        overflow: hidden;
        text-align: center;
    }
    .brandLogo{
        width: 100%;
    }
    .allCars{
        width: 95%;
        margin: 0 auto;
        box-shadow: 0 0 8px rgba(0,0,0,.1);
        border-radius: 10px;
        background-color: #fff;
        padding: 10px;
    }
    .eachCar{
        border-bottom: 1px solid #dbdbdb;
    }
    .tableWrap{
        width: 100%;
    }
    th,td{
        width: 33%;
    }
    th{
        text-align: center;
        border-bottom: 1px solid rgb(255, 226, 226);
    }
    td{
        text-align: center;
        height: 50px;
    }
</style>