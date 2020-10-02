<template>
  <div>
    <div class="head bgF pdL18 pdR18">
      <div class="logo">
        <img src="./../assets/images/home/logo.png" />
      </div>
      <div class="appdowload">
        APP下载
      </div>
    </div>

    <div class="banner">
      <nut-swiper
        direction="horizontal"
        :paginationVisible="true"
        :autoPlay="3000"
        :swiperData="dataItem"
        :lazyLoad="true" 
        ref="bannerdemo"
      >
        <div v-for="(item,index) in dataItem" :key="index"  class="nut-swiper-slide">
          <img :data-src="item.imgSrc" style="max-width:100%; max-height:100%" class="nut-img-lazyload"/> 
        </div>
      </nut-swiper>
    </div>

    <div class="homeBox">

      <div class="item">
        <div class="top">
          <p>英雄联盟</p>
          <div class="game begin">比赛中</div>
        </div>
        <div class="midel">
          <div class="logo">
            <img src="" alt="">
          </div>
          <div class="text">23 : 12</div>
          <div class="logo">
            <img src="" alt="">
          </div>
        </div>
        <div class="bottom otw">
        2020LOL世界s10冠军赛
        </div>
      </div>
      <div class="item">
        <div class="top">
          <p>英雄联盟</p>
          <div class="game pre">未开始</div>
        </div>
        <div class="midel">
          <div class="logo">
            <img src="" alt="">
          </div>
          <div class="text">今晚09:00</div>
          <div class="logo">
            <img src="" alt="">
          </div>
        </div>
        <div class="bottom otw">
        2020LOL世界s10冠军赛
        </div>

      </div>
    </div>


    <div class="recommend-live bgF">
      <div class="title ">
        <div class="huo mgL18"></div>
        <div class="tt01">推荐直播</div>
        <!-- <div class="tt02">查看更多</div>
        <div class="arrow-r mgR18"></div> -->
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
  name: 'home',

  data(){
    return{
      dataItem: [{
        name:1,
        imgSrc: require('./../assets/images/home/ban.png')
      },{
        name:2,
        imgSrc: require('./../assets/images/home/ban.png')
      },{
        name:3,
        imgSrc: require('./../assets/images/home/ban.png')
      },{
        name:4,
        imgSrc: require('./../assets/images/home/ban.png')
      }]

    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.$store.dispatch("setShowMenu", true)

    })
  },
  methods:{


  }

}
</script>

<style lang="less" scoped>

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.94rem;
    .logo {
      width: 2.59rem;
      // height: 0.69rem;
      overflow: hidden;
      img {
        width: 100%;
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

  .banner {
    .nut-swiper {
      max-width: 100%;
      width: 100%;
      height: 2.67rem;
      overflow: hidden;
      .nut-swiper-pagination {
        .swiper-pagination-bullet.active {
          background-color: #ffffff !important;
        }
        .swiper-pagination-bullet {
          background-color: #eeeeee !important;
          background-color: #f00;
        }
      } 
      img {
        max-width: 100%;
        width: 100%;
        height: 2.67rem;
      }
    }

  }


  .homeBox {
    background: #F7F7F7;
    // padding-top: 0.16rem;
    // padding-bottom: 0.2rem;
    padding: 0.16rem 0.11rem 0.2rem;
    // margin-left: 0.11rem;
    // margin-right: 0.11rem;
    flex-direction: row;
    flex-wrap: nowrap;
    display: flex;
    .item {
      width: 3.51rem;
      height: 1.8rem;
      background: #FFFFFF;
      border-radius: 0.07rem;
      margin-left: 0.07rem;
      margin-right: 0.07rem;
      .top {
        display: flex;
        align-items: center;
        p {
          font-size: 0.26rem;
          color: #2B2626;
          margin-left: 0.12rem;
          flex-grow: 1;
        }
        .game {
          width: 0.68rem;
          height: 0.34rem;
          width: 1rem;
          height: 0.46rem;
          border-radius: 0.07rem;
          font-size: 0.2rem;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .begin {
          background: #FF5116;
        }
        .pre {
          background: #2B2626;
        }

      }
      .midel {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 0.16rem;
        margin-bottom: 0.26rem;
        .logo {
          width: 0.49rem;
          height: 0.49rem;
          border-radius: 50%;
          overflow: hidden;
          background: #eeeeee; //
          img {
            max-width: 100%;
            width: 100%;
          }
        }
        .text {
          font-size: 0.28rem;
          font-weight: 600;
          color: #FF5116;
        }
      }
      .bottom {
        width: 3.51rem;
        font-size: 0.22rem;
        font-weight: 400;
        color: #2B2626;
        display: flex;
        justify-content: center;
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
</style>
