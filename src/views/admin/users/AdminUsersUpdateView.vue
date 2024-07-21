<template>
  <AdminBreadcrumb page="Utilisateurs" />
  <AdminTitlePage
    title="Utilisateurs"
    description="Lorem ipsum dolores sit amet"
    textBtn="Utilisateur"
  />
  <AdminCreateUpdateUserForm
    v-if="user"
    :user="user"
  />
</template>

<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import AdminTitlePage from "@/components/admin/AdminTitlePage.vue";
import GolModal from "@/components/ui/GolModal.vue";
import { findUser } from "@/api/users.js" 
import AdminCreateUpdateUserForm from "@/components/admin/forms/AdminCreateUpdateUserForm.vue"

export default {
  components: {
    AdminTitlePage,
    AdminBreadcrumb,
    GolModal,
    AdminCreateUpdateUserForm
  },
  data() {
    return {
      user: null,
    };
  },
  async created() {
    await this.fetchUser();
  },
  watch: {
    $route: "fetchUser",
  },
  methods: {
    async fetchUser() {
      this.user = await findUser(this.$route.params.id);
    },
  },
};
</script>
