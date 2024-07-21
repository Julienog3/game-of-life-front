<template>
  <GolModal title="Supprimer un pattern">
    <template #main>
      <p>Êtes-vous sûr de vouloir supprimer ce pattern ?</p>
    </template>
    <template #footer>
      <p>footer</p>
    </template>
  </GolModal>
  <AdminBreadcrumb page="Patterns" />
  <AdminTitlePage
    title="Patterns"
    description="Lorem ipsum dolores sit amet"
    textBtn="pattern"
    url="/admin/patterns/new"
  />

  <GolPatternsList :patterns="patterns" :isAdmin="true" />
</template>

<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import AdminTitlePage from "@/components/admin/AdminTitlePage.vue";
import GolPatternsList from "@/components/patterns/GolPatternsList.vue";
import { getPatterns } from "@/api/patterns.js";
import GolModal from "@/components/ui/GolModal.vue";

export default {
  data() {
    return {
      patterns: null,
    };
  },
  async mounted() {
    this.patterns = await getPatterns();
  },
  components: { AdminBreadcrumb, AdminTitlePage, GolPatternsList, GolModal },
};
</script>
