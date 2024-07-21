<template>
  <div v-if="pattern">
    <div class="banner-pattern mb-12 py-10">
      <div class="container mx-auto px-2 xl:px-12">
        <p class="font-bold text-4xl mb-4">{{ pattern.name }}</p>
        <div class="flex items-center gap-x-4">
          <p>Catégorie </p>
          <p class="bg-primarydark text-white px-4 py-2 rounded-full w-fit">{{ pattern.configuration.name }}</p>
        </div>
      </div>
    </div>
    <div class="container grid grid-cols-12 gap-4 mx-auto px-2 xl:px-12">
      <div class="grid gap-y-10 h-fit col-span-12 lg:col-span-8">
        <div>
          <p class="font-bold text-xl">Description</p>
          <p>{{ pattern.description }}</p>
        </div>
        <div>
          <p class="font-bold text-xl">Caractéristiques</p>
          <div class="flex flex-col gap-4 border p-4 rounded w-fit md:flex-row">
            <GolPatternDetails title="Bouding Box" :content="pattern.boundingX+'x'+pattern.boundingY"/>
            <GolPatternDetails title="Nb de cellules" :content="pattern.cells"/>
            <GolPatternDetails title="Période" :content="pattern.period"/>
            <GolPatternDetails title="Vitesse" :content="pattern.speed"/>
          </div>
        </div>
      </div>
      <div class="grid gap-y-2 col-span-12 lg:col-span-4">
        <GolPatternVisualisation :pattern="pattern"/>
        <div>
          <button
              @click="loadInSimulator(pattern.id)"
              class="bg-primary text-white px-4 py-2 rounded w-fit"
          >
            Simuler le pattern
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {findPattern} from "@/api/patterns.js";
import GolPatternVisualisation from "@/components/GolPatternVisualisation.vue";
import GolPatternDetails from "@/components/GolPatternDetails.vue";
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
  components: {GolPatternVisualisation, GolPatternDetails},
};
</script>


