<template>
  <RouterLink :to="'/pattern/'+pattern.id">
    <div class="border border-gray-200 rounded-xl overflow-hidden w-[250px]">
      <GolPatternVisualisation :pattern="pattern"/>
      <div class="p-2 grid gap-y-2">
        <p class="bg-primarydark text-white px-4 py-2 rounded-full w-fit">
          {{ pattern.configuration.name }}
        </p>
        <p class="text-xl font-bold">{{ pattern.name }}</p>
        <p class="text-gray-400">{{ pattern.description }}</p>
      </div>
    </div>
  </RouterLink>

</template>

<script>
import GolPatternVisualisation from "@/components/GolPatternVisualisation.vue";
export default {
  props: {
    pattern: Object,
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
  components: {GolPatternVisualisation}
};
</script>
