<template>
    <div>
        <n-h1 prefix="bar">
            <n-text type="primary">
                解密
            </n-text>
        </n-h1>

        <!-- 输入私钥 -->
        <div>
            <n-h5 for="privateKey">你的私钥:</n-h5>
            <n-input v-model:value="privateKey" id="privateKey" type="textarea" placeholder="请输入私钥" :autosize="{
                minRows: 10,
            }" />
            <!--<textarea v-model="privateKey" id="privateKey" placeholder="请输入私钥" rows="10" cols="50"></textarea>-->
            <n-h5 for="passphrase">密码:</n-h5>
            <n-input v-model:value="passphrase" id="passphrase" type="password" placeholder="请输入密钥密码（如果有）" />
            <!--<input v-model="passphrase" id="passphrase" type="password" placeholder="请输入密钥密码（如果有）" />-->
            <n-h5 for="encryptedTextForDecryption">加密文本:</n-h5>
            <n-input v-model:value="encryptedTextForDecryption" id="encryptedTextForDecryption" type="textarea"
                placeholder="请输入要解密的文本" :autosize="{
                    minRows: 5,
                }" />
            <!--<textarea v-model="encryptedTextForDecryption" id="encryptedTextForDecryption" placeholder="请输入要解密的文本"
                rows="5" cols="50"></textarea>-->
        </div>
        <br>
        <n-button @click="decrypt" size="large" type="primary">
            解密
        </n-button>
        <!--<button @click="decrypt">解密</button>-->
        <!-- 显示解密后的文本 -->
        <div v-if="decryptedText">
            <n-divider class="py-3" />
            <n-h5>解密后的文本:</n-h5>
            <n-input v-model:value="decryptedText" type="textarea" placeholder="请输入要解密的文本" :autosize="{
                minRows: 5,
            }" />
            <!--textarea v-model="decryptedText" rows="5" cols="50" readonly></textarea>-->
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import * as openpgp from 'openpgp';
    import { NInput, NH1, NH5, NText, NButton, NDivider } from 'naive-ui';

    export default {
        components: {
            NInput,
            NH1,
            NH5,
            NText,
            NButton,
            NDivider,
        },
        setup() {
            // 定义响应式变量
            const privateKey = ref('');
            const passphrase = ref('');
            const encryptedTextForDecryption = ref('');
            const decryptedText = ref('');

            // 解密函数
            const decrypt = async () => {
                if (!privateKey.value || !encryptedTextForDecryption.value) {
                    alert('请填写私钥和加密文本');
                    return;
                }

                try {
                    // 读取私钥
                    const privateKeyObject = await openpgp.readPrivateKey({ armoredKey: privateKey.value });

                    // 解锁私钥
                    let privateKeyDecrypted;
                    if (passphrase.value) {
                        privateKeyDecrypted = await openpgp.decryptKey({
                            privateKey: privateKeyObject,
                            passphrase: passphrase.value
                        });
                    } else {
                        privateKeyDecrypted = privateKeyObject; // 如果没有密码，直接使用私钥对象
                    }

                    // 读取加密消息
                    const message = await openpgp.readMessage({ armoredMessage: encryptedTextForDecryption.value });

                    // 解密消息
                    const { data: decrypted, signatures } = await openpgp.decrypt({
                        message,
                        decryptionKeys: privateKeyDecrypted // 使用解锁后的私钥
                    });

                    decryptedText.value = decrypted;

                    // 检查签名有效性（如果消息是签名的）
                    if (signatures.length > 0) {
                        try {
                            await signatures[0].verified; // 检查签名有效性
                            console.log('Signature is valid');
                        } catch (e) {
                            console.error('Signature could not be verified: ' + e.message);
                        }
                    }
                } catch (error) {
                    console.error('解密失败:', error);
                    alert('解密失败，请检查私钥、密码和加密文本');
                }
            };

            // 返回要暴露的变量和方法
            return {
                privateKey,
                passphrase,
                encryptedTextForDecryption,
                decryptedText,
                decrypt
            };
        }
    };
</script>

<style scoped>
    /* 添加样式以美化界面 */
</style>