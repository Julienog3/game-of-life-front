<template>
  <AdminBreadcrumb :page="'Patterns'" />
  <AdminTitlePage :title="'Ajouter un pattern'" />
</template>

<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import AdminTitlePage from "@/components/admin/AdminTitlePage.vue";
export default {
  components: {AdminBreadcrumb, AdminTitlePage},
};
</script>
