<template>
  <AdminBreadcrumb page="Types" />
  <AdminTitlePage
    title="Types"
    description="Lorem ipsum dolores sit amet"
    textBtn="type"
  />
  <AdminCreateUpdateConfigurationForm
    v-if="configuration"
    :configuration="configuration"
  />
</template>

<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import AdminTitlePage from "@/components/admin/AdminTitlePage.vue";
import { findConfiguration } from "@/api/configurations.js";
import AdminConfigurationsList from "@/components/admin/configurations/AdminConfigurationsList.vue";
import GolModal from "@/components/ui/GolModal.vue";
import AdminCreateUpdateConfigurationForm from "@/components/admin/forms/AdminCreateUpdateConfigurationForm.vue";

export default {
  components: {
    AdminTitlePage,
    AdminBreadcrumb,
    AdminConfigurationsList,
    GolModal,
    AdminCreateUpdateConfigurationForm,
  },
  data() {
    return {
      configuration: null,
    };
  },
  async created() {
    await this.fetchConfiguration();
  },
  watch: {
    $route: "fetchConfiguration",
  },
  methods: {
    async fetchConfiguration() {
      this.configuration = await findConfiguration(this.$route.params.id);
    },
  },
};
</script>
