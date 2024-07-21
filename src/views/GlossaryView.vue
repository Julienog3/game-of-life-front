<template>
  <div class="flex flex-col mb-4 w-full border-b py-4">
    <h2 class="font-bold text-4xl">Glossaire</H2>
    <p>Retrouvez l'ensemble des patterns du wiki.</p>
  </div>
  <GolPatternsList :patterns="patterns" />
</template>

<script>
import GolPatternsList from "@/components/patterns/GolPatternsList.vue";
import { getPatterns } from "@/api/patterns.js";
export default {
  components: { GolPatternsList },
  data() {
    return {
      patterns: null,
    };
  },
  async mounted() {
    this.patterns = await getPatterns();
  },
};
</script>


