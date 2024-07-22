<template>
  <RouterLink :to="{ name: 'pattern_details', params: { id: pattern.id } }">
    <article class="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow transition ease-in-out">
      <GolPatternVisualisation :pattern="pattern"/>
      <div class="flex flex-col gap-2 p-4">
        <span class="bg-primarydark text-white px-4 py-2 rounded-full w-fit text-sm">
          {{ pattern.configuration.name }}
        </span>
        <div class="flex flex-col">
          <h3 class="text-xl font-bold">{{ pattern.name }}</h3>
          <p class="text-gray-400">{{ pattern.description }}</p>
        </div>
        <div class="ml-auto flex gap-2">
          <GolButton v-if="canEdit" @click="handleEdit" variant="secondary">
            <img src="/svg/edit.svg" alt="Edition" />
          </GolButton>
          <GolButton v-if="canDelete" @click="handleDelete" variant="primary">
            <img src="/svg/trash.svg" alt="Edition" />
          </GolButton>
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
import GolButton from "@/components/ui/GolButton.vue"

export default {
  components: { GolPatternVisualisation, GolButton },
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
    handleDelete(e) {
      e.preventDefault()
      e.stopPropagation()
      this.modalStore.open()
    },
    handleEdit(e) {
      e.preventDefault()
      e.stopPropagation()
      this.$router.push({ name: 'patterns_update', params: { id: this.pattern.id } })
    }
  },
  computed: {
    ...mapStores(useModalStore),
  },
};
</script>
