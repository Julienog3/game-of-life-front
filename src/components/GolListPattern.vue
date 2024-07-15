<template>
  <div class="grid grid-cols-12 gap-x-8 gap-y-4">
    <div
      v-if="patterns"
      v-for="pattern in patterns"
      class="grid gap-y-2 border border-gray-200 w-fit md:col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3"
    >
      <GolPattern :pattern="pattern" />
      <button @click="modalStore.open">{{ modalStore.isOpened }}</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GolPattern from "@/components/GolPattern.vue";
import patternJSON from "@/data/pattern.json";
import { getPatterns } from "@/api/patterns.js";
import { useModalStore } from "@/stores/modal";
import { mapStores } from "pinia";

export default defineComponent({
  props: {
    patterns: Array,
  },
  computed: {
    ...mapStores(useModalStore),
  },
  components: { GolPattern },
});
</script>
