<template>
    <div>
        地区:{{ $route.params.name }}
        <div class="city" id="city"></div>
    </div>
</template>
<script>

import api from "../api"

export default {
    name:"City",
    data(){
        return{
            cityData:[]
        }
    },
    mounted(){
        api.getNocvCityData({
            key: "929bda5a0e9a98f4bcfdecb358622a48"
        }).then(res => {
            console.log(res.data);
            for(var i = 0 ; i<res.data.newslist.length;i++){
                if(this.$route.params.name == res.data.newslist[i].provinceShortName){
                    for(var j = 0;j<res.data.newslist[i].cities.length;j++){
                        var temp = {
                            name:res.data.newslist[i].cities[j].cityName+"市",//  市   区   旗   州
                            value:res.data.newslist[i].cities[j].currentConfirmedCount,
                            itemStyle: {
                                normal: {
                                    areaColor: this.setColor(
                                        res.data.newslist[i].cities[j].currentConfirmedCount
                                    )
                                }
                            }
                        }
                        this.cityData.push(temp)
                    }
                }
            }
            this.$charts.cityMap("city",this.cityData,this.$route.params.name);
        });
    },
     methods: {
        setColor(value) {
            let currentColor = "";
            switch (true) {
                case value == 0:
                    currentColor = "#fff";
                    break;
                case value > 0 && value < 10:
                    currentColor = "#FDFDCF";
                    break;
                case value >= 10 && value < 100:
                    currentColor = "#FE9E83";
                    break;
                case value >= 100 && value < 500:
                    currentColor = "#E55A4E";
                    break;
                case value > 500 && value < 10000:
                    currentColor = "#4F070D";
                    break;
            }
            return currentColor;
        }
    }
}
</script>
<style scoped>

.city{
    width: 100%;
    height: 400px;
}

</style>


