<template>
  <div class="flex justify-between border-b border-gray-200 pb-4 mb-4">
    <div>
      <p class="text-4xl font-bold">{{ title }}</p>
      <p v-if="description">{{ description }}</p>
    </div>
    <GolButton v-if="textBtn && url" @click="navigate">
      <img src="/svg/plus.svg" alt="Add" /> Ajouter un {{ textBtn }}
    </GolButton>
  </div>
</template>
<script>
import GolButton from '@/components/ui/GolButton.vue';

export default {
  components: { GolButton },
  props: {
    title: String,
    description: String,
    textBtn: String,
    url: String,
  },
  methods: {
    navigate() {
      this.$router.push(this.url)
    }
  }
};
</script>
