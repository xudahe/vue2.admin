<template>
	<div class="homepageDivTop3" style="width: 100%;height: 100%;position: relative;">
		<div style="padding: 0.16rem 0.24rem;">
			<div class="topDiv">
				<div class="topDivBg">
					<img src="static/img/home1/旋转.png" class="topImg imgAllGif" />
					<div class="topLabelDiv">
						<div class="topVal">232</div>
						<div class="topLabel">工业排污口</div>
					</div>
				</div>
			</div>
			<div class="topDiv">
				<div class="topDivBg">
					<img src="static/img/home1/旋转.png" class="topImg imgAllGif" />
					<div class="topLabelDiv">
						<div class="topVal" style="color: #BB4545;">232</div>
						<div class="topLabel">生活排污口</div>
					</div>
				</div>
			</div>
			<div class="topDiv">
				<div class="topDivBg">
					<img src="static/img/home1/旋转.png" class="topImg imgAllGif" />
					<div class="topLabelDiv">
						<div class="topVal" style="color: #C0B853;">232</div>
						<div class="topLabel">混合废水排污口</div>
					</div>
				</div>
			</div>
			<div class="topDiv">
				<div class="topDivBg">
					<img src="static/img/home1/旋转.png" class="topImg imgAllGif" />
					<div class="topLabelDiv">
						<div class="topVal" style="color: #69CF90;">232</div>
						<div class="topLabel">雨污合流排污口</div>
					</div>
				</div>
			</div>
			<div class="topDiv">
				<div class="topDivBg">
					<img src="static/img/home1/旋转.png" class="topImg imgAllGif" />
					<div class="topLabelDiv">
						<div class="topVal" style="color: #8672DC;">232</div>
						<div class="topLabel">雨水排污口</div>
					</div>
				</div>
			</div>
		</div>
		<div style="padding: 0.1rem 0.24rem;height: calc(100% - 0.94rem - 0.24rem - 0.1rem);">
			<div class="mapDivBg">
				<div class="mapDiv">
					<!-- 各街道的地形图 -->
					<img v-show="floatFlag == item.name" :key="index" v-for="(item,index) in mapareaList" :src="item.url" class="maparea floatimg" :class="[item.classname]" />
					<!-- 各街道的点位 -->
					<img :key="'point' + index" v-for="(item,index) in mappoint" src="static/img/home1/point.png" class="point" :class="[item.classname]" />
					<!-- 选中光束 -->
					<img v-show="Flag == index" :key="'points' + index" v-for="(item,index) in mappoint" src="static/img/home1/光束.png" class="points" :class="[item.classname]" />
					<!-- 街道名文字 -->
					<div :key="'text' + index" v-for="(item,index) in maptext" class="text" :class="[item.classname]" @click="titclick(item.name,index)" @mouseover="titleold = item.name" @mouseout="titleold = null">{{item.name}}</div>
					<!-- 地图弹窗 -->
					<div v-show="!isshowTitle" class="modelDiv" :class="[floatList[Flag].classname]">
						<div class="modelDivmain" :class="['imgAll']">
							<div style="padding-top: 0.2rem;padding-left: 0.2rem;font-size: 0.16rem;font-family: hxbnst;color: #FFFFFF;letter-spacing: 2px;">{{mapareaList[Flag].name}}</div>
							<Row>
								<Col span="12" class="modelCol">
								
								<div class="modelLabelmain">工业排污口:</div>
								<div class="modelValmain">{{Facilities.ys}} (个)</div>
								</Col>
								<Col span="12" class="modelCol">
								
								<div class="modelLabelmain">生活排污口:</div>
								<div class="modelValmain">{{Facilities.ws}} (个)</div>
								</Col>
								<Col span="12" class="modelCol">
								
								<div class="modelLabelmain">混合废水排口:</div>
								<div class="modelValmain">{{Facilities.ws}} (个)</div>
								</Col>
								<Col span="12" class="modelCol">
								
								<div class="modelLabelmain">雨污合流排口:</div>
								<div class="modelValmain">{{Facilities.ws}} (个)</div>
								</Col>
								<Col span="12" class="modelCol">
								
								<div class="modelLabelmain">雨水排口:</div>
								<div class="modelValmain">{{Facilities.ws}} (个)</div>
								</Col>
								<Col span="12" class="modelCol">
								
								<div class="modelLabelmain">待整治排口:</div>
								<div class="modelValmain">{{Facilities.ws}} (个)</div>
								</Col>
								<Col span="12" class="modelCol">
								
								<div class="modelLabelmain">已整治排口:</div>
								<div class="modelValmain">{{Facilities.ws}} (个)</div>
								</Col>
								
							</Row>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		components: {

		},
		data() {
			return {
				timer: [],
				titleFlag: null,
				Flag: 0,
				floatFlag: null,
				isshowTitle: true,
				Facilities:{
					ys: '--',
					ws: '--',
					jcj: '--',
					pk: '--',
					cctv: '--',
					qxd: '--'
					
				},
				oldflag: null,
				titleold: null,
				mapareaList: [{
						name: '长安街道',
						classname: 'dt0',
						url: require('@/assets/static/img/home1/dt0.png')
					}, {
						name: '堰桥街道',
						classname: 'dt1',
						url: require('@/assets/static/img/home1/dt1.png')
					},
					{
						name: '前洲街道',
						classname: 'dt2',
						url: require('@/assets/static/img/home1/dt2.png')
					},
					{
						name: '玉祁街道',
						classname: 'dt3',
						url: require('@/assets/static/img/home1/dt3.png')
					},
					{
						name: '洛社镇',
						classname: 'dt4',
						url: require('@/assets/static/img/home1/dt4.png')
					},
					{
						name: '前桥街道',
						classname: 'dt5',
						url: require('@/assets/static/img/home1/dt5.png')
					},
					{
						name: '阳山镇',
						classname: 'dt6',
						url: require('@/assets/static/img/home1/dt6.png')
					}
				],
				mappoint: [{
						name: '长安街道',
						classname: 'point0',
					}, {
						name: '堰桥街道',
						classname: 'point1',
					},
					{
						name: '前洲街道',
						classname: 'point2',
					},
					{
						name: '玉祁街道',
						classname: 'point3',
					},
					{
						name: '洛社镇',
						classname: 'point4',
					},
					{
						name: '前桥街道',
						classname: 'point5',
					},
					{
						name: '阳山镇',
						classname: 'point6',
					}
				],
				maptext: [{
						name: '长安街道',
						classname: 'text0',
					}, {
						name: '堰桥街道',
						classname: 'text1',
					},
					{
						name: '前洲街道',
						classname: 'text2',
					},
					{
						name: '玉祁街道',
						classname: 'text3',
					},
					{
						name: '洛社镇',
						classname: 'text4',
					},
					{
						name: '前桥街道',
						classname: 'text5',
					},
					{
						name: '阳山镇',
						classname: 'text6',
					}
				],
				floatList: [{
					classname: 'modelclass0'
				},
				{
					classname: 'modelclass1'
				},
				{
					classname: 'modelclass2'
				},
				{
					classname: 'modelclass3'
				},
				{
					classname: 'modelclass4'
				},
				{
					classname: 'modelclass5'
				},
				{
					classname: 'modelclass6'
				}]
				
			};
		},
		methods: {
			titclick(name,num){
				for(let a = 0;a<this.timer.length;a++){
					clearInterval(this.timer[a]);
					this.timer[a] = null;
				}
				this.timer = [];
				// this.titleclick(name,num,false);
					var _this = this;
					if(_this.oldflag == name){
						return;
					}
					_this.oldflag = name
					
					_this.titleFlag = null;
					_this.Flag = num;
					_this.isshowTitle = true;
					// this.$http(ApiSetting.DP_Facilities,{
					// 	xz: name
					// }).then(
						// res => {
							// if (res.data.success == true) {
								// let source = res.data.source;
								// if(JSON.stringify(source) != "{}"){
								// 	this.Facilities.ys = source.雨水.length > 0 ? source.雨水[0].clength : '--';
								// 	this.Facilities.ws = source.污水.length > 0 ? source.污水[0].clength : '--';
								// 	this.Facilities.jcj = source.检查井.length > 0 ? source.检查井[0].ccount : '--';
								// 	this.Facilities.pk = source.排口.length > 0 ? source.排口[0].ccount : '--';
								// 	this.Facilities.cctv = source.CCTV.length > 0 ? source.CCTV[0].clength : '--';
								// 	this.Facilities.qxd = source.缺陷点.length > 0 ? source.缺陷点[0].ccount : '--';
								// }
								
								let dom = document.getElementsByClassName('modelDiv');
								dom[0].classList.remove('rotate-in-y');
								let domf = document.getElementsByClassName('floatimg');
								for (let i = 0;i<domf.length;i++) {
									domf[i].classList.remove('fade-in');
									domf[i].classList.remove('fade-out');
								}
								setTimeout(() => {
										if(num == 0){
											domf[_this.mapareaList.length-1].classList.add('fade-out');
										}else{
											domf[num-1].classList.add('fade-out');
										}
									
									setTimeout(() => {
										_this.floatFlag = null;
										setTimeout(() => {
											dom[0].classList.add('rotate-in-y');
											domf[num].classList.add('fade-in');
											setTimeout(() => {
												_this.isshowTitle = false;
												_this.floatFlag = name;
												_this.titleFlag = name;
											},0)
										},100)
									},0)
									
								},0)
								
								setTimeout(() => {
									// 10秒后看是否有点击操作
									if(_this.oldflag == name){
										_this.timer.push(setInterval(() => {
											// var num1 = num;
											num++;
											if (num == _this.mapareaList.length) {
												num = 0;
											}
											_this.titleclick(_this.mapareaList[num].name,num,false)
										}, 8000))
									}
									
								},10000)
								
							// }
						// }
					// )
				
			},
			titleclick(name,num,flag){
				var _this = this;
				_this.titleFlag = null;
				_this.Flag = num;
				_this.isshowTitle = true;
				// this.$http(ApiSetting.DP_Facilities,{
				// 	xz: name
				// }).then(
				// 	res => {
						// if (res.data.success == true) {
							// let source = res.data.source;
							// if(JSON.stringify(source) != "{}"){
							// 	this.Facilities.ys = source.雨水.length > 0 ? source.雨水[0].clength : '--';
							// 	this.Facilities.ws = source.污水.length > 0 ? source.污水[0].clength : '--';
							// 	this.Facilities.jcj = source.检查井.length > 0 ? source.检查井[0].ccount : '--';
							// 	this.Facilities.pk = source.排口.length > 0 ? source.排口[0].ccount : '--';
							// 	this.Facilities.cctv = source.CCTV.length > 0 ? source.CCTV[0].clength : '--';
							// 	this.Facilities.qxd = source.缺陷点.length > 0 ? source.缺陷点[0].ccount : '--';
							// }
							
							let dom = document.getElementsByClassName('modelDivmain');
							dom[0].classList.remove('rotate-in-y');
							let domf = document.getElementsByClassName('floatimg');
							for (let i = 0;i<domf.length;i++) {
								domf[i].classList.remove('fade-in');
								domf[i].classList.remove('fade-out');
							}
							setTimeout(() => {
								if(flag){
									// domf[num].classList.add('fade-out');
								}else{
									if(num == 0){
										domf[_this.maptext.length-1].classList.add('fade-out');
									}else{
										domf[num-1].classList.add('fade-out');
									}
								}
								setTimeout(() => {
									_this.floatFlag = null;
									setTimeout(() => {
										dom[0].classList.add('rotate-in-y');
										domf[num].classList.add('fade-in');
										setTimeout(() => {
											_this.isshowTitle = false;
											_this.floatFlag = name;
											_this.titleFlag = name;
										},500)
									},100)
								},500)
								
							},0)
						// }
					// }
				// )
			}
		},
		mounted() {
			var _this = this;
			var num = 0;
			_this.titleclick(_this.mapareaList[num].name,num,true)
			_this.timer.push(setInterval(() => {
				num++;
				if (num == _this.mapareaList.length) {
					num = 0;
				}
				_this.titleclick(_this.mapareaList[num].name,num,false)
			}, 8000))

		},
		beforeDestroy() {
			for(let a = 0;a<this.timer.length;a++){
				clearInterval(this.timer[a]);
				this.timer[a] = null;
			}
			this.timer = [];
		},
	};
</script>

<style lang="less" scoped="scoped">
	@percent: 1;

	.homepageDivTop3 {
		.mapDiv {
			width:~"calc(7.84rem * @{percent})";
			height:~"calc(3.66rem * @{percent})";
			position: relative;
			left:~"calc((100% - 7.84rem * @{percent})/2)";
			top:~"calc((100% - 3.66rem * @{percent})/2)";
			background: url(../../../../assets/static/img/home1/map.png) no-repeat;
			background-size: 100% 100%;
		}

		.topDiv {
			width: 20%;
			height: 0.94rem;
			padding-right: 0.1rem;
			display: inline-block;
			&:last-child {
				padding-right: 0;
			}
		}
		
		.topVal{
			font-size: 0.24rem;
			font-weight: 600;
			color: #F08D6D;
		}
		.topLabel{
			font-size: 0.14rem;
			font-weight: 400;
			color: #BEE0FC;
		}
		.topImg{
			width: 0.47rem;
			vertical-align: middle;
			margin-top: 0.05rem;
		}
		.topLabelDiv{
			display: inline-block;
			vertical-align: middle;
			margin-left: 0.1rem;
			margin-top: 0.05rem;
		}

		.topDivBg {
			width: 100%;
			height: 100%;
			background: url(../../../../assets/static/img/home1/顶部背景.png) no-repeat;
			background-size: 100% 100%;
			padding: 0.1rem 0.2rem;
		}

		.mapDivBg {
			width: 100%;
			height: 100%;
			background: url(../../../../assets/static/img/home1/mapbg.png) no-repeat;
			background-size: 100% 100%;
			position: relative;
		}

		.maparea {
			position: absolute;
		}

		.dt0 {
			width:~"calc(1.24rem * @{percent})";
			height:~"calc(0.77rem * @{percent})";
			left:~"calc(6.6rem * @{percent})";
			top:~"calc(2.4rem * @{percent})";
		}

		.dt1 {
			width:~"calc(2.26rem * @{percent})";
			height:~"calc(1.75rem * @{percent})";
			left:~"calc(4.98rem * @{percent})";
			top:~"calc(1.35rem * @{percent})";
		}

		.dt2 {
			width:~"calc(2.38rem * @{percent})";
			height:~"calc(1.08rem * @{percent})";
			left:~"calc(3.98rem * @{percent})";
			top:~"calc(0.85rem * @{percent})";
		}

		.dt3 {
			width:~"calc(2.56rem * @{percent})";
			height:~"calc(1.24rem * @{percent})";
			left:~"calc(3.514rem * @{percent})";
			top:~"calc(0.004rem * @{percent})";
		}

		.dt4 {
			width:~"calc(4.02rem * @{percent})";
			height:~"calc(2.08rem * @{percent})";
			left:~"calc(1.6rem * @{percent})";
			top:~"calc(0.52rem * @{percent})";
		}

		.dt5 {
			width:~"calc(2.83rem * @{percent})";
			height:~"calc(0.97rem * @{percent})";
			left:~"calc(1.65rem * @{percent})";
			top:~"calc(1.62rem * @{percent})";
		}

		.dt6 {
			width:~"calc(2.02rem * @{percent})";
			height:~"calc(0.94rem * @{percent})";
			left:~"calc(0rem * @{percent})";
			top:~"calc(0.88rem * @{percent})";
		}
		.points{
			width:~"calc(0.6rem * @{percent})";
			height:~"calc(2.86rem * @{percent})";
			position: absolute;
			margin-top: ~"calc(-2.8rem * @{percent} + (0.27rem * @{percent}) / 2 + 0.05rem)";
			margin-left: ~"calc(-0.115rem * @{percent})";
		}
		.point {
			width:~"calc(0.38rem * @{percent})";
			height:~"calc(0.27rem * @{percent})";
			position: absolute;
		}

		.point0 {
			left:~"calc(7.2rem * @{percent})";
			top:~"calc(2.8rem * @{percent})";
		}
		.point1 {
			left:~"calc(5.5rem * @{percent})";
			top:~"calc(2.1rem * @{percent})";
		}

		.point2 {
			left:~"calc(4.9rem * @{percent})";
			top:~"calc(1.2rem * @{percent})";
		}

		.point3 {
			left:~"calc(5.2rem * @{percent})";
			top:~"calc(0.5rem * @{percent})";
		}

		.point4 {
			left:~"calc(3.5rem * @{percent})";
			top:~"calc(1.4rem * @{percent})";
		}

		.point5 {
			left:~"calc(3.5rem * @{percent})";
			top:~"calc(2.1rem * @{percent})";
		}

		.point6 {
			left:~"calc(1.2rem * @{percent})";
			top:~"calc(1.3rem * @{percent})";
		}

		.text {
			position: absolute;
			font-size: 0.14rem;
			color: #90BCE0;
			cursor: pointer;
		}

		.text0 {
			left:~"calc(6.6rem * @{percent})";
			top:~"calc(2.65rem * @{percent})";
		}

		.text1 {
			left:~"calc(5.4rem * @{percent})";
			top:~"calc(2.4rem * @{percent})";
		}

		.text2 {
			left:~"calc(5.3rem * @{percent})";
			top:~"calc(1.22rem * @{percent})";
		}

		.text3 {
			left:~"calc(4.5rem * @{percent})";
			top:~"calc(0.6rem * @{percent})";
		}

		.text4 {
			left:~"calc(2.9rem * @{percent})";
			top:~"calc(1.2rem * @{percent})";
		}

		.text5 {
			left:~"calc(2.6rem * @{percent})";
			top:~"calc(2.0rem * @{percent})";
		}

		.text6 {
			left:~"calc(0.6rem * @{percent})";
			top:~"calc(1.15rem * @{percent})";
		}
		.modelDiv {
			position: absolute;
			z-index: 2;
			padding-top: 0.2rem;
			
		}
		.modelDivmain{
			width: 4.0rem;
			background: url(../../../../assets/static/img/home1/弹窗.png) no-repeat;
			background-size: 100% 100%;
			padding-bottom: 0.2rem;
		}
		.modelCol {
			text-align: left;
			padding-left: 0.1rem;
			margin-top: 0.1rem;
		}
		
		.modelVal {
			color: #75b2da;
			font-size: 0.16rem;
			font-weight: 400;
		}
		
		.modelLabel {
			color: #008fff;
			font-size: 0.13rem;
			font-weight: 400;
		}
		.modelValmain{
			color: #BEE0FC;
			font-size: 0.14rem;
			font-weight: 400;
			display: inline-block;
			margin-left: 0.1rem;
		}
		.modelLabelmain {
			color: #BEE0FC;
			font-size: 0.14rem;
			font-weight: 400;
			display: inline-block;
		}
		.modelclass0{
			left: 1.0rem;
			top: -0.2rem;
		}
		.modelclass1{
			left: 0.1rem;
			top: -0.2rem;
		}
		.modelclass2{
			left: -1rem;
			top: -0.2rem;
		}
		.modelclass3{
			left: -1.3rem;
			top: 0.8rem;
		}
		.modelclass4{
			left: 4.5rem;
			top: 0rem;
		}
		.modelclass5{
			left: 4.5rem;
			top: -0.2rem;
		}
		.modelclass6{
			left: 2.5rem;
			top: -0.2rem;
		}
	}
</style>
