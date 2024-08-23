<template>
    <header class="
        flex 
        items-center 
        justify-between 
        h-32 
        px-4 
        md:px-6 
        top-0 
        z-50 
        w-full 
        border-b 
        border-muted/20 
        shadow-sm 
        bg-white
    ">
        <router-link to="/pgp">
            <a class="flex items-center gap-2" rel="ugc">
                <n-image class="pr-6" width="260" src="./site_logo.png" preview-disabled />
            </a>
        </router-link>
        <div class="hidden items-center gap-4 md:flex">
            <nav class="md:flex items-center gap-4">
                <router-link to="/pgp/generate">
                    <a class="text-sm font-medium hover:underline underline-offset-4" rel="ugc">
                        生成密钥
                    </a>
                </router-link>
                <router-link to="/pgp/Encrypt" class="pl-1">
                    <a class="text-sm font-medium hover:underline underline-offset-4" rel="ugc">
                        加密
                    </a>
                </router-link>
                <router-link to="/pgp/Decrypt" class="pl-1">
                    <a class="text-sm font-medium hover:underline underline-offset-4" rel="ugc">
                        解密
                    </a>
                </router-link>
            </nav>
        </div>
        <n-button @click="activate('top')" class="block md:hidden">
            <n-icon size="23">
                <svg t="1723225999108" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="4270" width="512" height="512">
                    <path
                        d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 784H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 472H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
                        p-id="4271" fill="#2c2c2c"></path>
                </svg>
            </n-icon>
        </n-button>
        <n-drawer v-model:show="active" :width="502" :placement="placement">
            <n-drawer-content title="功能选单">
                <nav class="px-3 py-3" style="color: #5DAC81;">
                    <div>
                        <router-link to="/pgp/generate">
                            <a class="text-lg underline underline-offset-4" rel="ugc">
                                生成密钥
                            </a>
                        </router-link>
                    </div>
                    <div class="pt-3">
                        <router-link to="/pgp/Encrypt">
                            <a class="text-lg underline underline-offset-4" rel="ugc">
                                加密
                            </a>
                        </router-link>
                    </div>
                    <div class="pt-3">
                        <router-link to="/pgp/Decrypt">
                            <a class="text-lg underline underline-offset-4" rel="ugc">
                                解密
                            </a>
                        </router-link>
                    </div>
                </nav>
            </n-drawer-content>
        </n-drawer>
    </header>
</template>

<script>
    import { defineComponent, ref, onMounted, onUnmounted } from "vue";
    import { useRouter } from 'vue-router';
    import { NImage, NH2, NDrawer, NButton, NIcon, NDrawerContent } from 'naive-ui';

    export default defineComponent({
        components: {
            NImage,
            NH2,
            NDrawer,
            NButton,
            NIcon,
            NDrawerContent,
        },
        setup() {
            const active = ref(false);
            const placement = ref("right");
            const router = useRouter();

            //抽屜
            const activate = (place) => {
                active.value = true;
                placement.value = place;
            };

            // 监听路由变化以关闭抽屉
            const handleRouteChange = () => {
                active.value = false;
            };

            onMounted(() => {
                router.afterEach(handleRouteChange);
            });

            onUnmounted(() => {
                router.afterEach(handleRouteChange); // 清理副作用
            });

            return {
                active,
                placement,
                activate
            };
        }
    });
</script>

<style></style>
