<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <skeleton-square 
      width="200px"
    >
    </skeleton-square>

    <skeleton-circle 
      diameter="50px"
    >
    </skeleton-circle>

    <row  padding="15px 10px 0">
      <skeleton-square 
        width="200px"
      ></skeleton-square>
      <skeleton-square 
        width="50px" 
        margin="0 0 0 40px"
      ></skeleton-square>
      <skeleton-square 
        width="50px" 
        margin="0 0 0 10px"
      ></skeleton-square>
    </row>

  </div>
</template>

<script>
export default {
  name: 'home',
  components: {

  },
  data () {
    return {
      msg: "home"
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.init();
    })

  },
  methods:{
    init() {
      console.log("process.env.NODE_ENV::",process.env.NODE_ENV)
      console.log("process.env.VUE_APP_URL::",process.env.VUE_APP_URL)
      console.log("VUE_APP_VERSION::", process.env.VUE_APP_VERSION)

    }

  }
}
</script>
