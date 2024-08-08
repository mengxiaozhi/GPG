<template>
    <header class="bg-background sticky top-0 z-50 w-full border-b border-muted/20 shadow-sm bg-white">
        <div class="container flex items-center justify-between h-32 px-4 md:px-6">
            <router-link to="/pgp">
                <a class="flex items-center gap-2" href="#" rel="ugc">
                    <n-image class="pr-6" width="260" src="./site_logo.png" preview-disabled />
                </a>
            </router-link>
            <div class="flex items-center gap-4">
                <nav class="md:flex items-center gap-4">
                    <router-link to="/pgp/generate">
                        <a class="text-sm font-medium hover:underline underline-offset-4" href="#" rel="ugc">
                            生成
                        </a>
                    </router-link>
                    <router-link to="/pgp/Encrypt" class="pl-1">
                        <a class="text-sm font-medium hover:underline underline-offset-4" href="#" rel="ugc">
                            加密
                        </a>
                    </router-link>
                    <router-link to="/pgp/Decrypt" class="pl-1">
                        <a class="text-sm font-medium hover:underline underline-offset-4" href="#" rel="ugc">
                            解密
                        </a>
                    </router-link>
                </nav>
            </div>
        </div>
    </header>
</template>
<script>
    import { NImage, NH2 } from 'naive-ui';

    export default {
        components: {
            NImage,
            NH2,
        }
    }
</script>
<style></style>