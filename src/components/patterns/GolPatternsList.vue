<template>
  <ul class="grid grid-cols-4 gap-4">
    <li
      v-if="patterns"
      v-for="pattern in patterns"
    >
      <GolPatternCard :pattern="pattern" :canEdit="isAdmin" :canDelete="isAdmin" />
  </li>
  </ul>
</template>

<script>
import GolPatternCard from "@/components/patterns/GolPatternCard.vue";

export default {
  components: { GolPatternCard },
  props: {
    patterns: {
      type: Array,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>
