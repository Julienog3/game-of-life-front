<template>
  <RouterLink :to="{ name: 'pattern_details', params: { id: pattern.id } }">
    <article class="flex flex-col border border-gray-200 rounded-lg overflow-hidden">
      <GolPatternVisualisation :pattern="pattern"/>
      <div class="p-2 grid gap-y-2">
        <span class="bg-primarydark text-white px-4 py-2 rounded-full w-fit">
          {{ pattern.configuration.name }}
        </span>
        <h3 class="text-xl font-bold">{{ pattern.name }}</h3>
        <p class="text-gray-400">{{ pattern.description }}</p>
        <div class="ml-auto flex gap-2">
          <button v-if="canDelete" class="bg-black text-white rounded w-8 h-8" @click="modalStore.open">S</button>
          <button v-if="canDelete" class="bg-black text-white rounded w-8 h-8" @click="modalStore.open">S</button>
        </div>
      </div>
    </article>
  </RouterLink>
</template>

<script>
import { useModalStore } from "@/stores/modal";
import { mapStores } from "pinia";
import { RouterLink } from "vue-router";
import GolPatternVisualisation from "@/components/GolPatternVisualisation.vue"

export default {
  components: { GolPatternVisualisation },
  props: {
    pattern: {
      type: Object,
      required: true
    },
    canEdit: {
      type: Boolean,
      required: false,
      default: false
    },
    canDelete: {
      type: Boolean,
      required: false,
      default: false
    }
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
  computed: {
    ...mapStores(useModalStore),
  },
};
</script>
