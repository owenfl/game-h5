<template>
  <div class="my">
    <div class="headbg">
      <div class="disBox">
        <div class="portrait">
          <img :src="userloginInfo.avatar" alt="">
        </div>
        <div class="portrait-right">
          <router-link to="login" v-if="!isLogin" class="nick-name">
            <p>点击登录</p>
            <p style="font-size: 0.24rem;">您当前是访问身份</p>
          </router-link>

          <div v-if="isLogin">
            <div class="nick-name">
              {{userloginInfo.user_nicename}}
              <!-- {{$store.state.userInfo.user_nicename}} -->
            </div>
            <!-- <div class="boxCenter">
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
            </div> -->
            <div v-if="isLogin" class="pre-id">
              <!-- ID:{{$store.state.userInfo.id}} -->
              <p v-if="userloginInfo.id">ID:{{userloginInfo.id}}</p>
            </div>
            <!-- <div class="pre-id">
              <span style="margin-right: 0.44rem;">15  粉丝</span>
              <span>45  关注</span>
            </div> -->
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
      <div v-if="isLogin" class="boxCenter" @click="signOut">
        <div class="icon exit"></div>
        <div class="boxFlex">退出</div>
        <div class="icon-arrow-right"></div>
      </div>
    </div>


  </div>
</template>

<script>
import { getCookie, delCookie } from './../assets/js/cookie'
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  name: 'my',
  data () {
    return {
      isLogin:true,

    }
  },
  watch: {},
  computed: {
    ...mapState({
      userloginInfo: state=>state.userloginInfo,
    }),
  },
  mounted(){
    this.$nextTick(()=>{
      this.getBaseInfo()
      this.$store.dispatch("setShowMenu", true)

      if(!getCookie('uid') || !getCookie('token')){
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
      
    })
  },
  methods:{

    signOut(){//退出登录
      this.$axios.post('appapi/',{
        uid: getCookie('uid'),
        token: getCookie('token'),
        service: 'Login.Logout'
      }).then((response) => {
        let res = response.data.data;
        if(res.code == 0){
          delCookie('uid');
          delCookie('token');
          this.isLogin = true;
          this.userloginInfo.avatar = "./../assets/images/my/head.png"

          this.$toast.text('退出成功!');
          setTimeout(() => {
            this.$router.push('login')
          },1000)

          console.log(res)
        }
      })

    },
    getBaseInfo() {
      this.$axios.post('appapi/',{
        uid: getCookie('uid'),
        token: getCookie('token'),
        service:'User.GetBaseInfo'
      }).then((response) => {
        let res = response.data.data;
        if(res.code == 0){
          //commit提交mutations,更新为使用dispatch提交actions
          this.$store.dispatch("setUserloginInfo",res.info[0]);
        } else {
          delCookie('uid');
          delCookie('token');
          this.isLogin = false;
        }
      })

    }


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

      background-size: 100%;
      background-position: 0 0;
      background-repeat: no-repeat;
      background-image: url(./../assets/images/my/head.png);

      img {
        max-width: 100%;
        width: 100%;
      }
    }
    .portrait-right {
      margin-top: 0.22rem;
      // padding-top: 0.22rem;
      .nick-name {
        font-size: 0.42rem;
        font-weight: 600;
        color: #FFFFFF;
        text-decoration: none;
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

