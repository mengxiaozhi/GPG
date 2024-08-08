<template>
    <header class="bg-background sticky top-0 z-50 w-full border-b border-muted/20 shadow-sm bg-white">
        <div class="container flex items-center justify-between h-16 px-4 md:px-6">
            <router-link to="/">
                <a class="flex items-center gap-2" href="#" rel="ugc">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="w-6 h-6">
                        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                    </svg>
                    <span class="font-bold text-lg">PGP加解密</span>
                </a>
            </router-link>
            <div class="flex items-center gap-4">
                <nav class="md:flex items-center gap-4">
                    <router-link to="/">
                        <a class="text-sm font-medium hover:underline underline-offset-4" href="#" rel="ugc">
                            生成密钥
                        </a>
                    </router-link>
                    <router-link to="/Encrypt" class="pl-3">
                        <a class="text-sm font-medium hover:underline underline-offset-4" href="#" rel="ugc">
                            加密
                        </a>
                    </router-link>
                    <router-link to="/Decrypt" class="pl-3">
                        <a class="text-sm font-medium hover:underline underline-offset-4" href="#" rel="ugc">
                            解密
                        </a>
                    </router-link>
                </nav>
            </div>
        </div>
    </header>
</template>