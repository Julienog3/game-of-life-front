<template>
  <div class="container px-12 mx-auto">
    <p class="font-bold text-4xl mb-4">Glosaire </p>
    <GolListPattern :patterns="patterns" />
  </div>
</template>

<script>
import GolListPattern from "@/components/GolListPattern.vue";
import { getPatterns } from "@/api/patterns.js";
export default {
  data() {
    return {
      patterns: null,
    };
  },
  async mounted() {
    this.patterns = await getPatterns();
    console.log(this.patterns);
  },
  components: {GolListPattern},
};
</script>


