<!--商品详情  -->
<template>
  <div id="goodsInfo">
    <div class="infoswipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="infoname">
      <div class="name_top">{{ iteminfo.name }}</div>
      <div class="name_bom">¥{{ iteminfo.price }}</div>
    </div>
    <van-divider
      :style="{ color: '#ee0a24', borderColor: '#ee0a24', padding: '0 16px' }"
    >
      商品规格
    </van-divider>
    <div class="newdro">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
      <div class="newfib">
        <div>
          <div>规格：500ml</div>
          <div>价格：2200（库存充足）</div>
        </div>
        <div><van-stepper v-model="stepper" /></div>
      </div>
    </div>
    <van-divider
      :style="{ color: '#ee0a24', borderColor: '#ee0a24', padding: '0 16px' }"
    >
      商品详情
    </van-divider>
    <div class="imgs">
      <img
        src="http://www.jsngw.cn/Uploads/ueditor/image/20220428/1651111673758176.jpg"
        alt=""
      />
      <img
        src="http://www.jsngw.cn/Uploads/ueditor/image/20220428/1651111673758176.jpg"
        alt=""
      />
    </div>
    <van-goods-action>
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        @click="onClickIcon"
        badge="5"
      />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button
        type="danger"
        text="添加购物车"
        @click="onClickButton"
      />
    </van-goods-action>
  </div>
</template>
<script>
export default {
  name: 'goodsInfo',
  data() {
    return {
      stepper: 1,
      value1: 0,
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      iteminfo: {},
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
  //监听属性类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //⽅法集合
  methods: {
    plus() {},
    minus() {},
    onSubmit() {},
  },
  //⽣命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.iteminfo = this.$route.query.iteminfo;
    console.log(this.iteminfo);
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