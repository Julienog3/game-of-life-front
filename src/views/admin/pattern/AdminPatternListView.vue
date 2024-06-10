<template>
  <AdminBreadcrumb :page="'Patterns'" />
  <AdminTitlePage
    :title="'Patterns'"
    :description="'Lorem ipsum dolores sit amet'"
    :textBtn="'pattern'"
    :url="'/admin/pattern/new'"
  />

  <GolListPattern :patterns="patterns" />
</template>

<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import AdminTitlePage from "@/components/admin/AdminTitlePage.vue";
import GolListPattern from "@/components/GolListPattern.vue";
import { getPatterns } from "@/api/patterns.js";
export default {
  data() {
    return {
      patterns: null,
    };
  },
  async mounted() {
    this.patterns = await getPatterns();
  },
  components: { AdminBreadcrumb, AdminTitlePage, GolListPattern },
};
</script>
