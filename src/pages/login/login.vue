<template>
  <div>
    <van-form>
      <van-field
        v-model="phone"
        required
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '手机号格式错误' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          @click="onSubmit"
          >登录</van-button
        >
      </div>
      <div class="reg">
        <div @click="toRegister">没有账号？立即注册</div>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: 'Login',
  data() {
    return {
      phone: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      this.axiosPost('/pyUser/login', {
        phone: '',
        password: '',
      }).then(res => {
        Toast.success(res.data.message);
      });
      /*console.log('submit', values);*/
      //   if (this.username == '123456' && this.password == '123456') {
      //     Toast.success('登录成功');
      //   } else if (this.username == '' && this.password == '') {
      //     Toast('请输入账号或密码');
      //   } else {
      //     Toast.fail('账号或密码错误');
      //   }
    },
    toRegister() {
      this.$router.push('/Register');
    },
  },
};
</script>

<style scoped>
.title {
  /* border-radius: 15px; */
  size: 1px;
  height: 50px;
  line-height: 50px;
  background-color: #20a0ff;
  color: #fff;
  text-align: center;
}
</style>

