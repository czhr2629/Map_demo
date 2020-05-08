<template>
    <div>
        <Header />
        <Info :infoDAta='infoDAta'/>
        <Casenum :casenumDAta='casenumDAta'/>
        <Map />
        <TreeChart />
        <News v-bind:newsDAta="newsDAta" />
        <Footer />
        

    </div>
</template>

<script>
import api from '../api/index'
import Header from '../components/header'
import Info from '../components/info'
import Casenum from '../components/casenum'
import Map from '../components/Map'
import TreeChart from '../components/treeChart'
import News from '../components/news'
import Footer from '../components/footer'


export default {
  data(){
    return{
      infoDAta:{},
      casenumDAta:{},
      newsDAta:[]
    }

  },
  components: {
    Header,
    Info,
    Casenum,
    Map,
    TreeChart,
    News,
    Footer,
  },
  mounted(){
    api.getNocvData({//*先获取所有的数据  在一点点传递给需要的地方
      key:'929bda5a0e9a98f4bcfdecb358622a48'
    }).then(res=>{
      console.log(res.data)
      this.newsDAta=res.data.newslist[0].news,

      this.infoDAta={
        modifyTime:res.data.newslist[0].desc.modifyTime,
        remark1:res.data.newslist[0].desc.remark1,
        remark2:res.data.newslist[0].desc.remark2,
        remark3:res.data.newslist[0].desc.remark3,
        note1:res.data.newslist[0].desc.note1,
        note2:res.data.newslist[0].desc.note2,
        note3:res.data.newslist[0].desc.note3
      },

      this.casenumDAta={
        currentConfirmedCount:res.data.newslist[0].desc.currentConfirmedCount,
        confirmedCount:res.data.newslist[0].desc.confirmedCount,
        suspectedCount:res.data.newslist[0].desc.suspectedCount,
        curedCount:res.data.newslist[0].desc.curedCount,
        deadCount:res.data.newslist[0].desc.deadCount,
        seriousCount:res.data.newslist[0].desc.seriousCount,
        suspectedIncr:res.data.newslist[0].desc.suspectedIncr,
        currentConfirmedIncr:res.data.newslist[0].desc.currentConfirmedIncr,
        confirmedIncr:res.data.newslist[0].desc.confirmedIncr,
        curedIncr:res.data.newslist[0].desc.curedIncr,
        deadIncr:res.data.newslist[0].desc.deadIncr,
        seriousIncr:res.data.newslist[0].desc.seriousIncr
      }
    })
  }
}
</script>