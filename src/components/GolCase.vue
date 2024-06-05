<template>
  <div :style="styleCaseDeath" class="w-[30px] h-[30px] border border-gray-300 flex justify-center items-center">
    <div :id="`${x}-${y}`" @click="handleClick(x,y)" :style="styleCaseInLife" class="w-[25px] h-[25px] rounded">
    </div>
  </div>

</template>

<script>
export default {
  props: {
    x: String,
    y: String,
    handleClick: Function,
    inLife: Boolean,
    colorCaseDeath: String,
    colorCaseInLife: String
  },
  computed: {
    styleCaseDeath() {
      return {
        backgroundColor: this.colorCaseDeath
      };
    },
    styleCaseInLife() {
      return {
        backgroundColor: this.inLife ? this.colorCaseInLife : '',
      };
    }
  }
};
</script>