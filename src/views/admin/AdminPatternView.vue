<template>
  <AdminBreadcrumb page="Patterns" />
  <AdminTitlePage
    title="Patterns"
    description="Lorem ipsum dolores sit amet"
    textBtn="pattern"
  />
  <GolPatternsList :isAdmin="true" />
</template>

<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import AdminTitlePage from "@/components/admin/AdminTitlePage.vue";
import GolPatternsList from "@/components/patterns/GolPatternsList.vue";
export default {
  components: { AdminBreadcrumb, AdminTitlePage, GolPatternsList },
};
</script>
