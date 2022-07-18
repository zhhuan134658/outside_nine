<!--  购物车-->
<template>
  <div id="shoppingList">
    <div class="content">
      <div class="con_item">
        <van-checkbox-group v-model="result" ref="checkboxGroup">
          <van-checkbox checked-color="#ee0a24" name="a" label-disabled>
            <img
              src="http://www.jsngw.cn/Uploads/ueditor/image/20220428/1651111673758176.jpg"
              alt=""
            />

            <div class="divright">
              <div class="ttop">
                <span>怀庄黑钻</span> <span>￥ 930.00</span>
              </div>
              <div class="bbbtom">
                <div class="bbb_left">
                  规格：500ml*6 <br />
                  库存：充足
                </div>
                <div class="bbb_right">
                  <van-stepper v-model.number="stepper" />
                </div>
              </div>
            </div>
          </van-checkbox>
          <van-checkbox checked-color="#ee0a24" name="b" label-disabled>
            <img
              src="http://www.jsngw.cn/Uploads/ueditor/image/20220428/1651111673758176.jpg"
              alt=""
            />

            <div class="divright">
              <div class="ttop">
                <span>怀庄黑钻</span> <span>￥ 930.00</span>
              </div>
              <div class="bbbtom">
                <div class="bbb_left">
                  规格：500ml*6 <br />
                  库存：充足
                </div>
                <div class="bbb_right">
                  <van-stepper v-model.number="stepper" />
                </div>
              </div>
            </div>
          </van-checkbox>
        </van-checkbox-group>
      </div>
    </div>
    <van-submit-bar :price="3050" button-text="提交订单">
      <van-checkbox
        checked-color="#ee0a24"
        v-model="checked"
        @change="allchange"
        >全选</van-checkbox
      >
    </van-submit-bar>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      stepper: 0,
      checked: false,
      result: [],
    };
  },
  //监听属性类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //⽅法集合
  methods: {
    allchange(item) {
      if (item) {
        this.$refs.checkboxGroup.toggleAll(true);
      } else {
        this.$refs.checkboxGroup.toggleAll();
      }
      console.log(item);
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