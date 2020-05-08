// 处理echarts
import echarts from 'echarts'

const install = function(Vue){
    //挂在vue原型上
    Object.defineProperties(Vue.prototype,{
        $charts:{
            get(){
                return{
                    line:function(id){
                        // console.log(id)
                        this.chart = echarts.init(document.getElementById(id))
                        this.chart.clear();

                        // 增加配置 
                        var option = {
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line'
                            }]
                        };
                        
                        this.chart.setOption(option)
                    },
                    // 中国地图
                    chinaMap:function(id,datacolor){
                        this.chart = echarts.init(document.getElementById(id))
                        this.chart.clear();
                        // 配置地图数据
                        var option = {
                            tooltip: {//提示框
                                triggerOn:'click',//可点击触发
                                enterable:true,//鼠标可移动到tooltip中
                                formatter(data){
                                    return "<a style='color:#fff' href='#/city/name/"+ data.name +"'><div><p>"+ data.seriesName+":"+ data.name +"</p><p>现存确诊:"+ data.value +"</p></div></a>"
                                }
                                /* formatter(data){//可以打印出数据
                                    // console.log(data)
                                    // window.location.href= "#/city/name/"+data.name
                                    return "<div><p>"+data.seriesName+":"+data.name+"</p><p>现存确诊:"+data.value+"</p><p onclick='tiaozhuan()'>详情</p></div>"
                                } */
                            },
                            series: [{
                                name: '省',
                                type: 'map',
                                map: 'china',
                                roam: false,
                                zoom: 1.2,
                                aspectScale: 0.75,
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize:8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: {
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                data:datacolor
                                
                            }]
                        }
                        this.chart.setOption(option)
                    },

                    // 城市地图
                    cityMap: function (id, data, ctiy) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();
                        var option = {
                            tooltip: {
                                triggerOn: 'click',   //触发方式
                                enterable: true, // 鼠标可移入tooltip中
                                formatter(data) {
                                    // console.log(data);
                                    return "<div><p>"+ data.name + "</p><p>现存确诊:" + data.value + "</p></div>"
                                }
                            },
                            series: [
                                {
                                    type: 'map',
                                    map: ctiy, // 只能是中文
                                    label: {
                                        normal: {
                                            show: true,
                                            textStyle: {
                                                fontSize: 8
                                            }
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            areaColor: 'rgba(0,255,236,0)',
                                            borderColor: 'rgba(0,0,0,0.2)',
                                            areaColor: "#fff",
                                        },
                                        emphasis: {
                                            areaColor: 'rgba(255,180,0,0.8)',
                                            shadowOffsetX: 0,
                                            shadowOffsetY: 0,
                                            shadowBlur: 20,
                                            borderWidth: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        },
                                    },
                                    data:data
                                }
                            ]
                        }
                        this.chart.setOption(option)
                    }

                }
            }
        }
    })
}
export default install