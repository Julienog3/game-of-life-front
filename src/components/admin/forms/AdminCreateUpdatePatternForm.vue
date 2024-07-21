<template>
  <div class="flex">
    <form class="flex flex-col gap-4 items-start">
      <div class="flex flex-col gap-2 items-start">
        <label class="font-medium">Nom</label>
        <input
          class="border border-gray-200 rounded p-2"
          v-model="newPattern.name"
          placeholder="Nom du pattern"
        />
      </div>
      <div v-if="configurations" class="flex flex-col gap-2 items-start">
        <label class="font-medium">Type de configuration</label>
        <select
          class="border border-gray-200 rounded p-2 cursor-pointer min-w-60"
          v-model="newPattern.configurationId"
          placeholder="Sélectionner un type"
        >
          <option v-for="configuration in configurations" :key="configuration.id" :value="configuration.id">{{ configuration.name }}</option>
        </select>
      </div>
      <div class="flex flex-col gap-2 items-start">
        <label class="font-medium">Description</label>
        <textarea
          v-model="newPattern.description"
          placeholder="Contenu de la description"
          class="border border-gray-200 rounded p-2 min-w-96"
        ></textarea>
      </div>
      <div class="flex flex-col gap-2 items-start">
        <label class="font-medium">Période</label>
        <input
          class="border border-gray-200 rounded p-2"
          type="number"
          v-model="newPattern.period"
        />
      </div>
      <div class="flex flex-col gap-2 items-start">
        <label class="font-medium">Bounding box</label>
        <div class="flex gap-4 items-center">
          <input
            class="border border-gray-200 rounded p-2"
            type="number"
            v-model="newPattern.boundingX"
          />
          <p>x</p>
          <input
            class="border border-gray-200 rounded p-2"
            type="number"
            v-model="newPattern.boundingY"
          />
        </div>
      </div>
      <div class="flex flex-col gap-2 items-start">
        <label class="font-medium">Créateur</label>
        <input
          class="border border-gray-200 rounded p-2 min-w-96"
          v-model="newPattern.creator"
        />
      </div>
      <button class="bg-primary px-3 py-2 rounded text-white" @click="submit">
        Créer le pattern
      </button>
    </form>
  </div>
</template>
<script>
import { createPattern } from "@/api/patterns.js";
import GolSimulator from "@/components/GolSimulator.vue";
import { getConfigurations } from "@/api/configurations.js"

export default {
  components: { GolSimulator },
  props: {
    pattern: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      configurations: [],
      newPattern: {
        name: "",
        description: "",
        creator: "",
        period: 0,
        boundingX: 5,
        boundingY: 5,
        speed: 0,
        configurationId: null,
        pattern: [],
      },
    };
  },
  async mounted() {
     this.configurations = await getConfigurations();
  },
  computed: {
    cellsLength() {
      return this.newPattern.pattern.filter((cell) => !!cell).length;
    },
  },
  methods: {
    async submit(e) {
      e.preventDefault();
      await createPattern({ ...this.newPattern, cells: this.cellsLength });
    },
  },
};
</script>
