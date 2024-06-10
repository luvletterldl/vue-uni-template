<script setup lang="ts">
import counter from '~/components/Counter.vue'
</script>

<template>
  <view class="warpper">
    <img mode="widthFix" src="https://avatars.githubusercontent.com/u/26115291?v=4">
    <span>Hello World</span>
    <counter />
  </view>
</template>

<style scoped>
.warpper {
  --at-apply: flex flex-col items-center;
}
</style>
