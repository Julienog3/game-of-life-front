<template>
  <AdminBreadcrumb :page="'Utilisateurs'" />
  <AdminTitlePage :title="'Utilisateurs'" :description="'Lorem ipsum dolores sit amet'" :textBtn="'utilisateur'" />
</template>

<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import AdminTitlePage from "@/components/admin/AdminTitlePage.vue";
export default {
  components: {AdminTitlePage, AdminBreadcrumb},
};
</script>
