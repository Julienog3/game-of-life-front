<template>
  <GolModal title="Supprimer un pattern">
    <template #main>
      <p>Êtes-vous sûr de vouloir supprimer ce pattern ?</p>
    </template>
    <template #footer>
      <GolButton @click="removePattern" variant="danger">Supprimer</GolButton>
    </template>
  </GolModal>
  <AdminBreadcrumb page="Patterns" />
  <AdminTitlePage
    title="Patterns"
    description="Lorem ipsum dolores sit amet"
    textBtn="pattern"
    url="/admin/patterns/new"
  />

  <GolPatternsList v-if="patterns" :patterns="patterns" :isAdmin="true" />
</template>

<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import AdminTitlePage from "@/components/admin/AdminTitlePage.vue";
import GolPatternsList from "@/components/patterns/GolPatternsList.vue";
import { getPatterns } from "@/api/patterns.js";
import GolModal from "@/components/ui/GolModal.vue";
import GolButton from "@/components/ui/GolButton.vue";

export default {
  data() {
    return {
      patterns: null,
    };
  },
  async mounted() {
    await this.fetchPatterns()
  },
  methods: {
    async fetchPatterns() {
      this.patterns = await getPatterns();
    },
    async removePattern() {
      if (!this.modalStore.data.id) return;

      await deletePattern(this.modalStore.data.id).then(async () => {
        this.modalStore.close();
        await this.fetchPatterns();
      });
    },
  },
  components: { AdminBreadcrumb, AdminTitlePage, GolPatternsList, GolModal, GolButton },
};
</script>
