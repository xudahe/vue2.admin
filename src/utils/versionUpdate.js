import axios from 'axios'
const isNewVersion = () => {
    let url = `//${window.location.host}/data/version.json?t=${new Date().getTime()}`;
    axios.get(url).then(res => {
        if (res.status === 200) {
            let vueVersion = res.data.version;
            let localVueVersion = localStorage.getItem('vueVersion');
            if (localVueVersion && localVueVersion != vueVersion) {
                localStorage.setItem('vueVersion', vueVersion);
                window.location.reload();
            } else {
                // console.log('版本号一致，不进行操作')
            }
        }
    });
}

export default {
    isNewVersion
}