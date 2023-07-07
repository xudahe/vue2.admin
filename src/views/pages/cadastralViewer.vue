<!--土地清册-->
<style scoped>
.demo-upload-list {
    display: inline-block;
    width: 180px;
    height: 150px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    /* box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); */
    margin-right: 4px;
}


.demo-upload-list:hover {
    background: rgba(0, 0, 0, 0.2);
}

.demo-upload-list img {
    width: 100%;
    height: 80%;
}

.demo-upload-list-cover {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
}

.demo-upload-list:hover .demo-upload-list-cover {
    display: block;
}

.demo-upload-list-cover i {
    color: #fff;
    font-size: 28px;
    cursor: pointer;
    margin: 60 2px;
}
</style>
<style>
.photoviewer-modal {
    z-index: 2050 !important;
}
</style>
<template>
    <Row style="height: 100%;padding:10px">
        <Col span="4" style="height: 100%;">
        <Anchor show-ink container="#imgbox" @on-select="scroll">
            <template v-for="(item, key) in imglist">
                <AnchorLink :href="'#scroll_' + key" :title="item.title" :key="key" />
            </template>
        </Anchor>
        </Col>
        <Col span="20" style="height: 100%;overflow-y:auto;">
        <div id="imgbox">
            <div v-for="(item, key) in imglist" style="margin:10px" :id="'scroll_' + key" :name="item.title" :key="key">
                <template>
                    <h2>{{ item.title }}</h2>
                    <div class="demo-upload-list" v-for="(child, index) in item.cadastrals" :key="index">
                        <template>
                            <el-image :src="child.thumb" lazy style="width: 100%;height: 118px;" :initial-index="child.key"
                                :preview-src-list="getSrcList(child.key)" z-index="99999999"></el-image>
                            <!-- <img :src="child.thumb" v-if="child.extension == '.jpg' && child.src !== ''">
                            <div class="demo-upload-list-cover">
                                <Icon type="ios-eye-outline" @click.native="handleView(item.cadastrals, index)"></Icon>
                            </div> -->
                            <div style="position: absolute;margin-top: -45px;width: 100%;height: 40px;">{{ child.title }}
                            </div>
                        </template>
                    </div>
                </template>
            </div>
        </div>
        </Col>
    </Row>
</template>
<script>
import PhotoViewer from "photoviewer";
import "photoviewer/dist/photoviewer.css";
export default {
    name: "cadastralViewer",
    data() {
        return {
            imglist: [],
            urlList: []
        };
    },
    methods: {
        getSrcList(index) {
            return this.urlList.slice(index).concat(this.urlList.slice(0, index))
        },
        getImage() {
            let imglist = [
                {
                    "title": "01城市规划",
                    "extension": null,
                    "src": null,
                    "thumb": null,
                    "cadastrals": [
                        {
                            "title": "1城规1-江北新区城市总体规划.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/01城市规划/1城规1-江北新区城市总体规划.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/01城市规划/thumb/1城规1-江北新区城市总体规划.jpg"
                        },
                        {
                            "title": "1城规2-江北新区城市规划.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/01城市规划/1城规2-江北新区城市规划.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/01城市规划/thumb/1城规2-江北新区城市规划.jpg"
                        },
                        {
                            "title": "1城规3- 中央商务区城市规划.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/01城市规划/1城规3- 中央商务区城市规划.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/01城市规划/thumb/1城规3- 中央商务区城市规划.jpg"
                        },
                        {
                            "title": "1城规4-1- 中央商务区城市规划市政道路总.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/01城市规划/1城规4-1- 中央商务区城市规划市政道路总.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/01城市规划/thumb/1城规4-1- 中央商务区城市规划市政道路总.jpg"
                        },
                        {
                            "title": "1城规4-2- 中央商务区城市规划市政道路分.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/01城市规划/1城规4-2- 中央商务区城市规划市政道路分.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/01城市规划/thumb/1城规4-2- 中央商务区城市规划市政道路分.jpg"
                        }
                    ]
                },
                {
                    "title": "02土地利用规划",
                    "extension": null,
                    "src": null,
                    "thumb": null,
                    "cadastrals": [
                        {
                            "title": "2土规1-江北新区土地规划.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/02土地利用规划/2土规1-江北新区土地规划.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/02土地利用规划/thumb/2土规1-江北新区土地规划.jpg"
                        },
                        {
                            "title": "2土规2-1-中央商务区调整完善前.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/02土地利用规划/2土规2-1-中央商务区调整完善前.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/02土地利用规划/thumb/2土规2-1-中央商务区调整完善前.jpg"
                        },
                        {
                            "title": "2土规2-2-中央商务区调整完善后.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/02土地利用规划/2土规2-2-中央商务区调整完善后.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/02土地利用规划/thumb/2土规2-2-中央商务区调整完善后.jpg"
                        },
                        {
                            "title": "2土规2-3-中央商务区中心城区布局调整.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/02土地利用规划/2土规2-3-中央商务区中心城区布局调整.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/02土地利用规划/thumb/2土规2-3-中央商务区中心城区布局调整.jpg"
                        },
                        {
                            "title": "2土规2-4- 中央商务区布局调整后.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/02土地利用规划/2土规2-4- 中央商务区布局调整后.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/02土地利用规划/thumb/2土规2-4- 中央商务区布局调整后.jpg"
                        },
                        {
                            "title": "2土规2-4-土规综合.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/02土地利用规划/2土规2-4-土规综合.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/02土地利用规划/thumb/2土规2-4-土规综合.jpg"
                        },
                        {
                            "title": "2土规3-中央商务区青龙绿带.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/02土地利用规划/2土规3-中央商务区青龙绿带.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/02土地利用规划/thumb/2土规3-中央商务区青龙绿带.jpg"
                        }
                    ]
                },
                {
                    "title": "03土地利用现状",
                    "extension": null,
                    "src": null,
                    "thumb": null,
                    "cadastrals": [
                        {
                            "title": "3现状1-中央商务区土地现状.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/03土地利用现状/3现状1-中央商务区土地现状.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/03土地利用现状/thumb/3现状1-中央商务区土地现状.jpg"
                        }
                    ]
                },
                {
                    "title": "04征转用地",
                    "extension": null,
                    "src": null,
                    "thumb": null,
                    "cadastrals": [
                        {
                            "title": "4征转1-中央商务区历年批次汇总(2002-2020).jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/4征转1-中央商务区历年批次汇总(2002-2020).jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/thumb/4征转1-中央商务区历年批次汇总(2002-2020).jpg"
                        },
                        {
                            "title": "4征转2-1-中央商务区2002-2015年批次.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/4征转2-1-中央商务区2002-2015年批次.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/thumb/4征转2-1-中央商务区2002-2015年批次.jpg"
                        },
                        {
                            "title": "4征转2-2-中央商务区2016-2020年批次.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/4征转2-2-中央商务区2016-2020年批次.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/thumb/4征转2-2-中央商务区2016-2020年批次.jpg"
                        },
                        {
                            "title": "4征转3-1-中央商务区2016年2批次.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/4征转3-1-中央商务区2016年2批次.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/thumb/4征转3-1-中央商务区2016年2批次.jpg"
                        },
                        {
                            "title": "4征转3-2-中央商务区2017年2批次.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/4征转3-2-中央商务区2017年2批次.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/thumb/4征转3-2-中央商务区2017年2批次.jpg"
                        },
                        {
                            "title": "4征转3-3-中央商务区2017年5批次.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/4征转3-3-中央商务区2017年5批次.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/thumb/4征转3-3-中央商务区2017年5批次.jpg"
                        },
                        {
                            "title": "4征转3-4-中央商务区2017年10批次.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/4征转3-4-中央商务区2017年10批次.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/thumb/4征转3-4-中央商务区2017年10批次.jpg"
                        },
                        {
                            "title": "4征转3-5-中央商务区2018年1批次.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/4征转3-5-中央商务区2018年1批次.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/thumb/4征转3-5-中央商务区2018年1批次.jpg"
                        },
                        {
                            "title": "4征转3-6-中央商务区2018年5批次.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/4征转3-6-中央商务区2018年5批次.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/thumb/4征转3-6-中央商务区2018年5批次.jpg"
                        },
                        {
                            "title": "4征转3-7-中央商务区2018年8批次.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/4征转3-7-中央商务区2018年8批次.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/thumb/4征转3-7-中央商务区2018年8批次.jpg"
                        },
                        {
                            "title": "4征转3-8-中央商务区2019年1批次.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/4征转3-8-中央商务区2019年1批次.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/04征转用地/thumb/4征转3-8-中央商务区2019年1批次.jpg"
                        }
                    ]
                },
                {
                    "title": "05拆迁",
                    "extension": null,
                    "src": null,
                    "thumb": null,
                    "cadastrals": [
                        {
                            "title": "5拆迁1-城规.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/05拆迁/5拆迁1-城规.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/05拆迁/thumb/5拆迁1-城规.jpg"
                        },
                        {
                            "title": "5拆迁2-土规.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/05拆迁/5拆迁2-土规.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/05拆迁/thumb/5拆迁2-土规.jpg"
                        },
                        {
                            "title": "5拆迁3-影像.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/05拆迁/5拆迁3-影像.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/05拆迁/thumb/5拆迁3-影像.jpg"
                        }
                    ]
                },
                {
                    "title": "06土地出让",
                    "extension": null,
                    "src": null,
                    "thumb": null,
                    "cadastrals": [
                        {
                            "title": "6土地出让1-城规.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/06土地出让/6土地出让1-城规.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/06土地出让/thumb/6土地出让1-城规.jpg"
                        },
                        {
                            "title": "6土地出让2-土规.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/06土地出让/6土地出让2-土规.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/06土地出让/thumb/6土地出让2-土规.jpg"
                        },
                        {
                            "title": "6土地出让3-影像.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/06土地出让/6土地出让3-影像.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/06土地出让/thumb/6土地出让3-影像.jpg"
                        }
                    ]
                },
                {
                    "title": "07土地收储",
                    "extension": null,
                    "src": null,
                    "thumb": null,
                    "cadastrals": [
                        {
                            "title": "7土地收储1-中央商务区2019.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/07土地收储/7土地收储1-中央商务区2019.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/07土地收储/thumb/7土地收储1-中央商务区2019.jpg"
                        }
                    ]
                },
                {
                    "title": "08建设区域",
                    "extension": null,
                    "src": null,
                    "thumb": null,
                    "cadastrals": [
                        {
                            "title": "8建设区域1-已建、在建及拟建（已出让）区域.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/08建设区域/8建设区域1-已建、在建及拟建（已出让）区域.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/08建设区域/thumb/8建设区域1-已建、在建及拟建（已出让）区域.jpg"
                        },
                        {
                            "title": "8建设区域2-可建设区域（扣除已建、在建和拟建土地）.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/08建设区域/8建设区域2-可建设区域（扣除已建、在建和拟建土地）.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/08建设区域/thumb/8建设区域2-可建设区域（扣除已建、在建和拟建土地）.jpg"
                        },
                        {
                            "title": "8建设区域3-近期可建设区域（符合两规，不涉及拆迁地块）.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/08建设区域/8建设区域3-近期可建设区域（符合两规，不涉及拆迁地块）.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/08建设区域/thumb/8建设区域3-近期可建设区域（符合两规，不涉及拆迁地块）.jpg"
                        },
                        {
                            "title": "8建设区域4-近期可建设区域（现状国有建设用地）.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/08建设区域/8建设区域4-近期可建设区域（现状国有建设用地）.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/08建设区域/thumb/8建设区域4-近期可建设区域（现状国有建设用地）.jpg"
                        },
                        {
                            "title": "8建设区域5-近期可建设区域（需要征转用地）.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/08建设区域/8建设区域5-近期可建设区域（需要征转用地）.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/08建设区域/thumb/8建设区域5-近期可建设区域（需要征转用地）.jpg"
                        },
                        {
                            "title": "8建设区域6-远期可建设区域.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/08建设区域/8建设区域6-远期可建设区域.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/08建设区域/thumb/8建设区域6-远期可建设区域.jpg"
                        }
                    ]
                },
                {
                    "title": "09两大迁建项目",
                    "extension": null,
                    "src": null,
                    "thumb": null,
                    "cadastrals": [
                        {
                            "title": "9-1两大迁建项目新址-城规.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/09两大迁建项目/9-1两大迁建项目新址-城规.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/09两大迁建项目/thumb/9-1两大迁建项目新址-城规.jpg"
                        },
                        {
                            "title": "9-2两大迁建项目新址.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/09两大迁建项目/9-2两大迁建项目新址.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/09两大迁建项目/thumb/9-2两大迁建项目新址.jpg"
                        },
                        {
                            "title": "9-3两大迁建项目.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/09两大迁建项目/9-3两大迁建项目.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/09两大迁建项目/thumb/9-3两大迁建项目.jpg"
                        },
                        {
                            "title": "9-4警务技能训练基地.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/09两大迁建项目/9-4警务技能训练基地.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/09两大迁建项目/thumb/9-4警务技能训练基地.jpg"
                        },
                        {
                            "title": "9-5警务技能训练基地.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/09两大迁建项目/9-5警务技能训练基地.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/09两大迁建项目/thumb/9-5警务技能训练基地.jpg"
                        },
                        {
                            "title": "9-6警务技能训练基地.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/09两大迁建项目/9-6警务技能训练基地.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/09两大迁建项目/thumb/9-6警务技能训练基地.jpg"
                        }
                    ]
                },
                {
                    "title": "10土地成熟度",
                    "extension": null,
                    "src": null,
                    "thumb": null,
                    "cadastrals": [
                        {
                            "title": "10土地成熟度分析1-城规1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/10土地成熟度/10土地成熟度分析1-城规1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/10土地成熟度/thumb/10土地成熟度分析1-城规1.jpg"
                        },
                        {
                            "title": "10土地成熟度分析1-城规2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/10土地成熟度/10土地成熟度分析1-城规2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/10土地成熟度/thumb/10土地成熟度分析1-城规2.jpg"
                        },
                        {
                            "title": "10土地成熟度分析2-土规1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/10土地成熟度/10土地成熟度分析2-土规1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/10土地成熟度/thumb/10土地成熟度分析2-土规1.jpg"
                        },
                        {
                            "title": "10土地成熟度分析2-土规2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/10土地成熟度/10土地成熟度分析2-土规2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/10土地成熟度/thumb/10土地成熟度分析2-土规2.jpg"
                        },
                        {
                            "title": "10土地成熟度分析3-影像1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/10土地成熟度/10土地成熟度分析3-影像1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/10土地成熟度/thumb/10土地成熟度分析3-影像1.jpg"
                        },
                        {
                            "title": "10土地成熟度分析3-影像2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/10土地成熟度/10土地成熟度分析3-影像2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/10土地成熟度/thumb/10土地成熟度分析3-影像2.jpg"
                        }
                    ]
                },
                {
                    "title": "11片区图件",
                    "extension": null,
                    "src": null,
                    "thumb": null,
                    "cadastrals": [
                        {
                            "title": "1-1城规-隧道片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/1-1城规-隧道片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/1-1城规-隧道片区.jpg"
                        },
                        {
                            "title": "1-2土规-隧道片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/1-2土规-隧道片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/1-2土规-隧道片区.jpg"
                        },
                        {
                            "title": "1-3现状-隧道片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/1-3现状-隧道片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/1-3现状-隧道片区.jpg"
                        },
                        {
                            "title": "1-4征转-隧道片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/1-4征转-隧道片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/1-4征转-隧道片区.jpg"
                        },
                        {
                            "title": "1-5拆迁-隧道口片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/1-5拆迁-隧道口片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/1-5拆迁-隧道口片区.jpg"
                        },
                        {
                            "title": "1-6土地收储-隧道片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/1-6土地收储-隧道片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/1-6土地收储-隧道片区.jpg"
                        },
                        {
                            "title": "1-7土地价格评估-隧道片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/1-7土地价格评估-隧道片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/1-7土地价格评估-隧道片区.jpg"
                        },
                        {
                            "title": "2-1城规-中央商务区CBD.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/2-1城规-中央商务区CBD.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/2-1城规-中央商务区CBD.jpg"
                        },
                        {
                            "title": "2-2土规-中央商务区CBD.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/2-2土规-中央商务区CBD.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/2-2土规-中央商务区CBD.jpg"
                        },
                        {
                            "title": "2-3现状-中央商务区CBD.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/2-3现状-中央商务区CBD.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/2-3现状-中央商务区CBD.jpg"
                        },
                        {
                            "title": "2-4征转-中央商务区CBD.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/2-4征转-中央商务区CBD.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/2-4征转-中央商务区CBD.jpg"
                        },
                        {
                            "title": "2-5拆迁-中央商务区CBD.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/2-5拆迁-中央商务区CBD.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/2-5拆迁-中央商务区CBD.jpg"
                        },
                        {
                            "title": "2-6土地收储-中央商务区CBD.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/2-6土地收储-中央商务区CBD.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/2-6土地收储-中央商务区CBD.jpg"
                        },
                        {
                            "title": "2-7土地价格-中央商务区CBD.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/2-7土地价格-中央商务区CBD.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/2-7土地价格-中央商务区CBD.jpg"
                        },
                        {
                            "title": "3-1城规-火车站片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/3-1城规-火车站片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/3-1城规-火车站片区.jpg"
                        },
                        {
                            "title": "3-2土规-火车站片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/3-2土规-火车站片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/3-2土规-火车站片区.jpg"
                        },
                        {
                            "title": "3-3现状-火车站片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/3-3现状-火车站片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/3-3现状-火车站片区.jpg"
                        },
                        {
                            "title": "3-4征转-火车站片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/3-4征转-火车站片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/3-4征转-火车站片区.jpg"
                        },
                        {
                            "title": "3-5拆迁-火车站片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/3-5拆迁-火车站片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/3-5拆迁-火车站片区.jpg"
                        },
                        {
                            "title": "3-6土地收储-火车站片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/3-6土地收储-火车站片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/3-6土地收储-火车站片区.jpg"
                        },
                        {
                            "title": "3-7土地价格-火车站片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/3-7土地价格-火车站片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/3-7土地价格-火车站片区.jpg"
                        },
                        {
                            "title": "4-1城规-国际健康城分区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/4-1城规-国际健康城分区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/4-1城规-国际健康城分区.jpg"
                        },
                        {
                            "title": "4-2土规-国际健康城片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/4-2土规-国际健康城片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/4-2土规-国际健康城片区.jpg"
                        },
                        {
                            "title": "4-3现状-国际健康城片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/4-3现状-国际健康城片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/4-3现状-国际健康城片区.jpg"
                        },
                        {
                            "title": "4-4征转-国际健康城片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/4-4征转-国际健康城片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/4-4征转-国际健康城片区.jpg"
                        },
                        {
                            "title": "4-5拆迁-国际健康城.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/4-5拆迁-国际健康城.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/4-5拆迁-国际健康城.jpg"
                        },
                        {
                            "title": "4-6土地收储-分区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/4-6土地收储-分区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/4-6土地收储-分区.jpg"
                        },
                        {
                            "title": "4-7土地价格-国际健康城片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/4-7土地价格-国际健康城片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/4-7土地价格-国际健康城片区.jpg"
                        },
                        {
                            "title": "5-1城规-铁道学院片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/5-1城规-铁道学院片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/5-1城规-铁道学院片区.jpg"
                        },
                        {
                            "title": "5-2土规-铁道学院片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/5-2土规-铁道学院片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/5-2土规-铁道学院片区.jpg"
                        },
                        {
                            "title": "5-3现状-铁道学院片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/5-3现状-铁道学院片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/5-3现状-铁道学院片区.jpg"
                        },
                        {
                            "title": "5-4征转-铁道学院片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/5-4征转-铁道学院片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/5-4征转-铁道学院片区.jpg"
                        },
                        {
                            "title": "5-6土地收储-铁道学院片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/5-6土地收储-铁道学院片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/5-6土地收储-铁道学院片区.jpg"
                        },
                        {
                            "title": "5-7土地价格-铁道学院片区.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/5-7土地价格-铁道学院片区.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/11片区图件/thumb/5-7土地价格-铁道学院片区.jpg"
                        }
                    ]
                },
                {
                    "title": "12分单元图件",
                    "extension": null,
                    "src": null,
                    "thumb": null,
                    "cadastrals": [
                        {
                            "title": "1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/1.jpg"
                        },
                        {
                            "title": "10.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/10.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/10.jpg"
                        },
                        {
                            "title": "11.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/11.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/11.jpg"
                        },
                        {
                            "title": "12.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/12.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/12.jpg"
                        },
                        {
                            "title": "13.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/13.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/13.jpg"
                        },
                        {
                            "title": "14.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/14.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/14.jpg"
                        },
                        {
                            "title": "15.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/15.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/15.jpg"
                        },
                        {
                            "title": "16.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/16.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/16.jpg"
                        },
                        {
                            "title": "17.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/17.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/17.jpg"
                        },
                        {
                            "title": "18.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/18.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/18.jpg"
                        },
                        {
                            "title": "19.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/19.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/19.jpg"
                        },
                        {
                            "title": "2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/2.jpg"
                        },
                        {
                            "title": "20.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/20.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/20.jpg"
                        },
                        {
                            "title": "21.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/21.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/21.jpg"
                        },
                        {
                            "title": "22.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/22.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/22.jpg"
                        },
                        {
                            "title": "23.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/23.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/23.jpg"
                        },
                        {
                            "title": "24.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/24.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/24.jpg"
                        },
                        {
                            "title": "25.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/25.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/25.jpg"
                        },
                        {
                            "title": "26.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/26.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/26.jpg"
                        },
                        {
                            "title": "27.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/27.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/27.jpg"
                        },
                        {
                            "title": "28.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/28.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/28.jpg"
                        },
                        {
                            "title": "29.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/29.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/29.jpg"
                        },
                        {
                            "title": "3.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/3.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/3.jpg"
                        },
                        {
                            "title": "30.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/30.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/30.jpg"
                        },
                        {
                            "title": "31.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/31.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/31.jpg"
                        },
                        {
                            "title": "32.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/32.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/32.jpg"
                        },
                        {
                            "title": "33.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/33.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/33.jpg"
                        },
                        {
                            "title": "34.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/34.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/34.jpg"
                        },
                        {
                            "title": "35.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/35.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/35.jpg"
                        },
                        {
                            "title": "36.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/36.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/36.jpg"
                        },
                        {
                            "title": "37.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/37.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/37.jpg"
                        },
                        {
                            "title": "38.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/38.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/38.jpg"
                        },
                        {
                            "title": "39.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/39.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/39.jpg"
                        },
                        {
                            "title": "4.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/4.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/4.jpg"
                        },
                        {
                            "title": "40.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/40.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/40.jpg"
                        },
                        {
                            "title": "41.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/41.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/41.jpg"
                        },
                        {
                            "title": "42.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/42.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/42.jpg"
                        },
                        {
                            "title": "43.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/43.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/43.jpg"
                        },
                        {
                            "title": "44.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/44.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/44.jpg"
                        },
                        {
                            "title": "45.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/45.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/45.jpg"
                        },
                        {
                            "title": "46.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/46.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/46.jpg"
                        },
                        {
                            "title": "47.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/47.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/47.jpg"
                        },
                        {
                            "title": "48.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/48.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/48.jpg"
                        },
                        {
                            "title": "49.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/49.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/49.jpg"
                        },
                        {
                            "title": "5.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/5.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/5.jpg"
                        },
                        {
                            "title": "6.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/6.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/6.jpg"
                        },
                        {
                            "title": "7.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/7.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/7.jpg"
                        },
                        {
                            "title": "8.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/8.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/8.jpg"
                        },
                        {
                            "title": "9.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/9.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/9.jpg"
                        },
                        {
                            "title": "总表.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/总表.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/12分单元图件/thumb/总表.jpg"
                        }
                    ]
                },
                {
                    "title": "13成本测算图件",
                    "extension": null,
                    "src": null,
                    "thumb": null,
                    "cadastrals": [
                        {
                            "title": "10、医院1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/10、医院1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/10、医院1.jpg"
                        },
                        {
                            "title": "10、医院2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/10、医院2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/10、医院2.jpg"
                        },
                        {
                            "title": "11、社区中心1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/11、社区中心1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/11、社区中心1.jpg"
                        },
                        {
                            "title": "11、社区中心2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/11、社区中心2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/11、社区中心2.jpg"
                        },
                        {
                            "title": "12、垃圾中转站1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/12、垃圾中转站1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/12、垃圾中转站1.jpg"
                        },
                        {
                            "title": "12、垃圾中转站2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/12、垃圾中转站2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/12、垃圾中转站2.jpg"
                        },
                        {
                            "title": "13、公厕1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/13、公厕1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/13、公厕1.jpg"
                        },
                        {
                            "title": "13、公厕2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/13、公厕2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/13、公厕2.jpg"
                        },
                        {
                            "title": "14、文保设施1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/14、文保设施1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/14、文保设施1.jpg"
                        },
                        {
                            "title": "14、文保设施2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/14、文保设施2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/14、文保设施2.jpg"
                        },
                        {
                            "title": "15、文化场馆1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/15、文化场馆1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/15、文化场馆1.jpg"
                        },
                        {
                            "title": "15、文化场馆2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/15、文化场馆2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/15、文化场馆2.jpg"
                        },
                        {
                            "title": "16、产业用地1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/16、产业用地1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/16、产业用地1.jpg"
                        },
                        {
                            "title": "16、产业用地2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/16、产业用地2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/16、产业用地2.jpg"
                        },
                        {
                            "title": "17、变电站1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/17、变电站1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/17、变电站1.jpg"
                        },
                        {
                            "title": "17、变电站2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/17、变电站2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/17、变电站2.jpg"
                        },
                        {
                            "title": "18、开闭所1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/18、开闭所1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/18、开闭所1.jpg"
                        },
                        {
                            "title": "18、开闭所2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/18、开闭所2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/18、开闭所2.jpg"
                        },
                        {
                            "title": "20、商业用地1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/20、商业用地1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/20、商业用地1.jpg"
                        },
                        {
                            "title": "20、商业用地2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/20、商业用地2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/20、商业用地2.jpg"
                        },
                        {
                            "title": "21、住宅用地1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/21、住宅用地1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/21、住宅用地1.jpg"
                        },
                        {
                            "title": "21、住宅用地2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/21、住宅用地2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/21、住宅用地2.jpg"
                        },
                        {
                            "title": "2、公交场站1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/2、公交场站1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/2、公交场站1.jpg"
                        },
                        {
                            "title": "2、公交场站2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/2、公交场站2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/2、公交场站2.jpg"
                        },
                        {
                            "title": "4、人才公寓1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/4、人才公寓1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/4、人才公寓1.jpg"
                        },
                        {
                            "title": "4、人才公寓2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/4、人才公寓2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/4、人才公寓2.jpg"
                        },
                        {
                            "title": "5、绿地1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/5、绿地1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/5、绿地1.jpg"
                        },
                        {
                            "title": "5、绿地2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/5、绿地2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/5、绿地2.jpg"
                        },
                        {
                            "title": "6、河道1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/6、河道1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/6、河道1.jpg"
                        },
                        {
                            "title": "6、河道2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/6、河道2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/6、河道2.jpg"
                        },
                        {
                            "title": "7、泵站1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/7、泵站1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/7、泵站1.jpg"
                        },
                        {
                            "title": "7、泵站2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/7、泵站2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/7、泵站2.jpg"
                        },
                        {
                            "title": "8、幼儿园1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/8、幼儿园1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/8、幼儿园1.jpg"
                        },
                        {
                            "title": "8、幼儿园2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/8、幼儿园2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/8、幼儿园2.jpg"
                        },
                        {
                            "title": "9、中小学1.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/9、中小学1.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/9、中小学1.jpg"
                        },
                        {
                            "title": "9、中小学2.jpg",
                            "extension": ".jpg",
                            "src": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/9、中小学2.jpg",
                            "thumb": "http://10.10.12.71:90/OneMapCore/Data/cadastral/13成本测算图件/thumb/9、中小学2.jpg"
                        }
                    ]
                }
            ];

            /**
             * src 原生图片
             * thumb 缩略图
             */

            let i = 0
            imglist.forEach(element => {
                element.cadastrals.forEach(element1 => {
                    element1.key = i++; //图片序号
                    _this.urlList.push(element1.src);
                });
            });

            this.imglist = result;
        },
        handleView(child, index) {
            var options = {
                index: index
            };
            var viewer = new PhotoViewer(child, options);
        },
        scroll(id) {
            console.log(id);
            id = id.substring(1, id.length);
            document.getElementById(id).scrollIntoView();
        }
    },
    mounted() {
        this.getImage();
    }
};
</script>