<template>
  <GolModal title="Supprimer un utilisateur">
    <template #main>
      <p>Êtes-vous sûr de vouloir supprimer cet utilisateur ?</p>
    </template>
    <template #footer>
      <GolButton variant="danger" @click="removeUser">Supprimer</GolButton>
    </template>
  </GolModal>
  <AdminBreadcrumb page="Utilisateurs" />
  <AdminTitlePage
    title="Utilisateurs"
    description="Retrouvez la liste des tous les utilisateurs de la plateforme."
    textBtn="utilisateur"
    url="users/new"
  />
  <AdminUsersTable :users="users" />
</template>

<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import AdminTitlePage from "@/components/admin/AdminTitlePage.vue";
import { getUsers, deleteUser } from "@/api/users.js";
import AdminUsersTable from "@/components/admin/users/AdminUsersTable.vue";
import GolModal from "@/components/ui/GolModal.vue";
import { useModalStore } from "@/stores/modal.js";
import { mapStores } from "pinia";
import GolButton from "@/components/ui/GolButton.vue";

export default {
  components: {
    AdminTitlePage,
    AdminBreadcrumb,
    AdminUsersTable,
    GolModal,
    GolButton
  },
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    await this.fetchUsers();
  },
  methods: {
    async removeUser() {
      if (!this.modalStore.data.id) return;

      await deleteUser(this.modalStore.data.id).then(async () => {
        this.modalStore.close();
        await this.fetchUsers();
      });
    },
    async fetchUsers() {
      this.users = await getUsers();
    },
  },
  computed: {
    ...mapStores(useModalStore),
  },
};
</script>
