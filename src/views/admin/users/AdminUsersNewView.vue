<template>
  <AdminBreadcrumb page="Utilisateurs" />
  <AdminTitlePage
    title="Utilisateurs"
    description="Lorem ipsum dolores sit amet"
    textBtn="Utilisateur"
  />
  <AdminCreateUpdateUserForm />
</template>

<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import AdminTitlePage from "@/components/admin/AdminTitlePage.vue";
import AdminCreateUpdateUserForm from "@/components/admin/forms/AdminCreateUpdateUserForm.vue"
import GolModal from "@/components/ui/GolModal.vue";

export default {
  components: {
    AdminTitlePage,
    AdminBreadcrumb,
    GolModal,
    AdminCreateUpdateUserForm
  },
};
</script>
