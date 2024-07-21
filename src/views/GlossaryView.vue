<template>
  <p class="font-bold text-4xl mb-4">Glosaire </p>
  <GolListPattern :patterns="patterns" />
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
  },
  components: {GolListPattern},
};
</script>


