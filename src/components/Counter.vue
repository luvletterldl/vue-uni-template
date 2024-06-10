<script setup lang="ts">
function add() {
  counter.value++
}
</script>

<template>
  <div>
    <button @click="add">
      {{ counter }}
    </button>
  </div>
</template>
