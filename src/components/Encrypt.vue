<template>
    <div>
        <n-h1 prefix="bar">
            <n-text type="primary">
                加密
            </n-text>
        </n-h1>
        <!-- 输入公钥 -->
        <div>
            <n-h5 for="publicKey">接受方的公钥:</n-h5>
            <n-input v-model:value="publicKey" id="publicKey" type="textarea" placeholder="请输入公钥" :autosize="{
                minRows: 10,
            }" />
            <!--<textarea v-model="publicKey" id="publicKey" placeholder="请输入公钥" rows="10" cols="50"></textarea>-->
            <n-h5 for="plaintext">文本:</n-h5>
            <n-input v-model:value="plaintext" id="plaintext" type="textarea" placeholder="请输入要加密的文本" :autosize="{
                minRows: 5,
            }" />
            <!--<textarea v-model="plaintext" id="plaintext" placeholder="请输入要加密的文本" rows="5" cols="50"></textarea>-->
        </div>
        <br>
        <n-button @click="encrypt" size="large" type="primary">
            加密
        </n-button>
        <!-- 显示加密后的文本 -->
        <div v-if="encryptedText">
            <n-divider class="py-3" />
            <n-h5 for="plaintext">加密后的文本:</n-h5>
            <n-input v-model:value="encryptedText" type="textarea" readonly :autosize="{
                minRows: 3,
            }" />
            <!--<textarea v-model="encryptedText" rows="5" cols="50" readonly></textarea>-->
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
                plaintext: '',
                encryptedText: '',
                publicKey: '' // 存储用户输入的公钥
            };
        },
        methods: {
            async encrypt() {
                if (!this.publicKey) {
                    alert('请先输入公钥');
                    return;
                }

                try {
                    // 读取公钥
                    const publicKeys = await openpgp.readKey({ armoredKey: this.publicKey });
                    //console.log('公钥读取成功:', publicKeys); // 调试信息

                    // 创建消息对象
                    const message = await openpgp.createMessage({ text: this.plaintext });

                    // 加密文本
                    const encryptedResult = await openpgp.encrypt({
                        message,
                        encryptionKeys: publicKeys
                    });

                    //console.log('加密结果:', encryptedResult); // 调试信息

                    // 更新加密文本
                    this.encryptedText = encryptedResult;
                } catch (error) {
                    console.error('加密失败:', error);
                    alert('加密失败，请检查公钥和输入的文本');
                }
            }
        }
    };
</script>

<style scoped>
    /* 添加样式以美化界面 */
</style>