<template>
  <GolModal title="Supprimer un utilisateur">
    <template #main>
      <p>Êtes-vous sûr de vouloir supprimer ce utilisateur ?</p>
    </template>
    <template #footer>
      <!-- <button @click="removeConfiguration">Supprimer</button> -->
    </template>
  </GolModal>
  <AdminBreadcrumb page="Utilisateurs" />
  <AdminTitlePage
    title="Utilisateurs"
    description="Lorem ipsum dolores sit amet"
    textBtn="utilisateur"
    url="users/new"
  />
  <AdminUsersTable :users="users" />
</template>

<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import AdminTitlePage from "@/components/admin/AdminTitlePage.vue";
import { getUsers } from "@/api/users.js";
import AdminUsersTable from "@/components/admin/users/AdminUsersTable.vue";
import GolModal from "@/components/ui/GolModal.vue";
import { useModalStore } from "@/stores/modal.js";
import { mapStores } from "pinia";

export default {
  components: {
    AdminTitlePage,
    AdminBreadcrumb,
    AdminUsersTable,
    GolModal,
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
    // async removeConfiguration() {
    //   if (!this.modalStore.data.id) return;

    //   await deleteConfiguration(this.modalStore.data.id).then(async () => {
    //     this.modalStore.close();
    //     await this.fetchConfigurations();
    //   });
    // },
    async fetchUsers() {
      this.users = await getUsers();
    },
  },
  computed: {
    ...mapStores(useModalStore),
  },
};
</script>
