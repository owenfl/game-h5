<template>
  <div id="app">
    <router-view />
    <menu-component v-if="isShowMenu"></menu-component>

  </div>
</template>

<script>
import menuComponent from './common/menu'
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  name: 'App',
  components: {
    menuComponent
  },
  computed: {
    ...mapState({
      isShowMenu: state=>state.isShowMenu,
    }),
  }
}
</script>

<style lang="less">
#app {
  font-family: "微软雅黑", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body {
  background: #F7F7F7;
} 



.my, .detail,
.scheduleitems,
.scheduleDetail
{
  background: #ffffff;
  height: 100vh;
}




li{
  list-style: none;
}
.dpnn {
  display: none;
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  padding: 0;
}

.otw {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mgL18 {
  margin-left: 0.18rem;
}
.mgR18 {
  margin-right: 0.18rem;
}
.pdL18 {
  padding-left: 0.18rem;
}
.pdR18 {
  padding-right: 0.18rem;
}


.mgL8 {
  margin-left: 0.08rem;
}
.mgR8 {
  margin-right: 0.08rem;
}

.mgT20 {
  margin-top: 0.2rem;
}

.schedule {
  .nut-tab-item {
    height: 0 !important;
    padding: 0 !important;
    border: 0px solid #fff;
  }
  .nut-tab-link {
    color: #FF5116 !important;
  }
  .nav-bar-top {
    background: #FF5116 !important;
  }
  .nut-tab-link,
  .nut-tab-disable .nut-tab-link {
    color: #2B2626 !important;
  }
}


.scheduleend,.scheduling {
  .nut-navbar {
    border-bottom: 1px solid #F5F6F7;
  }
  .nut-calendar-month-day-active {
    background-color: #FF865C !important;
  }
  .nut-calendar-confirm-btn {
    background-color: #FF865C !important;
  }
  .nut-calendar-month-day-choose {
    color: #FF5116 !important;
  }

}



.clA {
  color: #FF5116;
}
.clAend {
  color: #e9b6a3;
}
.clend {
  color: #a8a8a8;
}







.clC {
  color: #2B2626;
}
.clO {
  color: #000000;
}



.mgT24 {
  margin-top: 0.24rem;
}

.bgF {
  background: #ffffff;
}

@media (max-width: 1920px) {
  html {
    font-size: 256px;
  }
}
@media (max-width: 1842px) {
  html {
    font-size: 245.6px;
  }
}
@media (max-width: 1762px) {
  html {
    font-size: 234.93px;
  }
}
@media (max-width: 1682px) {
  html {
    font-size: 224.26px;
  }
}
@media (max-width: 1602px) {
  html {
    font-size: 213.6px;
  }
}
@media (max-width: 1522px) {
  html {
    font-size: 202.93px;
  }
}
@media (max-width: 1442px) {
  html {
    font-size: 192.26px;
  }
}
@media (max-width: 1362px) {
  html {
    font-size: 181.6px;
  }
}
@media (max-width: 1282px) {
  html {
    font-size: 170.93px;
  }
}
@media (max-width: 1202px) {
  html {
    font-size: 160.26px;
  }
}
@media (max-width: 1122px) {
  html {
    font-size: 149.6px;
  }
}
@media (max-width: 1042px) {
  html {
    font-size: 138.93px;
  }
}
@media (max-width: 1024px) {
  html {
    font-size: 136.53px;
  }
}
@media (max-width: 962px) {
  html {
    font-size: 128.26px;
  }
}
@media (max-width: 952px) {
  html {
    font-size: 126.93px;
  }
}
@media (max-width: 902px) {
  html {
    font-size: 120.26px;
  }
}
@media (max-width: 882px) {
  html {
    font-size: 117.6px;
  }
}
@media (max-width: 828px) {
  html {
    font-size: 110.4px;
  }
}
@media (max-width: 802px) {
  html {
    font-size: 106.93px;
  }
}
@media (max-width: 775px) {
  html {
    font-size: 103.33px;
  }
}
@media (max-width: 768px) {
  html {
    font-size: 102.4px;
  }
}
@media (max-width: 750px) {
  html {
    font-size: 100px;
  }
}
@media (max-width: 738px) {
  html {
    font-size: 98.4px;
  }
}
@media (max-width: 734px) {
  html {
    font-size: 97.86px;
  }
}
@media (max-width: 733px) {
  html {
    font-size: 97.73px;
  }
}
@media (max-width: 669px) {
  html {
    font-size: 89.2px;
  }
}
@media (max-width: 642px) {
  html {
    font-size: 85.6px;
  }
}
@media (max-width: 602px) {
  html {
    font-size: 80.26px;
  }
}
@media (max-width: 570px) {
  html {
    font-size: 76px;
  }
}
@media (max-width: 535px) {
  html {
    font-size: 71.33px;
  }
}
@media (max-width: 455px) {
  html {
    font-size: 60.66px;
  }
}
@media (max-width: 437px) {
  html {
    font-size: 58.26px;
  }
}

@media (max-width: 414px) {
  html {
    font-size: 55.2px;
  }
}

@media (max-width: 412px) {
  html {
    font-size: 54.93px;
  }
}
@media (max-width: 386px) {
  html {
    font-size: 51.46px;
  }
}

@media (max-width: 375px) {
  html {
    font-size: 50px;
  }
}

@media (max-width: 370.8px) {
  html {
    font-size: 49.44px;
  }
}
@media (max-width: 360px) {
  html {
    font-size: 48px;
  }
}

@media (max-width: 320px) {
  html {
    font-size: 42.66px;
  }
}

</style>


