<template>
  <div>
    <nut-tabbar @tab-switch="tabSwitch" :tabbar-list="menus" :bottom="true"> </nut-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          tabTitle: '首页',
          curr: true,
          // href:"/home",
          icon: require('./../assets/images/menu/home.png'),
          activeIcon: require('./../assets/images/menu/home-cur.png')
        },
        {
          tabTitle: '赛事',
          curr: false,
          // href:"",
          icon: require('./../assets/images/menu/competition.png'),
          activeIcon: require('./../assets/images/menu/competition-cur.png')
        },
        // {
        //   tabTitle: '视频',
        //   curr: false,
        //   href:"",
        //   icon: require('./../assets/images/menu/video.png'),
        //   activeIcon: require('./../assets/images/menu/video-cur.png')
        // },
        // {
        //   tabTitle: '动态',
        //   curr: false,
        //   href:"",
        //   icon: require('./../assets/images/menu/dynamic.png'),
        //   activeIcon: require('./../assets/images/menu/dynamic-cur.png')
        // },
        {
          tabTitle: '我的',
          curr: false,
          // href:"/#/my",
          icon: require('./../assets/images/menu/my.png'),
          activeIcon: require('./../assets/images/menu/my-cur.png')
        }
      ]
    };
  },
  methods: {
    tabSwitch: function(value, index) {
      console.log(value, index);

      switch(index) {
        case 0:
          this.$router.push('home')
          break;
        case 1:
          this.$router.push('login')
          break;
        case 2:
          this.$router.push('my')
          break;
        default:
        this.$router.push('/')
      } 

    }
  }
};
</script>
