<!--我的  -->
<template>
  <div id="myownList">
    <div class="beijing">
      <div class="touxing">
        <img
          src="http://www.jsngw.cn/Uploads/ueditor/image/20220428/1651111673758176.jpg"
          alt=""
        />
        <div>138281211400</div>
      </div>
    </div>
    <div class="conteng">
      <div class="diuvone">
        未绑定商户编号 &nbsp;<van-button
          size="small"
          type="warning"
          @click="aaaa"
          >警告按钮</van-button
        >
      </div>
      <div class="diuvtwo">
        账号余额： 0.00 元&nbsp;
        <van-button size="small" type="warning">警告按钮</van-button
        >&nbsp;<van-button size="small" type="warning">警告按钮</van-button>
      </div>
      <div class="diuvthree">余额说明：余额可以任意消费，购买酒水。</div>
      <div class="diuvthree">积分说明：积分可在积分商城，兑换任意商品</div>
    </div>
    <div class="fore">
      <div class="fore_item">
        <div class="item4">
          <van-icon color="#ee0a24" size="0.2rem" name="point-gift-o" />
          <div>代付款（0）</div>
        </div>
        <div class="item4">
          <van-icon color="#ee0a24" size="0.2rem" name="point-gift-o" />
          <div>代付款（0）</div>
        </div>
        <div class="item4">
          <van-icon color="#ee0a24" size="0.2rem" name="point-gift-o" />
          <div>代付款（0）</div>
        </div>
        <div class="item4">
          <van-icon color="#ee0a24" size="0.2rem" name="point-gift-o" />
          <div>代付款（0）</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <van-cell icon="location-o" title="我的订单" is-link />
      <van-cell icon="location-o" title="积分商城（0积分）" is-link />
      <van-cell icon="location-o" title="个人资料" is-link />
      <van-cell icon="location-o" title="银行卡信息" is-link />
      <van-cell icon="location-o" title="密码修改" is-link />
      <van-cell icon="location-o" title="收货地址" is-link />
      <van-cell icon="location-o" title="我的收藏" is-link />
      <van-cell icon="location-o" title="联系客服" is-link />
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {};
  },
  //监听属性类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //⽅法集合
  methods: {
    aaaa() {
      this.axiosPost('/pyUser/login', {
        phone: '18134708099',
        password: 'qwer',
      }).then(res => {});
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