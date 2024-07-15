<template>
  <div class="flex">
    <form class="flex flex-col gap-4 items-start">
      <div class="flex flex-col gap-2 items-start">
        <label class="font-medium">Nom</label>
        <input
          class="border border-gray-200 rounded p-2"
          v-model="newConfiguration.name"
          placeholder="Nom du type de configuration"
        />
      </div>
      <button class="bg-primary px-3 py-2 rounded text-white" @click="submit">
        {{ buttonLabel }}
      </button>
    </form>
  </div>
</template>
<script>
import {
  createConfiguration,
  updateConfiguration,
} from "@/api/configurations.js";
import GolSimulator from "@/components/GolSimulator.vue";

export default {
  components: { GolSimulator },
  props: {
    configuration: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      newConfiguration: {
        name: "",
      },
    };
  },
  methods: {
    async submit(e) {
      e.preventDefault();
      e.stopPropagation();

      if (!this.configuration) {
        await createConfiguration(this.newConfiguration);
        return this.$router.push("/admin/types");
      }

      await updateConfiguration(this.configuration.id, this.newConfiguration);
      return this.$router.push("/admin/types");
    },
  },
  mounted() {
    if (this.configuration) {
      this.newConfiguration = { ...this.configuration };
    }
  },
  computed: {
    buttonLabel() {
      return !!this.configuration ? "Modifier le type" : "Ajouter un type";
    },
  },
};
</script>
