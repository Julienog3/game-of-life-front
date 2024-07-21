<template>
  <article
    class="relative flex items-center justify-center bg-white border border-gray-300 rounded min-h-44"
  >
    <h3 class="font-bold text-xl">{{ configuration.name }}</h3>
    <div class="absolute bottom-2 right-2 flex gap-2">
      <GolButton @click="handleEdit" variant="secondary">
        <img src="/svg/edit.svg" alt="Edition" />
      </GolButton>
      <GolButton @click="handleDelete" variant="primary">
        <img src="/svg/trash.svg" alt="Edition" />
      </GolButton>
    </div>
  </article>
</template>

<script>
import { useModalStore } from "@/stores/modal.js";
import { mapStores } from "pinia";
import GolButton from "@/components/ui/GolButton.vue"

export default {
  components: { GolButton },
  props: {
    configuration: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleDelete(e) {
      e.preventDefault()
      e.stopPropagation()
      modalStore.open({ id: configuration.id })
    },
    handleEdit(e) {
      e.preventDefault()
      e.stopPropagation()
      this.$router.push(`/admin/configurations/${this.configuration.id}/update`)
    }
  },
  computed: {
    ...mapStores(useModalStore),
  },
};
</script>
