import axios from 'axios'
// import { getItem,setItem } from '@/utils/storage'


axios.defaults.baseURL ='https://futurenext.com.cn/v1/'
// axios.defaults.withCredentials=true;
console.log('默认接口地址:' + axios.defaults.baseURL)




// 请求拦截器
axios.interceptors.request.use(function (config) {
  // config 是axios的默认请求配置 和传入的配置 结合出来的

  // var token = getItem('setUser')
  // var ciphertext = getItem('userId')
  // var pid = getItem('patientID')
  // config.headers.common = {
  //   reqsource: 'wap',
  //   token: token,
  //   ciphertext: ciphertext,
  //   pid: pid
  // }
  // config.headers['Authorization'] = `Bearer ${token}` // 统一注入token
  // if(config.method === 'post') {
  //   config.data = qs.stringify(config.data);
  // }
  
  return config
}, function () {})
// 导出请求对象
export default axios
