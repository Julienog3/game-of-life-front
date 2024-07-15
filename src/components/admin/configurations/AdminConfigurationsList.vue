<template>
  <ul v-if="configurations" class="grid grid-cols-4 gap-2">
    <li v-for="configuration in configurations" :key="configuration.id">
      <AdminConfigurationsCard :configuration="configuration" />
    </li>
  </ul>
  <p v-else>Il n'y pas encore de configurations</p>
</template>

<script>
import AdminConfigurationsCard from "@/components/admin/configurations/AdminConfigurationsCard.vue";

export default {
  components: { AdminConfigurationsCard },
  props: {
    configurations: {
      type: Array,
      required: true,
    },
  },
};
</script>
