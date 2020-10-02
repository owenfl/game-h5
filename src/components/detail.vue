<template>
  <div class="detail">
    <div class="topBox ">
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
            <div class="boxX">



              <div class="recommend-live bgF" @click="goPlay">
                <div class="title ">
                  <div class="huo mgL18"></div>
                  <div class="tt01">推荐直播</div>
                  <div class="tt02">换一批</div>
                  <div class="arrow-rX mgR18"></div>
                </div>
                <div class="liveBox pdL18 pdR18">
                  <div class="item">
                    <router-link to="detail">
                    <div class="playBox"></div>
                    </router-link>

                    <div class="tt mgL18">冠军杯赛</div>
                    <div class="space">
                      <p class="fg mgL18">cpoo vs weee</p>
                      <div class="huoSM"></div>
                      <p class="mgL8 mgR8">28875</p>
                    </div>
                  </div>
                  <div class="item">
                    <div class="playBox"></div>
                    <div class="tt mgL18">冠军杯赛</div>
                    <div class="space">
                      <p class="fg mgL18">cpoo vs weee</p>
                      <div class="huoSM"></div>
                      <p class="mgL8 mgR8">28875</p>
                    </div>
                  </div>

                </div>
              </div>



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
    this.$nextTick(()=>{
      this.$store.dispatch("setShowMenu", false)

    })
  },
  methods:{
    tabSwitch() {},
    goPlay() {}

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


      .recommend-live {
        padding-bottom: 1.2rem;
        .title {
          display: flex;
          align-items: center;
          padding-top: 0.18rem;
          margin-bottom: 0.22rem;
          .huo {
            width: 0.34rem;
            height: 0.43rem;
            background-size: 100%;
            background-position: 0 0;
            background-repeat: no-repeat;
            background-image: url(./../assets/images/home/huo.png);
          }
          .arrow-r {
            width: 0.12rem;
            height: 0.2rem;
            background-size: 100%;
            background-position: 0 0;
            background-repeat: no-repeat;
            background-image: url(./../assets/images/home/arrow-r.png);
          }
          .tt01 {
            font-size: 0.3rem;
            font-weight: 500;
            color: #000;
            flex-grow: 1;
            margin-left: 0.14rem;
          }
          .tt02 {
            font-size: 0.22rem;
            font-weight: 400;
            color: #2B2626;
            margin-right: 0.14rem;
          }
        }

        .liveBox {
          justify-content: space-between;
          flex-direction: row;
          flex-wrap: wrap;
          display: flex;
          .item {
            .playBox {
              width: 3.48rem;
              height: 2.03rem;
              background: #F7F7F7;
              border-radius: 0.07rem;
            }
            .tt {
              font-size: 0.22em;
              font-weight: 500;
              color: #2B2626;
              margin-top: 0.08rem;
            }
            .space {
              display: flex;
              align-items: center;
              font-size: 0.16rem;
              font-weight: 500;
              color: #2B2626;
              margin-bottom: 0.18rem;
              .fg {
                flex-grow: 1;
              }
              .huoSM {
                width: 0.13rem;
                height: 0.17rem;
                background-size: 100%;
                background-position: 0 0;
                background-repeat: no-repeat;
                background-image: url(./../assets/images/home/huo.png);
              }
            }
          }
        }

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

