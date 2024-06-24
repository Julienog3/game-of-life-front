<template>
  <div class="grid grid-cols-12 gap-x-8 gap-y-4">
    <div
      v-if="patterns"
      v-for="pattern in patterns"
      class="grid gap-y-2 w-fit md:col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3"
    >
      <GolPattern :pattern="pattern" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GolPattern from "@/components/GolPattern.vue";

export default defineComponent({
  props: {
    patterns: Array,
  },
  components: { GolPattern },
});
</script>
