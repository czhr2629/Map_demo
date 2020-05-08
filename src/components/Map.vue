<template>
    <div>
        
        <!-- <div id="line" class="line"></div> -->
        <div id="chinaMap" class="line"></div>
        
    </div>
</template>

<script>
import api from "../api/index"

export default {
    name:"Map",
    data(){
        return{
            CityMapData:[]

        }
    },
    mounted(){
        // 获取地图数据
        api.getNocvCityData({
            key:"929bda5a0e9a98f4bcfdecb358622a48",
        }).then(res=>{
            console.log(res.data);
            for(var i =0;i<res.data.newslist.length;i++){
                var temp ={
                    name:res.data.newslist[i].provinceShortName,
                    value:res.data.newslist[i].currentConfirmedCount,
                    itemStyle:{
                        normal:{
                            areaColor:this.setColor(res.data.newslist[i].currentConfirmedCount)
                        }
                    }
                }
                this.CityMapData.push(temp)
            }
            // console.log(this.CityMapData)
            this.$charts.chinaMap('chinaMap',this.CityMapData) //把它放在网络请求中
        })

        // this.$charts.line('line')//折线图
    },
    methods:{
        setColor(value){
            let currentColor = ""
            switch(true){
                case value == 0:
                    currentColor = "#fff";
                    break;
                case value >0 && value < 10:
                    currentColor = "#FDFDCF";
                    break;
                case value > 10 && value < 100:
                    currentColor = "#FE9E83";
                    break;
                case value >100 && value < 500:
                    currentColor = "#E55A4E";
                    break;
                case value >500 && value <10000:
                    currentColor = "#4F070D";
                    break;
            }
            return currentColor;
        }
    }
}
</script>

<style scoped>
.line{
    width: 100%;
    height: 400px;
}

</style>