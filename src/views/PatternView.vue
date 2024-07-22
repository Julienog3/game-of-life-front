<template>
  <div v-if="pattern">
    <div class="flex items-center justify-center h-72 bg-[url('/img/grid-pattern.png')] border-b border-borderGray">
      <div class="flex flex-col w-full gap-2 max-w-[1280px] mx-auto">
      <h2 class="font-bold text-4xl">{{ pattern.name }}</h2>
      <div class="flex items-center gap-4">
        <p>Catégorie</p>
        <p class="bg-primarydark text-white px-4 py-1 rounded-full w-fit">{{ pattern.configuration.name }}</p>
      </div>
      </div>
    </div>
    <div class="flex flex-row justify-between max-w-[1280px] mx-auto my-8">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <p class="font-bold text-xl">Description</p>
          <p>{{ pattern.description }}</p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-bold text-xl">Caractéristiques</p>
          <div class="flex flex-row gap-4 border p-4 rounded w-fit bg-white ">
            <GolPatternDetails title="Bouding Box" :content="pattern.boundingX+'x'+pattern.boundingY"/>
            <GolPatternDetails title="Nb de cellules" :content="pattern.cells"/>
            <GolPatternDetails title="Période" :content="pattern.period"/>
            <GolPatternDetails title="Vitesse" :content="pattern.speed"/>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2 w-fit border rounded-md overflow-hidden -translate-y-44 bg-white">
        <GolPatternVisualisation :pattern="pattern"/>
        <div class="p-2">
          <GolButton class="w-full" @click="loadInSimulator(pattern.id)">
            Simuler le pattern
          </GolButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findPattern } from "@/api/patterns.js";
import GolPatternVisualisation from "@/components/GolPatternVisualisation.vue";
import GolPatternDetails from "@/components/GolPatternDetails.vue";
import GolButton from "@/components/ui/GolButton.vue"

export default {
  data() {
    return {
      patternId: this.$route.params.id,
      pattern: null,
    };
  },
  watch: {
    '$route.params.id'(newId) {
      this.patternId = newId;
    }
  },
  async mounted() {
    this.pattern = await findPattern(this.patternId);
    console.log(this.pattern)
  },
  methods: {
    loadInSimulator(idPattern) {
      this.$router.push({
        path: "/simulator",
        query: {
          idPattern: idPattern,
        },
      });
    },
  },
  components: { GolPatternVisualisation, GolPatternDetails, GolButton },
};
</script>


