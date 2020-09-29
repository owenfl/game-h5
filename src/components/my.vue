<template>
  <div>
    <div class="headbg">
      <div class="disBox">
        <div class="portrait"></div>
        <div class="portrait-right">
          <div class="nick-name">Tommy</div>

          <div class="boxCenter">
            <div class="genderBox">
              <div class="star"></div>
            </div>
            <div class="liveBox" style="margin-left: 0.12rem; margin-right: 0.12rem;">
              <div class="live"></div>
              <span>7</span>
            </div>
            <div class="starBox">
              <div class="star"></div>
              <span>20</span>
            </div>
          </div>

          <div class="pre-id">ID:2345556</div>
          <div class="pre-id">
            <span style="margin-right: 0.44rem;">15  粉丝</span>
            <span>45  关注</span>
          </div>
        </div>
      </div>
    </div>

    <div class="banner"></div>

    <div class="mymenu">
      <div class="boxCenter">
        <div class="icon subs"></div>
        <div class="boxFlex">订阅主播</div>
        <div class="icon-arrow-right"></div>
      </div>
      <div class="boxCenter">
        <div class="icon online"></div>
        <div class="boxFlex">在线客服</div>
        <div class="icon-arrow-right"></div>
      </div>
      <div class="boxCenter">
        <div class="icon psw"></div>
        <div class="boxFlex">修改密码</div>
        <div class="icon-arrow-right"></div>
      </div>
      <div class="boxCenter">
        <div class="icon fb"></div>
        <div class="boxFlex">意见反馈</div>
        <div class="icon-arrow-right"></div>
      </div>
      <div class="boxCenter" @click="signOut">
        <div class="icon exit"></div>
        <div class="boxFlex">退出 {{noLogin}} </div>
        <div class="icon-arrow-right"></div>
      </div>
    </div>

    <menu-component></menu-component>
  </div>
</template>

<script>
import menuComponent from './../common/menu'

export default {
  name: 'my',
  components: {
    menuComponent
  },
  data () {
    return {
      noLogin:true,

    }
  },
  mounted(){
    this.$nextTick(()=>{
      if(localStorage.getItem('token')){
          this.noLogin = false;
      }
    })
  },
  methods:{

    signOut(){//退出登录
      this.$axios.post('appapi/',{
          uid:localStorage.getItem('uid'),
          token:localStorage.getItem('token'),
          service:'PCLogin.Logout'
      }).then((response) => {
          let res = response.data.data;
          if(res.code == 0){
              localStorage.removeItem('uid');
              localStorage.removeItem('token');
              this.noLogin = true;

              console.log(res)
          }
      })

      setTimeout(() => {
        this.$router.push('login')
      },1000)


    },


  }
}
</script>


<style lang="less" scoped>
.headbg {
  max-width: 100%;
  width: 100%;
  height: 3.62rem;
  background-size: 100%;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-image: url(./../assets/images/my/bg.png);
  .disBox {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    padding-top: 0.7rem;
    .portrait {
      margin-left: 0.38rem;
      margin-right: 0.28rem;
      width: 1.33rem;
      height: 1.33rem;
      border-radius: 50%;
      background: #FFE9E4E3;
    }
    .portrait-right {
      .nick-name {
        font-size: 0.42rem;
        font-weight: 600;
        color: #FFFFFF;
      }

      .boxCenter {
        flex-direction: row;
        display: flex;
        margin-top: 0.08rem;
        margin-bottom: 0.1rem;
        .genderBox {
          padding: 0.03rem 0.08rem;
          background: linear-gradient(270deg, #E34CF5 0%, #D052FC 100%);
          border-radius: 0.16rem;
          font-size: 0.22rem;
          font-weight: 400;
          color: #FFFFFF;
          .star {
            width: 0.18rem;
            height: 0.18rem;
            display: inline-block;
            background-size: 100%;
            background-position: 0 0;
            background-repeat: no-repeat;
            background-image: url(./../assets/images/my/star.png);
          }
        }
        .liveBox {
          padding: 0.03rem 0.08rem;
          background: linear-gradient(270deg, #9856EE 0%, #6906DA 100%);
          border-radius: 0.16rem;
          font-size: 0.22rem;
          font-weight: 400;
          color: #FFFFFF;
          .live {
            width: 0.15rem;
            height: 0.21rem;
            display: inline-block;
            background-size: 100%;
            background-position: 0 0;
            background-repeat: no-repeat;
            background-image: url(./../assets/images/my/live.png);
          }
        }
        .starBox {
          padding: 0.03rem 0.08rem;
          background: linear-gradient(270deg, #E64403 0%, #FF9502 100%);
          border-radius: 0.16rem;
          font-size: 0.22rem;
          font-weight: 400;
          color: #FFFFFF;
          .star {
            width: 0.18rem;
            height: 0.18rem;
            display: inline-block;
            background-size: 100%;
            background-position: 0 0;
            background-repeat: no-repeat;
            background-image: url(./../assets/images/my/star.png);
          }
        }
      }

      .pre-id {
        font-size: 0.24rem;
        font-weight: 400;
        color: #FFFFFF;
      }

    }
  }

}

.banner {
  width: 6.84rem;
  height: 1.91rem;
  margin: 0 auto;
  margin-top: -1.12rem;
  background-size: 100%;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-image: url(./../assets/images/my/banner.png);
}

.mymenu {
  font-size: 0.28rem;
  font-weight: 400;
  color: #2B2626;
  .boxCenter {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #F5F6F7;
    padding-top: 0.28rem;
    padding-bottom: 0.28rem;
    .boxFlex {
      flex-grow: 1;
    }
    .icon {
      background-size: 100%;
      background-position: 0 0;
      background-repeat: no-repeat;
      margin-left: 0.2rem;
      margin-right: 0.26rem;
    }
    .subs {
      width: 0.4rem;
      height: 0.39rem;
      background-image: url(./../assets/images/my/subs.png);
    }
    .online {
      width: 0.39rem;
      height: 0.36rem;
      background-image: url(./../assets/images/my/online.png);
    }
    .psw {
      width: 0.36rem;
      height: 0.42rem;
      background-image: url(./../assets/images/my/psw.png);
    }
    .fb {
      width: 0.36rem;
      height: 0.40rem;
      background-image: url(./../assets/images/my/fb.png);
    }
    .exit {
      width: 0.38rem;
      height: 0.39rem;
      background-image: url(./../assets/images/my/exit.png);
    }
    .icon-arrow-right {
      width: 0.3rem;
      height: 0.3rem;
      margin-right: 0.22rem;
      background-size: 100%;
      background-position: 0 0;
      background-repeat: no-repeat;
      background-image: url(./../assets/images/common/icon-arrow-right.png);
    }
  }

}
</style>

