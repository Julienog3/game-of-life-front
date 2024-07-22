<template>
  <AdminBreadcrumb page="Patterns" />
  <AdminTitlePage title="Modifier un pattern" />
  <AdminCreateUpdatePatternForm 
    v-if="pattern"
    :pattern="pattern" 
  />
</template>

<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import AdminTitlePage from "@/components/admin/AdminTitlePage.vue";
import AdminCreateUpdatePatternForm from "@/components/admin/forms/AdminCreateUpdatePatternForm.vue";
import { findPattern } from "@/api/patterns.js" 

export default {
  components: { AdminBreadcrumb, AdminTitlePage, AdminCreateUpdatePatternForm },
  data() {
    return {
      pattern: null,
    };
  },
  async created() {
    await this.fetchPattern();
  },
  watch: {
    $route: "fetchPattern",
  },
  methods: {
    async fetchPattern() {
      this.pattern = await findPattern(this.$route.params.id);
    },
  },
};
</script>
