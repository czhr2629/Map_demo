import base from './base'
import axios from '../utils/request'

const api ={
    // 疫情数据   get请求方法
    getNocvData(params){
        return axios.get(base.baseUrl + base.nocv,{
            params:params
        })
    },
    // 各个省份疫情
    getNocvCityData(params){
        return axios.get(base.baseUrl + base.ncovCity,{
            params:params
        })
    }
}
export default api