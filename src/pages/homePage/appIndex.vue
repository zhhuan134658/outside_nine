<!--  -->
<template>
  <div id="appIndex">
    <van-swipe :autoplay="3000" style="height: 200px">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="menu_list">
      <div
        class="menu_list_item"
        v-for="(item, index) in menuList"
        :key="index"
        @click="goInfo(item)"
      >
        <img class="item_img" v-lazy="item.pic" alt="" />
        <div class="item_name">{{ item.name }}</div>
      </div>
    </div>
    <!-- 热门资讯  -->
    <div class="notice">
      <div class="notice_title">热门资讯</div>
      <div class="notice_right">
        <van-notice-bar
          background="#ffffff"
          left-icon="volume-o"
          text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
        />
      </div>
    </div>

    <div class="valve_series">
      <van-divider
        :style="{
          borderColor: '#9459f7',
          padding: '10px 30px',
        }"
      >
        热销产品
      </van-divider>
    </div>

    <div class="contentList">
      <div
        class="contentList_item"
        v-for="(item, index) in contentList"
        :key="index"
      >
        <img v-lazy="item.pic" alt="" />
        <div class="con_name">{{ item.skuName }}</div>
        <div class="price">¥{{ item.pice }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'appIndex',
  data() {
    return {
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
      menuList: [],
      contentList: [],
      active: 0,
    };
  },
  //监听属性类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //⽅法集合
  methods: {
    getqueryList() {
      this.axiosPost('/pyCategory/queryList', {
        name: '',
      }).then(res => {
        this.menuList = res.data.data.list;
        console.log(res);
      });
    },
    //热销产品
    getpySku() {
      this.axiosPost('/pySku/queryList', {
        status: 1,
      }).then(res => {
        this.contentList = res.data.data.list;
        console.log(res);
      });
    },
    goInfo(item) {
      console.log(item, 'item');
      this.$router.push({
        path: '/homePage/infoindex',
        query: {
          item: JSON.stringify(item),
        },
      });
    },
  },
  //⽣命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getqueryList();
    this.getpySku();
  },
  //⽣命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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
#test {
}
</style>