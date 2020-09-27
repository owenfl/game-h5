<template>
  <div class="forget">

    <nut-navbar :close-show="false" :more-show="false" :search-show="false" title="重置密码" >
      <a slot="search-icon"></a>
    </nut-navbar>

    <nut-field :disableClear="true" v-model="val2"  label="旧密码" textAlign="left" placeholder="请输入旧密码" />  
    <nut-field :disableClear="true" v-model="val2"  label="新密码" textAlign="left" placeholder="请输入新密码" />  
    <nut-field :disableClear="true" v-model="val2"  label="确认密码" textAlign="left" placeholder="请确认新密码" />  

    <nut-button 
      block 
      shape="circle"
    >
      立即修改
    </nut-button>

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
  mounted() {

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



