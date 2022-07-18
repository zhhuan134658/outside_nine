<!--  -->
<template>
  <div id="home">
    <div class="homeTop">
      <van-nav-bar
        left-text="返回"
        right-text="搜索"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #title>
          <van-field v-model="searchValue" placeholder="请输入" />
        </template>
      </van-nav-bar>
    </div>
    <router-view class="homeCont" />
    <div class="homeBottom">
      <van-tabbar
        v-model="active"
        @change="tabberChange"
        :safe-area-inset-bottom="true"
        route
      >
        <van-tabbar-item replace to="/homePage/homePageindex" icon="home-o"
          >主页</van-tabbar-item
        >
        <van-tabbar-item replace to="/classifiCation/classList" icon="apps-o"
          >分类</van-tabbar-item
        >
        <van-tabbar-item
          replace
          to="/shoppingCart/shoppingList"
          icon="shopping-cart-o"
          >购物车</van-tabbar-item
        >
        <van-tabbar-item replace to="/myOwn/myownList" icon="user-o"
          >我的</van-tabbar-item
        >
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: 'home',
  components: {},
  data() {
    return {
      active: 0,
      searchValue: '',
    };
  },
  //监听属性类似于data概念
  computed: {},
  //监控data中的数据变化

  //⽅法集合
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
    tabberChange(active) {
      console.log('active', active);
    },
  },
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
  .homeBottom {
    .van-hairline--top-bottom {
      height: 0.45rem;
      .van-tabbar-item {
        font-size: 0.12rem;
        .van-tabbar-item__icon {
          font-size: 0.23rem;
        }
      }
    }
  }
  .homeCont {
    max-height: calc(100vh - 100px);
    overflow-y: auto;
  }
}
</style>