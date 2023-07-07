import {
    isNull
} from "@/utils/validate.js"

//配置主键,目前用于存储
const keyName = 'XUDH' + '-';

/**
 * @description 存储localStorage或sessionStorage
 * @param {Object} params { name:属性名, content:属性值, type:存储类型(默认localStorage) }
 */
export const setStore = (params = {}) => {
    let {
        name,
        content,
        type,
    } = params;
    name = keyName + name
    let obj = {
        dataType: typeof (content),
        content: content,
        type: type,
        datetime: new Date().getTime()
    }
    if (type) window.sessionStorage.setItem(name, JSON.stringify(obj));
    else window.localStorage.setItem(name, JSON.stringify(obj));
}

/**
 * @description 获取localStorage或sessionStorage
 * @param {Object} params { name:属性名, debug: }
 */
export const getStore = (params = {}) => {
    let {
        name,
        debug
    } = params;
    name = keyName + name
    let obj = {},
        content;
    obj = window.sessionStorage.getItem(name);
    if (isNull(obj)) obj = window.localStorage.getItem(name);
    if (isNull(obj)) return;
    try {
        obj = JSON.parse(obj);
    } catch {
        return obj;
    }
    if (debug) {
        return obj;
    }
    if (obj.dataType == 'string') {
        content = obj.content;
    } else if (obj.dataType == 'number') {
        content = Number(obj.content);
    } else if (obj.dataType == 'boolean') {
        content = eval(obj.content);
    } else if (obj.dataType == 'object') {
        content = obj.content;
    }
    return content;
}

/**
 * @description 删除localStorage或sessionStorage
 * @param {Object} params { name:属性名, type:储类型(默认localStorage) }
 */
export const removeStore = (params = {}) => {
    let {
        name,
        type
    } = params;
    name = keyName + name
    if (type) {
        window.sessionStorage.removeItem(name);
    } else {
        window.localStorage.removeItem(name);
    }

}

/**
 * @description 获取全部localStorage或sessionStorage(默认localStorage)
 * @param {Object} params { type:存储类型(默认localStorage) }
 */
export const getAllStore = (params = {}) => {
    let list = [];
    let {
        type
    } = params;
    if (type) {
        for (let i = 0; i <= window.sessionStorage.length; i++) {
            list.push({
                name: window.sessionStorage.key(i),
                content: getStore({
                    name: window.sessionStorage.key(i),
                    type: 'session'
                })
            })
        }
    } else {
        for (let i = 0; i <= window.localStorage.length; i++) {
            list.push({
                name: window.localStorage.key(i),
                content: getStore({
                    name: window.localStorage.key(i),
                })
            })

        }
    }
    return list;

}

/**
 * @description 清空全部localStorage或sessionStorage
 * @param {Object} params { type:存储类型(默认localStorage) }
 */
export const clearStore = (params = {}) => {
    let {
        type
    } = params;
    if (type) {
        window.sessionStorage.clear();
    } else {
        window.localStorage.clear()
    }
}