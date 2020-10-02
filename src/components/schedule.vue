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
        <nut-tab-panel :disable="false" tab-title="进行中">
          <!-- <div class="box">
            进行中
          </div> -->
        </nut-tab-panel>
        <nut-tab-panel :disable="false" tab-title="赛程">
          <!-- <div class="box">
            赛程
          </div> -->
        </nut-tab-panel>
        <nut-tab-panel :disable="false" tab-title="赛果">
          <!-- <div class="box">
            赛果
          </div> -->
        </nut-tab-panel>
      </nut-tab>
    </div>

    <div @click="goScheduleitems">
      <div class="boxCenter bdlt bgF mgT20">
        <div class="tt">
          <div class="lt">
            <p class="otw">夏季赛</p>
            <p class="clC lt-rt">10:26</p>
          </div>
          <p class="ct clA">第二局</p>
          <div class="rt">
            <div class="friend"></div>
            <p class="clC">2345</p>
          </div>
        </div>

        <div class="items">
          <div class="left">

            <div class="box">
              <div class="lt">
                <p>0</p>
                <p class="mgT24">1</p>
              </div>
              <div class="icon">
                <img src="../assets/images/schedule/GAM.png" />
                <img class="mgT24" src="../assets/images/schedule/GAM.png" />
              </div>
              <div>
                <p>GAM</p>
                <p class="mgT24">EVS</p>
              </div>
            </div>

            <div class="rt clA">
              <p>18</p>
              <p class="mgT24">15</p>
            </div>

          </div>
          <div class="right">
            <div class="top">
              <p>1.61</p>
              <p class="mgT24">2.23</p>
            </div>
            <div class="icon bofang"></div>
          </div>
        </div>
      </div>
    
      <div class="boxCenter bdlt bgF mgT20">
        <div class="tt">
          <div class="lt">
            <p class="otw">2020ldl夏季赛…</p>
            <p class="clC lt-rt">10:26</p>
          </div>
          <p class="ct clA">第一局</p>
          <div class="rt">
            <div class="friend"></div>
            <p class="clC">2345</p>
          </div>
        </div>

        <div class="items">
          <div class="left">

            <div class="box">
              <div class="lt">
                <p>0</p>
                <p class="mgT24">1</p>
              </div>
              <div class="icon">
                <img src="../assets/images/schedule/GAM.png" />
                <img class="mgT24" src="../assets/images/schedule/GAM.png" />
              </div>
              <div>
                <p>GAM</p>
                <p class="mgT24">EVS</p>
              </div>
            </div>

            <div class="rt clA">
              <p>18</p>
              <p class="mgT24">15</p>
            </div>

          </div>
          <div class="right">
            <div class="top">
              <p>1.61</p>
              <p class="mgT24">2.23</p>
            </div>
            <div class="icon bofang"></div>
          </div>
        </div>
      </div>

      <div class="boxCenter bgF mgT20">
        <div class="tt">
          <div class="lt">
            <p class="otw clC">夏季赛</p>
            <p class="clC lt-rt">10:26</p>
          </div>
          <p class="ct clA clO">未开赛</p>
          <div class="rt">
            <div class="friend"></div>
            <p class="clC">2345</p>
          </div>
        </div>

        <div class="items">
          <div class="left">

            <div class="box">
              <div class="lt">
                <p>0</p>
                <p class="mgT24">1</p>
              </div>
              <div class="icon">
                <img src="../assets/images/schedule/GAM.png" />
                <img class="mgT24" src="../assets/images/schedule/GAM.png" />
              </div>
              <div>
                <p>GAM</p>
                <p class="mgT24">EVS</p>
              </div>
            </div>

            <div class="rt clA clAend">
              <p>18</p>
              <p class="mgT24">15</p>
            </div>

          </div>
          <div class="right">
            <div class="top clend">
              <!-- <p>1.61</p>
              <p class="mgT24">2.23</p> -->
            </div>
            <div class="icon lol2"></div>
          </div>
        </div>
      </div>

      <div class="boxCenter bgF mgT20">
        <div class="tt">
          <div class="lt">
            <p class="otw clC">夏季赛</p>
            <p class="clC lt-rt">10:26</p>
          </div>
          <p class="ct clA clO">完</p>
          <div class="rt">
            <div class="friend"></div>
            <p class="clC">2345</p>
          </div>
        </div>

        <div class="items">
          <div class="left">

            <div class="box">
              <div class="lt">
                <p>0</p>
                <p class="mgT24">1</p>
              </div>
              <div class="icon">
                <img src="../assets/images/schedule/GAM.png" />
                <img class="mgT24" src="../assets/images/schedule/GAM.png" />
              </div>
              <div>
                <p>GAM</p>
                <p class="mgT24">EVS</p>
              </div>
            </div>

            <div class="rt clA clAend">
              <p>18</p>
              <p class="mgT24">15</p>
            </div>

          </div>
          <div class="right">
            <div class="top clend">
              <p>1.61</p>
              <p class="mgT24">2.23</p>
            </div>
            <div class="icon lol3"></div>
          </div>
        </div>
      </div>
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

    goScheduleitems() {
      this.$router.push('scheduleitems')
    },


    tabSwitch(index,event) {
      switch(index) {
        case 1:
        this.$router.push('scheduling')
          break;
        case 2:
          this.$router.push('fixtures')
          break;
        case 3:
          this.$router.push('scheduleend')
          break;
        default:
          // this.$router.push('scheduling')
      } 
    },


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

  .bdlt {
    border-left: 0.04rem solid #FF5116;
  }
  .boxCenter {
    height: 1.96rem;
    .tt {
      padding-top: 0.18rem;
      margin-bottom: 0.28rem;

      font-size: 0.26rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #08979C;
      display: flex;
      .lt {
        flex-grow: 2;
        width: 40%;
        display: flex;
        margin-left: 0.14rem;
        .lt-rt {
          margin-left: 0.72rem;
          margin-left: 0.52rem;
        }
      }
      .ct {
        flex-grow: 1;
        width: 20%;
        text-align: center;
      }
      .rt {
        flex-grow: 2;
        width: 40%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 0.34rem;
        .friend {
          width: 0.26rem;
          height: 0.26rem;
          margin-right: 0.12rem;
          background-size: 100%;
          background-position: 0 0;
          background-repeat: no-repeat;
          background-image: url(./../assets/images/schedule/friend.png);
        }
      }
    }

    .items {
      display: flex;

      font-size: 0.24rem;
      font-weight: 600;
      color: #2B2626;

      .left {
        width: 50%;
        flex-grow: 1;
        border-right: 1px solid #eeeeee;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .box {
          display: flex;
          align-items: center;
          .icon {
            margin-left: 0.48rem;
            margin-right: 0.2rem;
            img {
              width: 0.36rem;
              height: 0.36rem;
              display: block;
            }
          }
          .lt {
            margin-left: 0.68rem;
          }
        }
        .rt {
          margin-right: 0.58rem;
        }
      }
      .right {
        width: 50%;
        flex-grow: 1;

        display: flex;
        justify-content: space-between;
        align-items: center;
        .top {

          margin-left: 0.4rem;
        }
        .icon {
          width: 0.42rem;
          height: 0.37rem;
          margin-right: 0.7rem;
          background-size: 100%;
          background-position: 0 0;
          background-repeat: no-repeat;
        }
        .bofang {
          background-image: url(./../assets/images/schedule/bofang.png);
        }
        .lol2 {
          background-image: url(./../assets/images/schedule/lol2.png);
        }
        .lol3 {
          background-image: url(./../assets/images/schedule/lol3.png);
        }

      }
    }




  }







}

</style>

