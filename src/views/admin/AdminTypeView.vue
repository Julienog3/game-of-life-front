<template>
  <AdminBreadcrumb page="Types" />
  <AdminTitlePage title="Types" description="Gérer l'ensemble des types de configuration de patterns." textBtn="type" />
</template>

<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import AdminTitlePage from "@/components/admin/AdminTitlePage.vue";
export default {
  components: {AdminTitlePage, AdminBreadcrumb},
};
</script>