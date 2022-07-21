<!-- 分类 -->
<template>
  <div id="classList">
    <div class="topSearch">1245</div>
    <div class="contentBody">
      <div class="contentLeft">
        <div
          class="contentItem"
          v-for="(item, index) in leftList"
          :key="index"
          @click="leftClick(item, index)"
          :class="index == leftActive ? 'leftActive' : ''"
        >
          <img v-lazy="item.pic" alt="" />
          <div>{{ item.name }}</div>
        </div>
      </div>
      <div class="contentRight">
        <div class="rightList" v-for="(item, index) in rightList" :key="index">
          <img class="tImg" v-lazy="item.pic" alt="" />
          <div class="rTitle">
            <div class="title" @click="lookInfo(item)">{{ item.skuName }}</div>
            <div class="onBot">
              <div class="onBotfont">¥{{ item.pice }}</div>
              <div><van-icon name="shopping-cart-o" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      leftActive: 0,
      leftList: [],
      rightList: [],
    };
  },
  //监听属性类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //⽅法集合
  methods: {
    leftClick(item, index) {
      this.leftActive = index;
      this.getinfiList(item);
    },
    lookInfo(item) {
      this.$router.push({
        path: '/classifiCation/goodsInfo',
        query: { iteminfo: item },
      });
    },
    getqueryList() {
      this.axiosPost('/pyCategory/queryList', {
        name: '',
      }).then(res => {
        this.leftList = res.data.data.list;
        console.log(res);
      });
    },
    getinfiList(item) {
      this.axiosPost('/pySku/queryList', {
        categoryId: item.id,
      }).then(res => {
        this.rightList = res.data.data.list;
        console.log(res);
      });
    },
  },
  //⽣命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getqueryList();
    this.getinfiList({ id: '4' });
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
</style>