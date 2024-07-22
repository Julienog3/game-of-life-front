<template>
  <div class="bg-white w-fit h-fit overflow-hidden rounded-lg border">
    <div class="flex" v-for="(row, i) in grid" :key="i">
      <span 
        class="flex items-center justify-center  relative w-12 h-12 border cursor-pointer" 
        v-for="(cell, j) in row" 
        :key="j"
        @click="toggleCell(i, j)"
      >
        <Transition>
          <span v-show="cell" class="bg-primary w-10 h-10 p-4 rounded-md"></span>
        </Transition>
      </span>
    </div>
  </div>
</template>

<script>
import { create2DArrayFromFlatArray, flatten2DArray } from "@/helpers/index.js"

export default {
  data() {
    return {
      grid: []
    }
  },
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
    boundingX: {
      type: Number,
      required: true,
    },
    boundingY: {
      type: Number,
      required: true,
    }
  },
  emits: ['update:modelValue'],
  methods: {
    toggleCell(x, y) {
      this.grid[x][y] = !this.grid[x][y];
      console.log(this.newPattern)
      this.$emit('update:modelValue', this.newPattern)
    },
    updateGrid() {
      this.grid = create2DArrayFromFlatArray(this.modelValue, this.boundingX, this.boundingY)
    }
  },
  mounted() {
    console.log(this.modelValue, this.boundingX, this.boundingY)
    this.updateGrid()
  },
  watch: {
    boundingX() {
      this.updateGrid()
    },
    boundingY() {
      this.updateGrid()
    },
  },
  computed: {
    newPattern() {
      return flatten2DArray(this.grid)
    }
  }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity .25s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>