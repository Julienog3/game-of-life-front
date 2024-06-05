<template>
  <div class="grid grid-cols-12 gap-x-8 gap-y-4">
    <div v-if="patterns" v-for="pattern in patterns" class="grid gap-y-2 border border-gray-200 w-fit md:col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3">
      <GolPattern :pattern="pattern" />
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import GolPattern from "@/components/GolPattern.vue";
import patternJSON from "@/data/pattern.json"

export default defineComponent({
  data() {
    return {
      patterns: null
    };
  },
  mounted() {
    this.patterns = patternJSON.patterns;
  },
  components: {GolPattern},
})
</script>