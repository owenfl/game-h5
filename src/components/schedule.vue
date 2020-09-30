<template>
  <div class="schedule">

    <div class="head bgF pdL18 pdR18">
      <div>
        <img class="icon" src="./../assets/images/schedule/lol.png" />
        <p class="cur">英雄联盟</p>
      </div>
      <div>
        <img class="icon" src="./../assets/images/schedule/cs.png" />
        <p>CS</p>
      </div>
      <div>
         <img class="icon" src="./../assets/images/schedule/dota2.png" />
        <p>DOTA2</p>
      </div>
      <div>
        <img class="icon" src="./../assets/images/schedule/shouwangxianfeng.png" />
        <p>守望先锋</p>
      </div>
      <div class="appdowload">
        APP下载
      </div>
    </div>


    <div class="tab">
      <nut-tab @tab-switch="tabSwitch" :tab-line="false" :scroll-line="true">
        <nut-tab-panel tab-title="全部">
          <!-- <div class="box">
            全部
          </div> -->
        </nut-tab-panel>
        <nut-tab-panel :disable="true" tab-title="进行中">
          <!-- <div class="box">
            进行中
          </div> -->
        </nut-tab-panel>
        <nut-tab-panel :disable="true" tab-title="赛程">
          <!-- <div class="box">
            赛程
          </div> -->
        </nut-tab-panel>
        <nut-tab-panel :disable="true" tab-title="赛果">
          <!-- <div class="box">
            赛果
          </div> -->
        </nut-tab-panel>
      </nut-tab>
    </div>


    <div class="boxCenter bgF mgT20">
      <!-- <div class="tt">
        <p>夏季赛</p>
        <p>10:26</p>
        <p>第二局</p>
        <div class="friend"></div>
        <p>2345</p>
      </div> -->
      <div class="items">
        <div class="left">

        </div>
        <div class="right">

        </div>
      </div>
    </div>
  
    <div class="boxCenter bgF mgT20">
      <!-- <div class="tt">
        <p>2020ldl夏季赛…</p>
        <p>10:26</p>
        <p>第一局</p>
        <div class="friend"></div>
        <p>2345</p>
      </div> -->


    </div>




    <menu-component></menu-component>
  </div>
</template>

<script>
import menuComponent from './../common/menu'

export default {
  name: 'detail',
  components: {
    menuComponent
  },
  data(){
    return{

    }
  },
  mounted(){
    this.$nextTick(()=>{ })
  },
  methods:{
    tabSwitch() {}

  }

}
</script>

<style lang="less" scoped>
// html,body{
//   background: #F7F7F7 !important;
//   background: #eeeeee !important;
// }

.schedule {


  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.29rem;
    border-bottom: 1px solid #F5F6F7;

    div {
      text-align: center;
      .icon {
        width: 0.47rem;
        height: 0.47rem;
        display: block;
        overflow: hidden;
        text-align: center;
        margin: 0 auto;
      }
      p {
        font-size: 0.26rem;
        color: #2B2626;
        text-align: center;
        margin-top: 0.16rem;
      }
      .cur {
        width: 1.24rem;
        height: 0.37rem;
        color: #ffffff;
        background: #FF5116;
        border-radius: 0.2rem;
      }
    }

    .appdowload {
      width: 1.67rem;
      height: 0.49rem;
      background: #FF5116;
      border-radius: 0.25rem;
      font-size: 0.26rem;
      font-weight: 400;
      color: #FFFFFF;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }


  .boxCenter {
    height: 1.96rem;
    .tt {
      font-size: 0.26rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #08979C;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .friend {
        width: 0.26rem;
        height: 0.26rem;
        background-size: 100%;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-image: url(./../assets/images/schedule/friend.png);
      }
    }

    .items {
      display: flex;
      .left {
flex-grow: 1;
      }
      .right {
flex-grow: 1;
      }
    }


  }







}

</style>

