<template>
  <AdminBreadcrumb page="Patterns" />
  <AdminTitlePage title="Ajouter un pattern" />
  <AdminCreateUpdatePatternForm />
</template>

<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import AdminTitlePage from "@/components/admin/AdminTitlePage.vue";
import AdminCreateUpdatePatternForm from "@/components/admin/forms/AdminCreateUpdatePatternForm.vue";

export default {
  components: { AdminBreadcrumb, AdminTitlePage, AdminCreateUpdatePatternForm },
};
</script>
