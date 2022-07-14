<!--  -->
<template>
  <div id="home">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'home',
  components: {},
  data() {
    return {};
  },
  //监听属性类似于data概念
  computed: {},
  //监控data中的数据变化

  //⽅法集合
  methods: {},
  //⽣命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //⽣命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.$refs.childmenuList.getMenuList();
    // this.getReady();
  },

  //beforeCreate() {}, //⽣命周期 - 创建之前
  //beforeMount() {}, //⽣命周期 - 挂载之前
  //beforeUpdate() {}, //⽣命周期 - 更新之前
  //updated() {}, //⽣命周期 - 更新之后
  //beforeDestroy() {}, //⽣命周期 - 销毁之前
  //destroyed() {}, //⽣命周期 - 销毁完成
  //activated() {}, //如果页⾯有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
#home {
  .van-tabbar--fixed {
    position: absolute;
  }
}
</style>