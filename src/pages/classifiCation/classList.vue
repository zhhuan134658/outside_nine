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
          <img v-lazy="item.imgsrc" alt="" />
          <div>{{ item.name }}</div>
        </div>
      </div>
      <div class="contentRight">
        <div class="rightList" v-for="(item, index) in rightList" :key="index">
          <img class="tImg" v-lazy="item.imgsrc" alt="" />
          <div class="rTitle">
            <div class="title">{{ item.name }}</div>
            <div class="onBot">
              <div class="onBotfont">¥{{ item.price }}</div>
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
      leftList: [
        {
          imgsrc: 'http://www.jsngw.cn/Uploads/20220427/62692acf5de48.jpg',
          name: '茅台集团',
        },
        {
          imgsrc: 'http://www.jsngw.cn/Uploads/20220427/62692acf5de48.jpg',
          name: '茅台集团',
        },
        {
          imgsrc: 'http://www.jsngw.cn/Uploads/20220427/62692acf5de48.jpg',
          name: '茅台集团',
        },
        {
          imgsrc: 'http://www.jsngw.cn/Uploads/20220427/62692acf5de48.jpg',
          name: '茅台集团',
        },
        {
          imgsrc: 'http://www.jsngw.cn/Uploads/20220427/62692acf5de48.jpg',
          name: '茅台集团',
        },
        {
          imgsrc: 'http://www.jsngw.cn/Uploads/20220427/62692acf5de48.jpg',
          name: '茅台集团',
        },
        {
          imgsrc: 'http://www.jsngw.cn/Uploads/20220427/62692acf5de48.jpg',
          name: '茅台集团',
        },
        {
          imgsrc: 'http://www.jsngw.cn/Uploads/20220427/62692acf5de48.jpg',
          name: '茅台集团',
        },
        {
          imgsrc: 'http://www.jsngw.cn/Uploads/20220427/62692acf5de48.jpg',
          name: '茅台集团',
        },
        {
          imgsrc: 'http://www.jsngw.cn/Uploads/20220427/62692acf5de48.jpg',
          name: '茅台集团',
        },
        {
          imgsrc: 'http://www.jsngw.cn/Uploads/20220427/62692acf5de48.jpg',
          name: '茅台集团',
        },
        {
          imgsrc: 'http://www.jsngw.cn/Uploads/20220427/62692acf5de48.jpg',
          name: '茅台集团',
        },
      ],
      rightList: [
        {
          imgsrc:
            'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/xiezhu//SGsPtQy25b1657903680186.jpg',
          name: '贵州茅台酒红色2222圣2222222地1935',
          price: '1536.63',
        },
        {
          imgsrc:
            'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/xiezhu//SGsPtQy25b1657903680186.jpg',
          name: '贵州茅台酒红色2222圣2222222地1935',
          price: '1536.63',
        },
        {
          imgsrc:
            'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/xiezhu//SGsPtQy25b1657903680186.jpg',
          name: '贵州茅台酒红色2222圣2222222地1935',
          price: '1536.63',
        },
        {
          imgsrc:
            'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/xiezhu//SGsPtQy25b1657903680186.jpg',
          name: '贵州茅台酒红色2222圣2222222地1935',
          price: '1536.63',
        },
        {
          imgsrc:
            'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/xiezhu//SGsPtQy25b1657903680186.jpg',
          name: '贵州茅台酒红色2222圣2222222地1935',
          price: '1536.63',
        },
        {
          imgsrc:
            'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/xiezhu//SGsPtQy25b1657903680186.jpg',
          name: '贵州茅台酒红色2222圣2222222地1935',
          price: '1536.63',
        },
        {
          imgsrc:
            'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/xiezhu//SGsPtQy25b1657903680186.jpg',
          name: '贵州茅台酒红色2222圣2222222地1935',
          price: '1536.63',
        },
        {
          imgsrc:
            'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/xiezhu//SGsPtQy25b1657903680186.jpg',
          name: '贵州茅台酒红色2222圣2222222地1935',
          price: '1536.63',
        },
      ],
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
    },
  },
  //⽣命周期 - 创建完成（可以访问当前this实例）
  created() {},
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