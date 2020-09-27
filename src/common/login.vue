<template>
  <div class="login">
    <div class="loginbg"></div>
    <div class="icon-arrow-left" @click="goBack"></div>

    <div class="logo">
      <img src="./../assets/images/login/login-logo.png" alt="">
    </div>

    <div class="inputBox">
      <div class="inputbg"></div>
      <div class="box disBox boxCenter">
        <div class="shouji"></div>
        <div>+86</div>
        <div class="xiala"></div>
        <input type="number" v-model="val5" @input-func="checkVal5" class="boxFlex" placeholder="请输入您的手机号">
      </div>
    </div>
    <div class="inputBox" style="margin-top: 0.23rem; margin-bottom: 0.42rem;">
      <div class="inputbg"></div>
      <div class="box disBox boxCenter">
        <div class="mima"></div>
        <input type="password" class="boxFlex" placeholder="请输入密码">
      </div>
    </div>

    <nut-button 
      block 
      shape="circle"
      @click="loginbtn"
    >
      立即登录
    </nut-button>

    <router-link to="forget">
    <div class="bottombtn">
      <span>立即注册</span>

      <span>
         忘记密码
      </span>

    </div>
    </router-link>


  </div>
</template>

<script>
export default {
  name: 'login',
  props: {
    msg: String
  },
  data() {
    return {
      val5: '',
      state:"error"
    };
  },
  mounted() {

  },
  methods:{
    goBack() {
      this.$router.go(-1)
    },
    loginbtn() {
      this.$toast.text('用户登录模块');
    },
    checkVal5(data){
      if(!(/^1[3456789]\d{9}$/.test(data))){ 
       console.log(false)
       this.state="error";
      } else{
         console.log(true)
        this.state="";
      }
    },
  }

}
</script>

<style lang="less" scoped>
.login {
  // position: absolute;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;

  -webkit-transition: 0.3s;
  transition: 0.3s;
  overflow-x: hidden;
  overflow-y: auto;
  .loginbg {
    // position: absolute;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: url(./../assets/images/login/loginbg.png) no-repeat left center;
    background-attachment: fixed;
    background-size: cover;
    height: 100%;
    height: 100vh;
  }
  .icon-arrow-left {
    display: block;
    width: 0.38rem;
    height: 0.38rem;
    margin: 0.2rem;
    position: relative;
    background-size: 100%;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-image: url(./../assets/images/common/icon-arrow-left.png);
  }
  .logo {
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    margin: 0.65rem 0 1.2rem;
    img {
      width: 4.45rem;
      height: 1.18rem;
      display: block;
      margin: 0 auto;
    }
  }


  .inputBox {
    width: 5.15rem;
    height: 0.91rem;
    position: relative;
    margin: 0 auto;
    .inputbg {
      width: 5.15rem;
      height: 0.91rem;
      border-radius: 0.46rem;
      background: #FFFFFF;
      opacity: 0.23;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
    }
    .box {
      display: flex;
      align-items: center;
      width: 5.15rem;
      height: 0.91rem;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1200;
      font-size: 0.24rem;
      font-weight: 400;
      color: #FFFFFF;
      .shouji {
        width: 0.3rem;
        height: 0.37rem;
        margin-left: 0.38rem;
        margin-right: 0.14rem;
        background-size: 100%;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-image: url(./../assets/images/login/shouji.png);
      }
      .xiala {
        width: 0.24rem;
        height: 0.15rem;
        margin-left: 0.24rem;
        margin-right: 0.24rem;
        background-size: 100%;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-image: url(./../assets/images/login/xiala.png);
      }
      .mima {
        margin-left: 0.38rem;
        margin-right: 0.14rem;
        width: 0.3rem;
        height: 0.37rem;
        overflow: hidden;
        background-size: 100%;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-image: url(./../assets/images/login/mima.png);
      }
      input {
        display: block;
        height: 0.91rem;
        outline: none;
        color: #FFFFFF;
        font-size: 0.24rem;
        background: none;
      }
    }
  }


  .nut-button.circle {
    width: 5.15rem;
    height: 0.91rem;
    margin: 0 auto;
    display: block;
    background: #FF5116;
  }
  .bottombtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 5.14rem;
    margin: 0.23rem auto;
    span {
      font-size: 0.26rem;
      font-weight: 400;
      color: #FFFFFF;
    }
  }

}
</style>
