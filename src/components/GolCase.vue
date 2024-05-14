<template>
  <div :id="`${x}-${y}`" @click="handleClick(x,y)" :class="{ 'bg-pink-500':inLife  }" class="w-[20px] h-[20px] border border-black">
  </div>
</template>

<script>
export default {
  props: {
    x: Number,
    y: Number,
    handleClick: Function,
    inLife: Boolean
  }
};
</script>