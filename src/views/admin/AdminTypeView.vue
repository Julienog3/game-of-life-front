<template>
  <AdminBreadcrumb :page="'Types'" />
  <AdminTitlePage :title="'Types'" :description="'Lorem ipsum dolores sit amet'" :textBtn="'type'" />
</template>

<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import AdminTitlePage from "@/components/admin/AdminTitlePage.vue";
export default {
  components: {AdminTitlePage, AdminBreadcrumb},
};
</script>