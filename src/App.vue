<template>
  <div id="app">
    <Header_vue></Header_vue>
    <div class="py-8 px-8 flex justify-center">
      <div class="wrap">
        <router-view>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import Header_vue from './components/Header_vue.vue';


  export default defineComponent({
    components: {
      Header_vue,
    },
    name: 'App'
  });
</script>

<style>
  .wrap {
    width: 1024px;
  }
</style>
