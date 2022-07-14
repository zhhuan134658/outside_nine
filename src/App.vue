<template>
  <div id="app">
    <router-view class="app-bottom" />
    <div class="app-version">
      <span>{{ version }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      showPage: '',

      version: '0.0.1Bate',
    };
  },
  methods: {
    _isMobile() {
      const flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
      );
      return flag;
    },
  },
  created() {
    if (this._isMobile()) {
      this.showPage = 1;
      console.log('手机');
    } else {
      this.showPage = 2;
      console.log('电脑');
    }
    console.log(this.showPage);
  },
};
</script>


<style lang="less">
// * {
//   margin: 0;
//   padding: 0;
// }
#app {
  background: #f6f6f6;
  width: 100%;
  height: 100%;

  .app-bottom {
    height: 100%;
  }
  .app-version {
    position: fixed;
    bottom: 0;
    right: 0;
    opacity: 0.15;
    pointer-events: none;
  }
  .app-right {
    display: flex;
    width: 15.73rem;
  }
}
</style>
