import Vue from 'vue'

//对象数组基本操作
export default {
    data() {},
    methods: {
        /**
         * @desc 数组对象 根据关键字排序
         * sort会改变原数据，无需return
         * @param {arrObj:数据源，column:参与排序字段，order：asc正序，desc倒叙}  
         * @return {} 
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
         * @desc 数组对象 根据去除重复元素
         * @param {arrObj:数据源，name:根据去重的字段名}  
         * @return []
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