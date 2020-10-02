<template>
  <div class="scheduleDetail" @click="goBack">

    <div class="mask"></div>
    <div class="maskbg">
      <img src="./../assets/images/schedule/scheduleDetail/maskbg.png" />
      <div class="box bgF">
        <!-- 备注 H5端无需播放 赛事，APP播放 -->
        <div class="view">免费观看直播和赛事</div>
        <div class="dl">下载APP</div>
      </div>
    </div>


    <div class="topBox">
      <!-- <div class="top pdL18 pdR18">
        <div class="arrowL"></div>
        <div class="tt otw">2020LDL夏季赛</div>
        <div class="boxR"></div>
      </div> -->

      <div class="playBox">
        <router-link to="home">
          <div class="playbtn"></div>
        </router-link>

      </div>
      <div class="tab">
        <nut-tab @tab-switch="tabSwitch" :tab-line="false" :scroll-line="true">
          <nut-tab-panel tab-title="聊天">
            <div class="box wechat">

              <div class="content">
                <div class="icon lv"></div>
                <div class="text01">追风少年：</div>
                <div class="text02">EVS永远的神</div>
              </div>
              <div class="content">
                <div class="icon lv"></div>
                <div class="text01">虎玉：</div>
                <div class="text02">6666666666666666666666666</div>
              </div>
              <div class="content">
                <div class="icon lv"></div>
                <div class="text01">挖掘机：</div>
                <div class="text02">放大龙必输</div>
              </div>
              <div class="content">
                <div class="icon tavel"></div>
                <div class="text01">挖掘机：</div>
                <div class="text02">放大龙必输</div>
              </div>

            </div>
          </nut-tab-panel>
          <nut-tab-panel tab-title="直播">
            <div class="box">

              <p>这里是直播内容</p>

            </div>
          </nut-tab-panel>
        </nut-tab>
      </div>
    </div>
    <div class="bottomChat">
      <nut-searchbar 
        placeText="发条友善的弹幕，参与互动"
        :hasIcon="false" 
        :hasSearchButton="false"
        :clearable='true'
        class="mgL18"
      ></nut-searchbar>
      <div class="sendbtn mgR18"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scheduleDetail',

  data(){
    return{

    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.$store.dispatch("setShowMenu", false)

    })
  },
  methods:{
    tabSwitch() {},

    goBack() {
      this.$router.go(-1)
    },


  }

}
</script>

<style lang="less" scoped>
.scheduleDetail {
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;

  .mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background: rgba(0, 0,0, 0.4);
  }
  .maskbg {
    width: 5.39rem;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 120;
    transform: translate(-50%,-50%);
    img {
      max-width: 100%;
      width: 100%;
      height: 2.53rem;
      vertical-align: bottom;
    }
    .box {
      width: 5.23rem;
      width: 5.1rem;
      margin: 0 auto;
      padding-top: 0.52rem;
      padding-bottom: 0.82rem;
      .view {
        width: 4.23rem;
        height: 0.66rem;
        margin: 0 auto 0.23rem;
        background: #FFFFFF;
        border-radius: 0.46rem;
        border: 1px solid #FF5116;
        font-size: 0.3rem;
        font-weight: 400;
        color: #FF5116;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .dl {
        width: 4.23rem;
        height: 0.66rem;
        margin: 0 auto;
        background: #FF5116;
        border-radius: 0.46rem;
        font-size: 0.3rem;
        font-weight: 400;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }


  
  .topBox {
    max-width: 100%;
    width: 100%;

    .top {
      display: flex;
      align-items: center;
      padding-top: 0.2rem;
      margin-bottom: 0.18rem;
      .boxR {
        width: 0.18rem;
      }
      .arrowL {
        width: 0.18rem;
        height: 0.32rem;
        background-size: 100%;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-image: url(./../assets/images/schedule/scheduleDetail/arrowL.png);
      }
      .tt {
        font-size: 0.3rem;
        font-weight: 500;
        color: #FFFFFF;
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }


    .playBox {
      max-width: 100%;
      width: 100%;
      height: 4.62rem;
      background: #D8D8D8;
      display: flex;
      justify-content: center;
      align-items: center;
      .playbtn {
        width: 1.75rem;
        height: 1.75rem;
        background-size: 100%;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-image: url(./../assets/images/detail/play.png);
      }
    }
    .tab {
      max-width: 100%;
      width: 100%;
      .box {
        overflow-y: scroll;
        // height: 6rem;
        // height: 46vh;
      }
      .box.wechat {
        padding: 0.2rem;

        .content {
          display: flex;
          align-items: center;
          margin-bottom: 0.16rem;
          .icon {
            margin-right: 0.12rem;
            width: 0.31rem;
            height: 0.31rem;
            background-size: 100%;
            background-position: 0 0;
            background-repeat: no-repeat;
          }
          .lv {
            background-image: url(./../assets/images/detail/iconlv.png);
          }
          .tavel {
            background-image: url(./../assets/images/detail/tavel.png);
          }
          .text01 {
            font-size: 0.26rem;
            color: #1890FF;
          }
          .text02 {
            font-size: 0.26rem;
            color: #2B2626;
            flex-grow: 1;
          }
        }

      }
      font-size: 25px;
      font-weight: 500;
      color: #FF5116;
      .nut-tab-link {
        color: #FF5116 !important;
      }
      .nav-bar-top {
        background: #FF5116 !important;
      }
    }
  }
  .bottomChat {
    // display: flex;
    // justify-content: center;
    // align-items: flex-end;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    width: 100%;
    height: 0.89rem;
    background: #FFFFFF;
    // border-top: 1px solid #f00;
    .nut-searchbar {
      width: 6.25rem;
      // height: 0.55rem;
      display: block;
      padding: 0 !important;
      border-radius: 0.28rem;
    }
    .sendbtn {
      width: 0.54rem;
      height: 0.55rem;
      background-size: 100%;
      background-position: 0 0;
      background-repeat: no-repeat;
      background-image: url(./../assets/images/detail/sendbtn.png);
    }
  }
  
}
</style>

