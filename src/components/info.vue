<template>
    <div class="info">
        <p class="title">
            <i></i>
            病毒信息
        </p>
        <div class="content">
            <p>{{infoDAta.remark1}}</p>
            <p>{{infoDAta.remark2}}</p>
            <p>{{infoDAta.remark3}}</p>
            <p>{{infoDAta.note1}}</p>
            <p>{{infoDAta.note2}}</p>
            <p>{{infoDAta.note3}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'Info',
    props:{
        infoDAta:{
            type:Object,
            default:function(){
                return{}
            }
        }
    }
}
</script>

<style scoped>

.info{
    padding: 0.16rem;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
}
.title{
    font-size: 0.17rem;
}

.title i{
    display: inline-block;
    width: 0.04rem;
    height: 0.16rem;
    margin-right: 0.03rem;
    vertical-align: middle;
    background: #4169e2;
}
.content{
    padding: 0.06rem 0.16rem;
}

.content p{
    font-size: 13px;
    margin: 5px 0;
}
</style>