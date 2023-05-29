<template>
	<div class="flex flex_ju_sb videos-page">
		<template v-if="treeData.length">
			<!-- 左边列表 -->
			<div class="lefts">
				<div class="flex flex_a_c titles">
					<span class="title-line"></span>
					<span class="font_16 c_45 bold">视频列表</span>
				</div>
				<div class="video-trees">
					<el-tree ref="trees" :data="treeData" :props="defaultProps" highlight-current node-key="id"
						@node-click="handleNodeClickS" :default-expanded-keys="[1]">
						<template #default="{ node, data }">
							<span class="custom-tree-node">
								<span v-if="data.videos && data.videos.length">{{ node.label }}</span>
								<span v-else :class="{ 'video-choose-active': playUrlList.indexOf(data.vurl) > -1 }">
									{{ node.label }}
								</span>
							</span>
						</template>
					</el-tree>
				</div>
			</div>
			<!-- 中间播放 -->
			<div class="centers">
				<div class="videos" v-if="isShowVideos">
					<videos-all ref="hlsVideoPlayer" style="width: 100%; height: 100%"
						@changeVideoIndex="changeVideoIndex"></videos-all>
				</div>
				<div class="videos flex flex_col flex_a_c flex_ju_c play-error" v-else>
					<div class="table-emptyword">请选择视频</div>
				</div>
			</div>
			<!-- 右边视频分栏操作 -->
			<div class="rights">
				<div class="flex flex_a_c titles">
					<span class="title-line"></span>
					<span class="font_16 c_45 bold">视频分栏</span>
				</div>
				<div class="control-wrap">
					<div class="sets-wrap">
						<div class="t_c cursor set_div" v-for="(item, index) in setImgs" :key="index"
							:class="{ 'set-div-active': item.name == layoutName }" @click="changeLayout(item)">
							{{ item.name }}
						</div>
					</div>
				</div>
			</div>
		</template>
		<div class="noSheBei" v-else>
			<div class="table-emptyword">暂无数据</div>
		</div>
	</div>
</template>

<script>
/**
 * @description 视频九宫格/分栏demo
 * 代码来源：https://www.jianshu.com/p/d8248bf632bd
 */
import videosAll from './child/videosAll.vue'
export default {
	components: { videosAll },
	data() {
		return {
			// 左侧树形监控列表
			treeData: [
				{
					id: 1,
					vname: '示例1',
					videos: [
						{
							id: 11,
							vcode: '1111',
							vname: '视频1-1',
							vurl: 'http://vjs.zencdn.net/v/oceans.mp4',
						},
						{
							id: 12,
							vcode: '1212',
							vname: '视频1-2',
							vurl: 'http://vjs.zencdn.net/v/oceans.webm',
						},
						{
							id: 13,
							vcode: '1313',
							vname: '视频1-3',
							vurl: 'http://vjs.zencdn.net/v/oceans.ogv',
						},
						{
							id: 14,
							vcode: '1414',
							vname: '视频1-4',
							vurl: '',
						},
						{
							id: 15,
							vcode: '1515',
							vname: '视频1-5',
							vurl: '',
						},
						{
							id: 16,
							vcode: '1616',
							vname: '视频1-6',
							vurl: '',
						},
					],
				},
			],
			defaultProps: {
				children: 'videos',
				label: 'vname',
			},
			// 视频页面的分栏设置
			setImgs: [
				{
					name: '1×1',
					nums: 1,
				},
				{
					name: '2×2',
					nums: 4,
				},
				{
					name: '1+5',
					nums: 6,
				},
				{
					name: '1+7',
					nums: 8,
				},
			],
			layoutName: '1×1', // 分栏管理的选中值
			layoutNum: 1, // 分栏窗口数
			oldLayoutNum: 1, // 旧的分栏窗口数
			isShowVideos: false,
			playCodeList: [], // 选中的视频集合
			playUrlList: [], // 选中播放视频的地址
			playNameList: [], // 选中播放视频的名称
			chooseIndex: 0, // 当前选中的第几个
			chooseMaxIndex: 0, // 分栏切换时，最多切换到了几个分栏
		}
	},
	mounted() { },
	methods: {
		// 监控列表数被点击
		handleNodeClickS(data) {
			// 说明点击的是第一层，拦截点击事件
			if (data.videos && data.videos.length) return
			// 点击的数据
			let nodes = this.$refs.trees.getCurrentNode()
			// 获取点击数据的视频地址
			let vurl = nodes.vurl || ''
			let vcode = nodes.vcode || ''
			let vname = nodes.vname || '' // 视频名称

			// 判断视频为空
			if (vurl && vurl != '' && vurl != ' ') {
				// 视频显示
				this.isShowVideos = true

				this.$nextTick(() => {
					// 视频已选中播放
					if (this.playCodeList.indexOf(vcode) > -1) {
						this.$message('该视频已选中播放', 'error')
						return
					}
					// 判断分栏情况
					// 只有一栏 ==== 没有数据进行添加，有数据进行编辑替换
					if (this.layoutNum == 1) {
						if (!this.playCodeList.length) {
							this.$refs.hlsVideoPlayer.handelVideoUrl(vcode, vurl, vname, 0)
							// 把当前的链接放进去
							this.playCodeList.push(vcode)
							this.playUrlList.push(vurl)
							this.playNameList.push(vname)
						} else {
							// 如果已经有正在播放的视频，进行视频的替换
							this.playCodeList = [vcode]
							this.playUrlList = [vurl]
							this.playNameList = [vname]
							this.$refs.hlsVideoPlayer.editUrl(vcode, vurl, vname, 0)
						}
					} else {
						// 多栏情况
						// 还有播放窗口：当选选中窗口数大于已选中播放的列表
						if (this.layoutNum > this.playCodeList.length) {
							// 选中切换的是正在播放的，直接编辑替换
							if (this.chooseIndex < this.playCodeList.length) {
								this.$refs.hlsVideoPlayer.editIsPlay(this.chooseIndex, true)
								this.$set(this.playCodeList, this.chooseIndex, vcode)
								this.$set(this.playUrlList, this.chooseIndex, vurl)
								this.$set(this.playNameList, this.chooseIndex, vname)
								this.$refs.hlsVideoPlayer.resetEdit(vcode, vurl, vname, this.chooseIndex)
							} else {
								// 判断是否是已经添加过的
								// 没有添加过，直接添加
								if (this.chooseIndex > this.chooseMaxIndex) {
									this.playCodeList.push(vcode)
									this.playUrlList.push(vurl)
									this.playNameList.push(vname)
									this.$refs.hlsVideoPlayer.handelVideoUrl(vcode, vurl, vname)
								} else {
									this.$refs.hlsVideoPlayer.editIsPlay(this.chooseIndex, true)
									this.$set(this.playCodeList, this.chooseIndex, vcode)
									this.$set(this.playUrlList, this.chooseIndex, vurl)
									this.$set(this.playNameList, this.chooseIndex, vname)
									this.$refs.hlsVideoPlayer.resetEdit(vcode, vurl, vname, this.chooseIndex)
								}
							}
						} else {
							// 添加到最后一个的时候，判断是否是从少窗口切换来的
							this.$refs.hlsVideoPlayer.editIsPlay(this.chooseIndex, true)
							this.$set(this.playCodeList, this.chooseIndex, vcode)
							this.$set(this.playUrlList, this.chooseIndex, vurl)
							this.$set(this.playNameList, this.chooseIndex, vname)
							this.$refs.hlsVideoPlayer.resetEdit(vcode, vurl, vname, this.chooseIndex)
						}

						this.$refs.hlsVideoPlayer.thisCodeLength = this.playCodeList.length
					}
				})
			} else {
				if (this.layoutNum == 1) {
					this.isShowVideos = false
				}
				this.$message('请先添加自己的视频', 'error')
			}
		},
		changeVideoIndex({ chooseIndex, maxIndex }) {
			this.chooseIndex = chooseIndex
			if (this.chooseMaxIndex < maxIndex) {
				this.chooseMaxIndex = maxIndex
			}
		},
		// 分栏管理选中改变
		changeLayout({ name, nums }) {
			debugger
			// 当前分栏重复选择
			if (this.layoutName == name) return
			// 没有选中视频的时候，不允许切换分栏
			if (!this.playCodeList.length) return
			// 赋值上一个分栏窗口数，用作对比
			this.oldLayoutNum = this.layoutNum
			// 赋值页面的窗口数
			this.$refs.hlsVideoPlayer.layoutNum = nums

			let hadCodeList = []
			let hadUrlList = []
			let hadNameList = []
			// TODO 暂时没必要进行，无链接的视频添加时已进行了判断处理，此步骤无用
			this.playCodeList.forEach((item, index) => {
				// 剔除为空的情况，进行数据重新添加
				if (item != '') {
					hadCodeList.push(item)
					hadUrlList.push(this.playUrlList[index])
					hadNameList.push(this.playNameList[index])
				}
			})

			// 如果选中切换的窗口屏幕小于当前展示的屏幕数，直接替换已经存在的，把多余的隐藏播放
			// 说明：为什么是隐藏而不是直接销毁删除
			// 答：直接删除会造成再次赋值视频无法播放的问题
			if (nums < this.layoutNum) {
				// 截取当前展示的前几个
				hadCodeList = hadCodeList.slice(0, nums)
				hadUrlList = hadUrlList.slice(0, nums)
				hadNameList = hadNameList.slice(0, nums)
				// 赋值当前
				this.playCodeList = [...hadCodeList]
				this.playUrlList = [...hadUrlList]
				this.playNameList = [...hadNameList]
				this.$refs.hlsVideoPlayer.thisCodeLength = hadCodeList.length

				setTimeout(() => {
					let chooseMaxIndex = this.chooseMaxIndex
					chooseMaxIndex = chooseMaxIndex + 1
					if (chooseMaxIndex == 3 || chooseMaxIndex == 5 || chooseMaxIndex == 7) {
						chooseMaxIndex = chooseMaxIndex + 1
					} else {
						chooseMaxIndex = chooseMaxIndex
					}
					for (let i = 0; i < chooseMaxIndex; i++) {
						if (hadCodeList[i] && hadCodeList[i] != '') {
							// 修改赋值
							this.$refs.hlsVideoPlayer.editIsPlay(i, true)
						} else {
							this.$refs.hlsVideoPlayer.editIsPlay(i, false)
						}
					}
				}, 400)
			} else {
				this.playCodeList = hadCodeList
				this.playUrlList = hadUrlList
				this.playNameList = hadNameList
				this.$refs.hlsVideoPlayer.thisCodeLength = hadCodeList.length

				for (let i = 0; i < hadCodeList.length; i++) {
					this.$refs.hlsVideoPlayer.editIsPlay(i, true)
				}
			}
			if (nums == this.playCodeList.length) {
				this.$refs.hlsVideoPlayer.chooseIndex = this.playCodeList.length - 1
				this.chooseIndex = this.playCodeList.length - 1
			} else {
				this.$refs.hlsVideoPlayer.chooseIndex = this.playCodeList.length
				this.chooseIndex = this.playCodeList.length
			}

			this.layoutName = name
			this.layoutNum = nums
		},
	},
}
</script>

<style lang="scss" scoped>
.videos-page {
	height: 100%;
	padding-bottom: 10px;
	text-align: left;
	background-color: #ecf1f4;
	padding-top: 10px;

	.titles {
		padding: 0.25rem 0.28rem;

		.title-line {
			display: inline-block;
			width: 5px;
			height: 18px;
			background: #6196f6;
			margin-right: 0.19rem;
		}
	}

	.lefts {
		float: left;
		width: 20%;
		height: 100%;
		background: #ffffff;
		border-radius: 15px;

		.titles {
			border-bottom: 1px solid #f1f1f1;
		}

		.video-choose-active {
			color: #6196f6;
		}
	}

	.centers {
		float: left;
		width: 60%;
		height: 100%;
		background: #ffffff;
		border-radius: 15px;

		.videos {
			width: 100%;
			height: 100%;
		}

		.play-error {
			.table-noimg {
				width: 3.13rem;
			}

			.table-emptyword {
				text-align: center;
				padding-top: 0.75rem;
				font-size: 0.2rem;
				color: #797979;
			}
		}
	}

	.rights {
		float: left;
		width: 20%;
		height: 100%;
		background: #ffffff;
		border-radius: 15px;

		.titles {
			border-bottom: 1px solid #f1f1f1;
		}

		.control-wrap {
			margin-top: 0.19rem;
		}

		.sets-wrap {
			margin-top: 0.04rem;

			.set_div {
				width: 1.5rem;
				height: 50px;
				margin-top: 0.4rem;
				margin-left: 0.42rem;
				color: #6196f6;
				font-size: 20px;
				text-align: center;
				line-height: 50px;
				background-color: #dce5f6;
				cursor: pointer;

				&:hover {
					background-color: #8eade5;
					color: #fff;
				}
			}

			.set-div-active {
				background-color: #8eade5;
				color: #fff;
			}
		}
	}
}

.noSheBei {
	position: relative;
	width: 100%;
	height: 100%;
	border-radius: 15px;
	background: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.table-emptyword {
		padding-top: 0.75rem;
		color: #797979;
		font-size: 0.17rem;
	}
}
</style>
<style lang="scss">
.video-trees {
	height: 91%;
	overflow-y: scroll;

	.el-tree-node__content {
		height: 0.44rem;
		color: #454545;
		font-size: 0.17rem;
	}

	.el-tree-node.is-current>.el-tree-node__content {
		background-color: #e7f1f3 !important;
	}
}
</style>
