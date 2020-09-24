<template>
  <div>
    <h1>用户登录模块</h1>
  </div>
</template>

<script>
export default {
  name: 'login',
  props: {
    msg: String
  },
  mounted() {
    this.$toast.text('用户登录模块');
  }

}
</script>
