<template>
  <div class="forget">
    <nut-navbar :close-show="false" :more-show="false" :search-show="false" title="订阅主播" >
      <a slot="search-icon"></a>
    </nut-navbar>

    <nut-avatar size-num="80" bg-image="https://img14.360buyimg.com/imagetools/jfs/t1/130112/36/5492/38449/5f1f964cEfd6f41bf/bec836b48b55bb00.jpg"></nut-avatar>
    <nut-avatar size-num="60" bg-image="https://img14.360buyimg.com/imagetools/jfs/t1/130112/36/5492/38449/5f1f964cEfd6f41bf/bec836b48b55bb00.jpg"></nut-avatar>
    <nut-avatar size-num="40" bg-image="https://img14.360buyimg.com/imagetools/jfs/t1/130112/36/5492/38449/5f1f964cEfd6f41bf/bec836b48b55bb00.jpg"></nut-avatar>
    <nut-avatar size-num="32" bg-image="https://img14.360buyimg.com/imagetools/jfs/t1/130112/36/5492/38449/5f1f964cEfd6f41bf/bec836b48b55bb00.jpg"></nut-avatar>

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

    };
  },  
  mounted(){
    this.$nextTick(()=>{
      this.$store.dispatch("setShowMenu", false)
    })
    
  },
  methods:{

  }

}
</script>

<style lang="less" scoped>

  .nut-button.circle {
    width: 5.15rem;
    height: 0.91rem;
    margin: 0.78rem auto 0;
    display: block;
    background: #FF5116;
  }
  .nut-field .nut-field-label {
    font-size: 0.28rem;
    color: #2B2626;
    width: 1.2rem !important;
  }

</style>



