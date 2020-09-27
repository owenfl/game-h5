<template>
  <div class="detail">
    <div class="topBox ">
      <div class="playBox">
        <div class="playbtn"></div>
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
  name: 'detail',

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
.detail {
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  .topBox {
    max-width: 100%;
    width: 100%;
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

