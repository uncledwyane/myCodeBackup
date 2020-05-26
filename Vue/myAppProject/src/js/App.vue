<template>
    <div class="container">
        <!--Header-->
		<mu-appbar style="width: 100%;" color="primary">
			<mu-button icon slot="left">
				<mu-icon value="menu"></mu-icon>
			</mu-button>
			Hello Vue.js
			<mu-button flat slot="right">LOGIN</mu-button>
		</mu-appbar>
        <!--Content-->   
        <transition mode="out-in">
            <router-view></router-view>   
        </transition>
        <!--Footer-->	
		<!--<van-tabbar v-model="active">
			<van-tabbar-item icon="home-o" name='home' to='/home' route='true'>首页</van-tabbar-item>
			<van-tabbar-item icon="friends-o" name='member' to='/news' route='true'>新闻</van-tabbar-item>
			<van-tabbar-item icon="shopping-cart-o" name='shop' to='/shop' route='true'>购物</van-tabbar-item>
			<van-tabbar-item icon="manager-o" name='search' to='/search' route='true'>我</van-tabbar-item>
		</van-tabbar>-->
    </div>
</template>

<script>
export default {
    data() {
		return {
			active: 'home'
		}
	},
	methods: {
		goback(){
			
		}
	}
}
</script>

<style lang="css" scoped>
	body{
		background-color: #F7F8FA;
	}
    .container{
		width: 100%;
		height: 100vh;
		padding-top: 40px;
		padding-left: 0;
		padding-right: 0;
		overflow-x: hidden;
		position: relative;
		background-color: #F7F8FA;
    }
	.v-enter{
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
	}
	.v-enter-active,
	.v-leave-active{
		transition: all .2s ease;
	}
	.header{
		z-index: 1;
	}
	.mu-appbar{
		position: fixed;
		top: 0;
		height: 40px;
	}
	.mu-appbar >>> .mu-appbar-title{
		text-align: center;
		font-size: 15px;
	}
	.mu-appbar-right .mu-flat-button{
		font-size: 12px;
	}
</style>