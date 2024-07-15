<template>
  <article
    class="relative flex items-center justify-center bg-white border border-gray-300 rounded min-h-32 cursor-pointer"
  >
    <h3 class="font-bold text-xl">{{ configuration.name }}</h3>
    <div class="absolute bottom-2 right-2 flex gap-2">
      <router-link
        :to="{ name: 'types_update', params: { id: configuration.id } }"
      >
        <button class="border border-gray-300 rounded w-8 h-8">M</button>
      </router-link>
      <button
        @click="modalStore.open({ id: configuration.id })"
        class="bg-black text-white rounded w-8 h-8"
      >
        S
      </button>
    </div>
  </article>
</template>

<script>
import { useModalStore } from "@/stores/modal.js";
import { mapStores } from "pinia";

export default {
  props: {
    configuration: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapStores(useModalStore),
  },
};
</script>
