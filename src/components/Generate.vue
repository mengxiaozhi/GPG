<template>
  <div>
    <n-h1 prefix="bar">
      <n-text type="primary">
        生成密钥
      </n-text>
    </n-h1>
    <div>
      <n-h5>用户名:</n-h5>
      <n-input v-model:value="username" id="username" type="text" placeholder="请输入用户名" />
      <!--<input v-model="username" id="username" type="text" placeholder="请输入用户名" />-->
      <n-h5>邮箱:</n-h5>
      <n-input v-model:value="email" id="email" type="email" placeholder="请输入邮箱" />
      <!--<input v-model="email" id="email" type="email" placeholder="请输入邮箱" />-->
      <n-h5>密码:</n-h5>
      <n-input v-model:value="passphrase" id="passphrase" type="password" placeholder="请输入密钥密码" />
      <!--<input v-model="passphrase" id="passphrase" type="password" placeholder="请输入密钥密码" />-->
    </div>
    <br>
    <n-button @click="generateKeyPair" size="large" type="primary">
      生成密钥对
    </n-button>
    <div v-if="keyPair">
      <n-divider class="py-3" />
      <n-h5>公钥:</n-h5>
      <n-input v-model:value="keyPair.publicKey" type="textarea" readonly :autosize="{
        minRows: 3,
      }" />
      <n-h5>私钥:</n-h5>
      <n-input v-model:value="keyPair.privateKey" type="textarea" readonly :autosize="{
        minRows: 3,
      }" />
    </div>
  </div>
</template>

<script>
  import * as openpgp from 'openpgp';
  import { NInput, NH1, NH5, NText, NButton, NDivider } from 'naive-ui';

  export default {
    components: {
      NInput,
      NH1,
      NH5,
      NText,
      NButton,
      NDivider
    },
    data() {
      return {
        username: '',
        email: '',
        passphrase: '',
        keyPair: null
      };
    },
    methods: {
      async generateKeyPair() {
        try {
          const { privateKey, publicKey } = await openpgp.generateKey({
            userIDs: [{ name: this.username, email: this.email }],
            curve: 'ed25519',
            passphrase: this.passphrase // 添加密码保护
          });

          this.keyPair = {
            publicKey,
            privateKey
          };
        } catch (error) {
          console.error('生成密钥对失败:', error);
        }
      }
    }
  };
</script>

<style scoped>
  /* 添加样式以美化界面 */
</style>
