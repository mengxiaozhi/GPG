<template>
    <n-h1 prefix="bar">
        <n-text type="primary">
            Pretty Good Privacy（PGP）加解密&密钥生成工具
        </n-text>
    </n-h1>
    <n-p>
        这是一个基于Pretty Good Privacy（PGP）的加解密和密钥生成工具，它是不经过服务器的所以可以离线运行，用的是OpenPGP.js所提供的API。<br>
        我发现PGP这真是个好东西，但是使用门槛似乎有点高，同时也不方便，因为传统的PGP工具大多都只能在Email中使用或者界面很难用（某些甚至需要付费），所以我开发了这个工具方便普罗大众方便的接触PGP。<br>
        可以把这个工具用在一般的通讯软体中进行私密通讯。
    </n-p>
    <br>
    <n-button type="primary" size="large">
        <router-link to="/pgp/Encrypt" class="pl-1">
            开始使用
        </router-link>
    </n-button>
</template>
<script>
    import { NText, NH1, NP, NButton } from 'naive-ui';

    export default {
        components: {
            NText,
            NH1,
            NP,
            NButton
        }
    }
</script>