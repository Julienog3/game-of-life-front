<template>
  <AdminBreadcrumb :page="'Patterns'" />
  <AdminTitlePage
    :title="'Patterns'"
    :description="'Lorem ipsum dolores sit amet'"
    :textBtn="'pattern'"
  />
  <GolListPattern />
</template>

<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import AdminTitlePage from "@/components/admin/AdminTitlePage.vue";
import GolListPattern from "@/components/GolListPattern.vue";
export default {
  components: { AdminBreadcrumb, AdminTitlePage, GolListPattern },
};
</script>
