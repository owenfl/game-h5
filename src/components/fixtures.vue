<template>
  <div class="scheduling">

    <nut-navbar @on-click-back="goBack" :close-show="false" :more-show="false" :search-show="false" title="赛程" >
      <a slot="search-icon"></a>
    </nut-navbar>

    <div class="head bgF pdL18 pdR18">
      <div>
        <div class="text">10-06</div>
        <p>星期二</p>
      </div>
      <div>
        <div>10-07</div>
        <p>星期三</p>
      </div>
      <div>
        <div>10-08</div>
        <p>星期四</p>
      </div>
      <div>
        <div>10-09</div>
        <p>星期五</p>
      </div>
      <div>
        <div>10-10</div>
        <p>星期六</p>
      </div>

      <nut-cell 
        class="rili"
        @click.native="openSwitch('isVisible1')">
      </nut-cell>
      <!-- <nut-cell 
        class="rili"
        :showIcon="true"  
        :desc="date1 ? `${date1[0]}至${date1[1]}` : '请选择'"
        @click.native="openSwitch('isVisible1')">
      </nut-cell> -->
    </div>

    <nut-calendar
      :is-visible="isVisible1"
      :default-value="date1"
      type="range"
      :start-date="`2020-08-6`"
      :end-date="`2020-12-20`"
      @close="closeSwitch('isVisible1')"
      @choose="setChooseValue1"
    >
    </nut-calendar>


    <!-- <nut-cell 
      :showIcon="true" 
      title="选择日期"
      :desc="date ? `${date} ${dateWeek}` : '请选择'"
      @click.native="openSwitch('isVisible')">
    </nut-cell>
    <nut-calendar
      :is-visible="isVisible"
      :default-value="date"
      @close="closeSwitch('isVisible')"
      @choose="setChooseValue"
      :start-date="`2019-10-11`"
      :end-date="`2020-11-11`"
      >
    </nut-calendar> -->



    <div class="boxCenter bgF mgT20">
      <div class="tt">
        <div class="lt">
          <p class="otw">夏季赛</p>
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
          <div class="icon lol2"></div>
        </div>
      </div>
    </div>




    <div class="boxCenter bgF mgT20">
      <div class="tt">
        <div class="lt">
          <p class="otw">夏季赛</p>
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
          <div class="icon lol2"></div>
        </div>
      </div>
    </div>




    <div class="boxCenter bgF mgT20">
      <div class="tt">
        <div class="lt">
          <p class="otw">夏季赛</p>
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
          <div class="icon lol2"></div>
        </div>
      </div>
    </div>


    <menu-component></menu-component>
  </div>
</template>

<script>
import menuComponent from './../common/menu'
import Utils from './../utils/date.js'

export default {
  name: 'detail',
  components: {
    menuComponent
  },
  data(){
    return{
      isVisible: false,
      date: null,
      dateWeek: null,

      isVisible1: false,
      date1: ['2020-08-6', '2020-12-20']

    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.$store.dispatch("setShowMenu", false)

    })
  },
  methods:{
    goBack() {
      this.$router.go(-1)
    },


    tabSwitch() {},

    openSwitch(param) {
      this[`${param}`] = true;
    },
    closeSwitch(param) {
      this[`${param}`] = false;
    },
    setChooseValue(param) {
      this.date = param[3];
      this.dateWeek = param[4];
    },

    setChooseValue1(param) {
      this.date1 = [...[param[0][3], param[1][3]]];
    }

  }
}

</script>

<style lang="less" scoped>
// html,body{
//   background: #F7F7F7 !important;
//   background: #eeeeee !important;
// }

.scheduling {

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.8rem;
    div {
      text-align: center;
      font-size: 0.22rem;
      .text {
        font-weight: 400;
        color: #2B2626;
      }
      p {
        color: #a8a8a8;
        text-align: center;
        margin-top: 0.02rem;
      }

    }

    .rili {
      width: 0.36rem;
      height: 0.37rem;
      background-size: 100%;
      background-position: 0 0;
      background-repeat: no-repeat;
      background-image: url(./../assets/images/schedule/rili.png);
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

