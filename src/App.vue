<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div id="app">
      <Header_vue></Header_vue>
      <div class="py-8 px-8 flex justify-center">
        <div class="wrap">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </n-config-provider>
</template>

<script>
  import { defineComponent } from 'vue';
  import { NConfigProvider } from 'naive-ui'
  import Header_vue from './components/Header_vue.vue';
  
  const themeOverrides = {
    common: {
      primaryColor: '#5DAC81'
    }
  }

  export default defineComponent({
    components: {
      Header_vue,
      NConfigProvider
    },
    data() {
      return {
        themeOverrides
      };
    },
    name: 'App'
  });
</script>

<style>
  ::selection {
    background-color: #5DAC81;
    /* 背景色 */
    color: white;
    /* 文字颜色 */
  }

  .wrap {
    width: 1024px;
  }
</style>
