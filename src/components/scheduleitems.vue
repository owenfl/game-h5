<template>
  <div class="scheduleitems">

    <div class="topbox">
      <div class="top pdL18 pdR18">
        <div class="arrowL"  @click="goBack"></div>
        <div class="tt otw">2020LDL夏季赛</div>
        <div class="boxR"></div>
      </div>

      <div class="title">今天 18:00 第二局</div>

      <div class="bottom">
        <div class="lr">
          <img src="./../assets/images/schedule/scheduleitems/icon01.png" />
          <!-- <p>GAM</p> -->
        </div>
        <p class="text otw">2 - 0</p>
        <div class="lr">
          <img src="./../assets/images/schedule/scheduleitems/icon02.png" />
          <!-- <p>EVS</p> -->
        </div>
      </div>

      <div class="bottom">
        <div class="lr">
          <p>GAM</p>
        </div>
        <p class="text02 otw">
          未开赛
          <!-- 比赛结束 -->
        </p>
        <div class="lr">
          <p>EVS</p>
        </div>
      </div>

      <div class="play"  @click="goPlay">
        <img src="./../assets/images/schedule/scheduleitems/zhibo.png" />
        <p>视频直播</p>
      </div>
    </div>


    <div class="liver">
      <p>主播</p>
    </div>

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
</template>

<script>
export default {
  name: 'scheduleitems',

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
    goPlay() {
      this.$router.push('scheduleDetail')
    },

    goBack() {
      this.$router.go(-1)
    },


  }

}
</script>

<style lang="less" scoped>

.scheduleitems {

  .topbox {
    height: 4.59rem;
    background: #3F3632;
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
    .title {
      font-size: 0.24rem;
      font-weight: 400;
      color: #FFFFFF;
      text-align: center;
      margin-bottom: 0.32rem;
    }
    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-around;
      .lr {
        flex-grow: 2;
        width: 40%;
        text-align: center;
        img {
          width: 1.03rem;
          height: 1.03rem;
          border-radius: 50%;
          overflow: hidden;
        }
        p {
          font-size: 0.24rem;
          font-weight: 400;
          color: #FFFFFF;
          text-align: center;
        }
      }
      .text {
        flex-grow: 1;
        width: 20%;
        font-size: 0.43rem;
        font-weight: 600;
        color: #FFFFFF;
        text-align: center;
      }
      .text02 {
        flex-grow: 1;
        width: 20%;
        font-size: 0.28rem;
        font-weight: 400;
        color: #FFFFFF;
        text-align: center;
      }
    }

    .play {
      width: 1.82rem;
      height: 0.42rem;
      margin: 0.5rem auto 0;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 0.21rem;
      border: 1px solid rgba(255, 255, 255, 0.5);
      display: flex;
      align-items: center;
      justify-content: space-around;
      img {
        width: 0.3rem;
        height: 0.22rem;
        margin-left: 0.22rem;
      }
      p {
        font-size: 0.24rem;
        font-weight: 400;
        color: #FFFFFF;
        margin-right: 0.22rem;
      }
    }

  }


  .liver {
    display: flex;
    align-items: center;
    height: 0.8rem;
    border-bottom: 0.18rem solid #F7F7F7;
    p {
      font-size: 0.24rem;
      font-weight: 500;
      color: #FF5116;
      margin-left: 0.48rem;
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


</style>
