<template>
  <AdminBreadcrumb :page="'Types'" />
  <AdminTitlePage
    :title="'Types'"
    :description="'Lorem ipsum dolores sit amet'"
    :textBtn="'type'"
  />
  <AdminCreateUpdateConfigurationForm />
</template>

<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import AdminTitlePage from "@/components/admin/AdminTitlePage.vue";
import AdminCreateUpdateConfigurationForm from "@/components/admin/forms/AdminCreateUpdateConfigurationForm.vue";

export default {
  components: {
    AdminTitlePage,
    AdminBreadcrumb,
    AdminCreateUpdateConfigurationForm,
  },
};
</script>
