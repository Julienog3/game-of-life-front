<template>
  <GolModal title="Supprimer un type">
    <template #main>
      <p>Êtes-vous sûr de vouloir supprimer ce type ?</p>
    </template>
    <template #footer>
      <GolButton variant="danger" @click="removeConfiguration">Supprimer</GolButton>
    </template>
  </GolModal>
  <AdminBreadcrumb page="Types" />
  <AdminTitlePage
    title="Types"
    description="Gérer l'ensemble des types de configuration de patterns."
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
import GolButton from "@/components/ui/GolButton.vue";

export default {
  components: {
    AdminTitlePage,
    AdminBreadcrumb,
    AdminConfigurationsList,
    GolModal,
    GolButton,
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
