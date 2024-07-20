<template>
  <GolModal title="Supprimer un type">
    <template #main>
      <p>Êtes-vous sûr de vouloir supprimer ce type ?</p>
    </template>
    <template #footer>
      <button @click="removeConfiguration">Supprimer</button>
    </template>
  </GolModal>
  <AdminBreadcrumb page="Types" />
  <AdminTitlePage
    title="Types"
    description="Lorem ipsum dolores sit amet"
    textBtn="type"
    url="types/new"
  />
  <AdminConfigurationsList
    v-if="configurations"
    :configurations="configurations"
  />
</template>

<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import AdminTitlePage from "@/components/admin/AdminTitlePage.vue";
import {
  getConfigurations,
  deleteConfiguration,
} from "@/api/configurations.js";
import AdminConfigurationsList from "@/components/admin/configurations/AdminConfigurationsList.vue";
import GolModal from "@/components/ui/GolModal.vue";
import { useModalStore } from "@/stores/modal.js";
import { mapStores } from "pinia";

export default {
  components: {
    AdminTitlePage,
    AdminBreadcrumb,
    AdminConfigurationsList,
    GolModal,
  },
  data() {
    return {
      configurations: null,
    };
  },
  async mounted() {
    await this.fetchConfigurations();
  },
  methods: {
    async removeConfiguration() {
      if (!this.modalStore.data.id) return;

      await deleteConfiguration(this.modalStore.data.id).then(async () => {
        this.modalStore.close();
        await this.fetchConfigurations();
      });
    },
    async fetchConfigurations() {
      this.configurations = await getConfigurations();
    },
  },
  computed: {
    ...mapStores(useModalStore),
  },
};
</script>
