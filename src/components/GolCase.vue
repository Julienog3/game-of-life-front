<template>
  <div :id="`${x}-${y}`" @click="handleClick" class="w-[25px] h-[25px] border border-black">
  </div>
</template>

<script>
export default {
  props: {
    x: String,
    y: String,
    handleClick: Function
  }
};
</script>