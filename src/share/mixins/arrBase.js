import Vue from 'vue'

//对象数组基本操作
export default {
    data() { },
    methods: {
        /**
         * @description 数组对象 根据关键字排序 sort会改变原数据，无需return
         * @param {Array} arrObj 数据源
         * @param {String} column 参与排序字段
         * @param {String} order asc正序，desc倒叙
         * @return {Array} 
         */
        arrObjSort(arrObj, column, order) {
            //转换大写
            order = order.toUpperCase();
            //正序
            if (order == "ASC") {
                arrObj = arrObj.sort((a, b) => {
                    return Number(a[column]) - Number(b[column])
                })
            }
            //倒叙
            if (order == "DESC") {
                arrObj = arrObj.sort((a, b) => {
                    return Number(b[column]) - Number(a[column])
                })
            }
        },
        /**
         * @description 数组对象 根据去除重复元素
         * @param {Array} arrObj 数据源
         * @param {String} name 根据去重的字段名}  
         */
        unique(arrObj, name) {
            var hash = {};
            return arrObj.reduce(function (item, next) {
                hash[next[name]] ? "" : (hash[next[name]] = true && item.push(next));
                return item;
            }, []);
        },

    }
}