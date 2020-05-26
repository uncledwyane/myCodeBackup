<template>
    <div class="childcontainer">
		<div class="title">
			<div class="prime">
				<img src="/images/prime.jpg" alt="">
			</div>
			<div class="hisword">
				<h4>Honor to the End</h4>
			</div>
		</div>
		<div class="oneSentenceContainer">
			<p class="oneSentence" @click='getYiYan'>{{ oneSentence }}</p> 
		</div>  
		<div class="tools">
			<van-grid :gutter="10">
				<van-grid-item icon="fire-o" text="新闻" to='/home/news'/>
				<van-grid-item icon="phone-o" text="归属地" to='/home/phoneNumberOrigin'/>
				<van-grid-item icon="smile-o" text="讲个笑话" to='/home/joke'/>
				<van-grid-item icon="shop-o" text="商城" to='/shop'/>
				<van-grid-item icon="exchange" text="历史/今天" @click="goToh"/>
				<van-grid-item icon="tosend" text="老黄历" to='/home/huangli'/>
				<van-grid-item icon="logistics" text="车型大全" to='/home/carbrand'/>
				<van-grid-item icon="hot-o" text="查天气" to='/home/weather'/>
			</van-grid>
		</div>
    </div>
</template>

<script>
export default {
    data(){
		return {
			imgList: [],
			oneSentence: ''
		}
	},
	created() {
		this.getImgList();
		this.getYiYan();
	},
	methods: {
		getImgList(){
			this.imgList.push('../../images/1.png');
			this.imgList.push('../../images/2.png');
			this.imgList.push('../../images/3.png');
		},
		getYiYan(){
			this.$axios.get('/api/ylapi.php').then( res => {
				this.oneSentence = res.data;
			});
		},
		goToh(){
			var path = this.$route.path;
			this.$router.push({
				name: 'todayofhistory',
				params: {
					path: path
				}
			})
		}
	},
}
</script>

<style lang="css" scoped>
    body{
		padding: 0;
    }
    .title{
        padding-top: 20px;
		width: 100%;
		padding-left: 0;
		display: flex;
		margin-bottom: 20px;
		flex-direction: column;
		justify-content: center;
    }
	.prime,.hisword{
		margin: 5px auto;
	}
	.childcontainer{
		width: 100%;
		height: 100%;
	}
	.welcome{
		font-weight: bolder;
	}
	.title img{
		width: 100px;
		height: 100px;
		border-radius: 50%;
		border: 6px solid #fff;
		box-shadow: 0 6px 10px rgba(0,0,0,.3);
	}
    .mint-swipe{
		width: 100%;
		height: 200px;
	}
	
	
	ul.mui-table-view,
	.mui-grid-view,
	.mui-grid-9{
		background-color: #fff;
		border-top: none;
		border-left: none;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border: none;
	}
	.mui-icon,.img-logo{
		width: 40px;
		height: 40px;
	}
	.item{
		border-right: none;
		border-bottom: none;
	}
	.oneSentenceContainer{
		width: 100%;
		height: 155px;
		margin-top: 10px;
	}
	.oneSentence{
		display: flex;
		margin: 0 auto;
		text-align: justify;
		padding: 10px;
		width: 90%;
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0 0 10px rgba(65, 65, 65, 0.1);
		color: lightskyblue;
	}
	.mui-media-body{
		font-size: 12px !important;
	}
	.mui-table-view.mui-grid-view .mui-table-view-cell a{
		background-color: #fff;
		width: 80px;
		height: 80px;
		border-radius: 10px;
		box-shadow: 0 0 5px rgba(65, 65, 65, 0.1);
	}
</style>