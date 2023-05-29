<template>
	<div class="video-fens">
		<div class="cell-players">
			<div :class="cellClass(i)" v-for="i in Number(layoutNum)" :data-key="i" :key="i">
				<div class="video-div">
					<!-- 点击遮罩蒙层，双击全屏，单击选中，层级7 -->
					<div class="tab-mb" @click="videoTap(i - 1)" @dblclick="apmull(i - 1)"></div>
					<!-- 绿色边框代表选中蒙层，层级8 -->
					<div v-show="i - 1 == chooseIndex && layoutNum != 1" class="tab-mb-active"></div>
					<!-- m3u8的视频播放方式 -->
					<div class="video-div video-divs" v-show="urlList[i - 1] && urlList[i - 1]['isPlay']">
						<!-- m3u8 -->
						<video :ref="'videoPlayer' + i" loop muted controls autoplay :id="'videoPlayer' + i" preload="auto"
							class="videoss video-js vjs-default-skin vjs-big-play-centered"></video>
						<!-- 视频名称图层，层级5 -->
						<div class="video-name" v-if="urlList[i - 1] && urlList[i - 1]['name']">
							{{ urlList[i - 1]['name'] || '' }}
						</div>

						<!-- 播放出错蒙层，层级4 -->
						<div class="flex flex_col flex_a_c flex_ju_c play-error"
							v-if="urlList[i - 1] && urlList[i - 1]['url'].length && urlList[i - 1].isError">
							<div class="font_16 c_white error-word">播放错误</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

/**
 * 分屏视频
 */

import 'videojs-contrib-hls'

import videojs from 'video.js'
import 'video.js/dist/video-js.css'
export default {
	data() {
		return {
			// layoutNum: 1,
			playerList: [], //  视频播放控件合集
			chooseIndex: -1, // 选中值   从 0 开始
			urlList: [], // 视频的code
			oldPlayList: [],
			layoutNum: 1, // 小窗口数量
			chooseYtIndex: -1, // 云台控制选择的是第几个
			thisCodeLength: 0, // 当前页面展示的视频数数据
			isFull: false, // 是否是全屏的状态
			// urlList: [
			// 	{
			// 		url: '',
			// 		code: '', // 主要用于rtsp视频流的拼接
			// 		name: '', // 名称
			// 		isPlay: true, // 视频播放播放
			// 		isError: false, // 播放是否出错
			// 		isEdit: true, // 视频是否可以直接进行编辑替换
			// 		isPlaying: false, // 视频是否在播放中,主要用于视频加载完可播放状态下才显示的操作文字等
			// 	},
			// ],
			options: {
				controls: true, // 是否显示控制条
				muted: true, //是否静音
				autoplay: false, //自动播放
				loop: true, //是否循环
				fluid: false, // 自适应宽高
				language: 'zh-CN', // 设置语言
				// aspectRatio: '3:1',
				inactivityTimeout: false,
				controlBar: {
					// 设置控制条组件
					/* 设置控制条里面组件的相关属性及显示与否
					'currentTimeDisplay':true,
					'timeDivider':true,
					'durationDisplay':true,
					'remainingTimeDisplay':false,
					volumePanel: {
							inline: false,
					},
					*/
					/* 使用children的形式可以控制每一个控件的位置，以及显示与否 */
					children: [
						{ name: 'playToggle' }, // 播放按钮
						{ name: 'currentTimeDisplay' }, // 当前已播放时间
						{ name: 'progressControl' }, // 播放进度条
						{ name: 'durationDisplay' }, // 总时间
						{
							// 倍数播放
							name: 'playbackRateMenuButton',
							playbackRates: [0.5, 1, 1.5, 2, 2.5],
						},
						{
							name: 'volumePanel', // 音量控制
							inline: false, // 不使用水平方式
						},
						{ name: 'FullscreenToggle' }, // 全屏
					],
				},
				language: 'zh-CN',
				poster: '', //播放前显示的视频画面，播放开始之后自动移除
				preload: 'auto', //预加载
				// width: 650,
				// height: 330,
				techOrder: ['html5', 'flvjs', 'flash'], // 兼容顺序
				flvjs: {
					mediaDataSource: {
						isLive: false,
						cors: true,
						withCredentials: false,
					},
				},
				sources: [],
			},
		}
	},
	watch: {
		layoutNum: {
			handler(val, oldval) { },
			// 深度观察监听
			immediate: true,
		},
	},
	mounted() {
		let _this = this
		// 关联手动全屏和自动全屏切换的操作
		$(window).resize(function () {
			if (_this.checkIsFullScreen()) {
				_this.isFull = true
			} else {
				_this.isFull = false
			}
		})
	},
	computed: {
		cellClass() {
			return function (index) {
				switch (Number(this.layoutNum)) {
					case 1:
						return ['cell-player-1']
					case 4:
						return ['cell-player-4']
					case 6:
						if (index == 1) return ['cell-player-6-1']
						if (index == 2) return ['cell-player-6-2']
						if (index == 3) return ['cell-player-6-3']
						return ['cell-player-6']
					case 8:
						if (index == 1) return ['cell-player-8-1']
						if (index == 2) return ['cell-player-8-2']
						if (index == 3) return ['cell-player-shu cell-player-8-3']
						if (index == 4) return ['cell-player-shu cell-player-8-4']
						return ['cell-player-8']
					case 9:
						return ['cell-player-9']
					case 16:
						return ['cell-player-16']
					default:
						break
				}
			}
		},
	},
	beforeDestroy() {
		this.playerList.forEach((item) => {
			if (item) {
				item.dispose()
			}
		})
		this.playerList = []
	},
	destroyed() { },
	methods: {
		// 第一次直接添加
		handelVideoUrl(code, reloadUrl, name) {
			const _this = this
			if (reloadUrl) {
				let videoUrl = {
					url: reloadUrl,
					code: code,
					name: name,
					isPlay: true,
					isError: false, // 是否播放出错
					isEdit: true, // 是否可以直接进行编辑操作
				}
				// 把播放列表的链接添加到存储里面
				this.urlList.push(videoUrl)
				// 判断设置当前选择的窗口
				if (this.urlList.length < this.layoutNum) {
					this.chooseIndex = this.urlList.length
				} else {
					this.chooseIndex = this.urlList.length - 1
				}
				this.$emit('changeVideoIndex', {
					chooseIndex: this.chooseIndex,
					maxIndex: this.urlList.length - 1,
				})
				// options 深层拷贝，防止有更改的时候相互影响
				let options = JSON.parse(JSON.stringify(this.options))
				options.sources = [this.makeUrlSource(reloadUrl)]

				let playerId = ''
				let playerOldLength = this.urlList.length
				playerId = 'videoPlayer' + playerOldLength
				this.$nextTick(() => {
					this.isCanPlay = true
					let videoPlayer = videojs(
						playerId,
						{
							...options,
						},
						function onPlayerReady() {
							this.on('loadstart', function () {
								_this.$set(_this.urlList[playerOldLength - 1], 'isError', false)
								_this.$set(_this.urlList[playerOldLength - 1], 'isPlaying', false)
							})
							this.on('playing', function () {
								_this.$set(_this.urlList[playerOldLength - 1], 'isPlaying', true)
							})
							this.on('error', function () {
								_this.$set(_this.urlList[playerOldLength - 1], 'isError', true)
								_this.$set(_this.urlList[playerOldLength - 1], 'isPlaying', false)
							})
						}
					)
					// 播放控件进行添加
					this.playerList.push(videoPlayer)
				})
			}
		},
		// 第二层次的数据添加
		handelVideoUrl2(code, reloadUrl, name, index) {
			const _this = this
			// 销毁添加以后，视频可以进行编辑操作
			this.$set(this.urlList[index], 'isPlay', true)
			this.$set(this.urlList[index], 'isEdit', true)
			// this.$set(this.urlList[index], 'isError', false)
			this.$set(this.urlList[index], 'code', code)
			this.$set(this.urlList[index], 'url', reloadUrl)
			this.$set(this.urlList[index], 'name', name)

			let options = JSON.parse(JSON.stringify(this.options))
			options.sources = [this.makeUrlSource(reloadUrl)]

			let playerId = 'videoPlayer' + (index + 1)
			console.log(playerId)

			this.$nextTick(() => {
				this.isCanPlay = true
				this.playerList[index].dispose()
				let videoPlayer = videojs(
					playerId,
					{
						...options,
					},
					function onPlayerReady() {
						this.on('loadstart', function () {
							console.log('数据加载')
							_this.$set(_this.urlList[index], 'isError', false)
							_this.$set(_this.urlList[index], 'isPlaying', false)
						})

						this.on('playing', function () {
							_this.$set(_this.urlList[index], 'isPlaying', true)
						})
						this.on('error', function () {
							console.log('数据报错')
							_this.$set(_this.urlList[index], 'isError', true)
							_this.$set(_this.urlList[index], 'isPlaying', false)
						})
					}
				)
				// 播放控件进行添加

				setTimeout(() => {
					this.playerList[index] = videoPlayer
				}, 1000)
			})
		},
		play(i) {
			this.playerList[i].play()
		},
		pause(i) {
			this.playerList[i].pause()
		},
		// 进行视频替换
		editUrl(code, src, name, index) {
			this.isCanPlay = true
			this.$set(this.urlList[index], 'isPlay', true)
			this.$set(this.urlList[index], 'isEdit', true)
			// this.$set(this.urlList[index], 'isError', false)
			this.$set(this.urlList[index], 'code', code)
			this.$set(this.urlList[index], 'url', src)
			this.$set(this.urlList[index], 'name', name)

			this.$nextTick(() => {
				this.playerList[index].src(this.makeUrlSource(src))
				this.playerList[index].load()
			})
		},
		// 编辑替换：字段设置
		editIsPlay(index, isPlay) {
			console.log(index)
			if (this.urlList[index]) {
				if (isPlay && this.urlList[index]['isEdit']) {
					this.$set(this.urlList[index], 'isPlay', isPlay)
				} else {
					this.$set(this.urlList[index], 'isPlay', isPlay)
				}

				if (!isPlay) {
					this.$set(this.urlList[index], 'isEdit', false)
				}
			}
		},
		// 编辑替换：视频替换
		resetEdit(code, src, name, index) {
			if (this.urlList[index]) {
				if (this.urlList[index]['isEdit']) {
					// 可直接编辑
					this.editUrl(code, src, name, index)
				} else {
					// 走销毁后添加
					this.handelVideoUrl2(code, src, name, index)
				}
			}
		},
		dispose() {
			if (this.videoPlayer) {
				this.videoPlayer.dispose()
			}
		},
		makeUrlSource(reloadUrl) {
			const url = reloadUrl.replace(/\s+/g, '')
			let sources = {}
			if (url.indexOf('rtmp') > -1) {
				//rtmp格式视频
				sources = [{ src: reloadUrl, type: 'rtmp/flv' }]
			} else if (url.lastIndexOf('.') > -1) {
				var playurl = url.substring(url.lastIndexOf('.') + 1)
				// console.log(playurl.split('?')[0])
				if (playurl === 'flv') {
					// console.log('flv格式视频')
					//flv格式视频
					sources = [{ src: reloadUrl, type: 'video/x-flv' }]
				} else if (playurl.split('?')[0] === 'flv') {
					//对**直播平台flv地址做特殊处理
					// console.log('flv格式视频')
					//flv格式视频
					sources = [{ src: reloadUrl, type: 'video/x-flv' }]
				} else if (playurl === 'm3u8') {
					//m3u8格式视频
					// console.log('m3u8格式视频')
					sources = [{ src: reloadUrl, type: 'application/x-mpegURL' }]
				} else {
					// console.log('其他格式视频')
					//其他格式视频
					sources = [{ src: reloadUrl, type: 'video/mp4' }]
				}
				return sources
			}
		},
		// 点击选择第几个
		videoTap(index) {
			if (this.chooseIndex == index) return
			// 判断选中的中间是否其余是未填充的
			if (index > this.thisCodeLength) {
				this.$message('此窗口暂不可选择', 'error')
				return
			}
			// 赋值点击选中框
			this.chooseIndex = index
			this.$emit('changeVideoIndex', {
				chooseIndex: index,
				maxIndex: 0,
			})
		},
		// 双击全屏
		apmull(index) {
			if (this.playerList[index].isError) return
			if (this.isFull) {
				this.isFull = false
				var de = document
				if (de.exitFullscreen) {
					de.exitFullscreen()
				} else if (de.mozCancelFullScreen) {
					de.mozCancelFullScreen()
				} else if (de.webkitCancelFullScreen) {
					de.webkitCancelFullScreen()
				}
			} else {
				this.isFull = true
				this.playerList[index].requestFullscreen()
			}
		},
		checkIsFullScreen() {
			var isFullScreen = document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen
			return isFullScreen == undefined ? false : isFullScreen
		},
	},
}
</script>

<style lang="scss">
.video-fens {
	width: 100%;
	height: 100%;
	background-color: #000;

	.video-div {
		width: 100%;
		height: 100%;
		position: relative;

		.video-js .vjs-control-bar {
			width: calc(100% - 6px);
			z-index: 10;
			left: 3px;
			bottom: 3px;
		}

		.tab-mb {
			position: absolute;
			width: 100%;
			height: calc(100% - 40px);
			background-color: rgba($color: #000000, $alpha: 0);
			top: 0;
			left: 0;
			z-index: 7;
		}

		.video-divs {
			.close-img {
				width: 0.28rem;
				height: 0.28rem;
				position: absolute;
				right: 0.08rem;
				bottom: 0.13rem;
				cursor: pointer;
			}

			// 播放出错蒙层
			.play-error {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				background-color: #000;
				z-index: 4;

				.img_noplay {
					width: 0.76rem;
					height: 0.64rem;
					margin-bottom: 0.46rem;
				}
			}

			// 视频名称图层
			.video-name {
				font-size: 0.2rem;
				color: #fff;
				font-weight: bold;
				position: absolute;
				padding: 0.2rem 0.25rem;
				top: 0;
				right: 0;
				z-index: 5;
			}

			// 唤醒云台控制小图标
			.to-controls {
				position: absolute;
				display: inline-block;
				height: 40px;
				line-height: 40px;
				bottom: 3px;
				right: 3px;
				z-index: 10;
				padding: 0 0.13rem;
				font-size: 0.17rem;
				letter-spacing: 0.01rem;
				color: #fff;
				cursor: pointer;
			}
		}
	}

	.video-js {
		width: 100%;
		height: 100%;
	}

	.cell-players {
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		border: 1px solid #fff;
		position: relative;

		.tab-mb-active {
			position: absolute;
			width: 100.3%;
			height: 100.4%;
			background-color: rgba($color: #000000, $alpha: 0);
			top: -0.2%;
			left: -0.1%;
			border: 3px solid #38aaa7;
			z-index: 8;
		}
	}

	.cell-player {
		border: 1px solid #fff;
	}

	.cell-player-4 {
		width: 50%;
		height: 50% !important;
		box-sizing: border-box;
		border-bottom: 1px solid #fff;
		border-left: 1px solid #fff;
	}

	.cell-player-1 {
		width: 100%;
		box-sizing: border-box;
		border: 1px solid #fff;
	}

	.cell-player-6-1 {
		width: 66.66%;
		height: 66.66% !important;
		box-sizing: border-box;
		border-bottom: 1px solid #fff;
		border-left: 1px solid #fff;
	}

	.cell-player-6-2 {
		width: 33.33%;
		height: 33.33% !important;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid #fff;
		border-left: 1px solid #fff;

		.error-word {
			font-size: 0.17rem;
		}
	}

	.cell-player-6-3 {
		position: absolute;
		right: 0;
		top: 33.33%;
		width: 33.33%;
		height: 33.33%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid #fff;
		border-left: 1px solid #fff;

		.error-word {
			font-size: 0.17rem;
		}
	}

	.cell-player-6-none {
		display: none;
	}

	.cell-player-6-2-cell {
		width: 100%;
		height: 50% !important;
		box-sizing: border-box;
		border-bottom: 1px solid #fff;
		border-left: 1px solid #fff;
	}

	.cell-player-6 {
		width: 33.33%;
		height: 33.33% !important;
		box-sizing: border-box;
		border-left: 1px solid #fff;

		.error-word {
			font-size: 0.17rem;
		}
	}

	.cell-player-8-1 {
		width: 75%;
		height: 75% !important;
		box-sizing: border-box;
		border-bottom: 1px solid #fff;
		border-left: 1px solid #fff;
	}

	.cell-player-shu {
		width: 25%;
		height: 25% !important;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		right: 0;
		position: absolute;

		.img_noplay {
			width: 0.63rem !important;
			height: auto !important;
		}

		.error-word {
			font-size: 0.13rem;
		}
	}

	.cell-player-8-2 {
		width: 25%;
		height: 25% !important;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid #fff;
		border-left: 1px solid #fff;

		.img_noplay {
			width: 0.63rem !important;
			height: auto !important;
		}

		.error-word {
			font-size: 0.13rem;
		}
	}

	.cell-player-8-3 {
		top: 25%;
		border-bottom: 1px solid #fff;
		border-left: 1px solid #fff;
	}

	.cell-player-8-4 {
		top: 50%;
		border-bottom: 1px solid #fff;
		border-left: 1px solid #fff;
	}

	.cell-player-8-none {
		display: none;
	}

	.cell-player-8-2-cell {
		width: 100%;
		height: 33.3% !important;
		box-sizing: border-box;
		border-bottom: 1px solid #fff;
		border-left: 1px solid #fff;
	}

	.cell-player-8 {
		width: 25%;
		height: 25% !important;
		box-sizing: border-box;
		border-left: 1px solid #fff;

		.img_noplay {
			width: 0.63rem !important;
			height: auto !important;
		}

		.error-word {
			font-size: 0.13rem;
		}
	}

	.cell-player-9 {
		width: 33.33%;
		height: 33.33% !important;
		box-sizing: border-box;
	}

	.cell-player-16 {
		width: 25%;
		height: 25% !important;
		box-sizing: border-box;
	}

	.cell {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
}
</style>
