<template>
  <div>
    <n-h1 prefix="bar">
      <n-text type="primary">
        生成密钥
      </n-text>
    </n-h1>
    <n-alert title="Tips" type="warning">
      个人资料只用于生成密钥，以下资料不填也可以生成密钥。<br>
      密码如果没设定的话，密钥默认处于解锁状态，解密的时候不需要输入密码。（不太推荐）
    </n-alert>
    <br>
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
      <n-watermark content="私钥机密" cross selectable :font-size="18" :line-height="16" :width="192" :height="128"
        :x-offset="12" :y-offset="28" :rotate="-15">
        <n-input v-model:value="keyPair.privateKey" type="textarea" readonly :autosize="{
          minRows: 3,
        }" />
      </n-watermark>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import * as openpgp from 'openpgp';
  import { NInput, NH1, NH5, NText, NButton, NDivider, NAlert, NWatermark, } from 'naive-ui';

  export default {
    components: {
      NInput,
      NH1,
      NH5,
      NText,
      NButton,
      NDivider,
      NAlert,
      NWatermark,
    },
    setup() {
      // 定义响应式变量
      const username = ref('');
      const email = ref('');
      const passphrase = ref('');
      const keyPair = ref(null);
      const error = ref(''); // 用于存储错误信息

      // 生成密钥对函数
      const generateKeyPair = async () => {
        try {
          const { privateKey, publicKey } = await openpgp.generateKey({
            userIDs: [{ name: username.value, email: email.value }],
            curve: 'ed25519',
            passphrase: passphrase.value // 添加密码保护
          });

          keyPair.value = {
            publicKey,
            privateKey
          };
        } catch (err) {
          console.error('生成密钥对失败:', err);
          error.value = '生成密钥对失败，请检查输入的用户名、邮箱和密码。';
        }
      };

      // 返回要暴露的变量和方法
      return {
        username,
        email,
        passphrase,
        keyPair,
        error,
        generateKeyPair
      };
    }
  };

</script>

<style scoped>
  /* 添加样式以美化界面 */
</style>
