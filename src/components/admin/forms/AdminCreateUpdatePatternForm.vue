<template>
  <div class="flex">
    <form class="flex flex-row gap-8 items-start">
      <div class="flex flex-col gap-4">
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
        <div class="flex gap-4 items-center">
          <div class="flex flex-col gap-2 items-start">
            <label class="font-medium">Période</label>
            <input
              class="border border-gray-200 rounded p-2"
              type="number"
              v-model="newPattern.period"
            />
          </div>
          <div class="flex flex-col gap-2 items-start">
            <label class="font-medium">Vitesse</label>
            <input
              class="border border-gray-200 rounded p-2"
              type="number"
              v-model="newPattern.speed"
            />
          </div>
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
        <GolButton class="w-fit" @click="submit">
          {{ buttonLabel }}
        </GolButton>
      </div>
      <div class="flex flex-col gap-2 items-start">
        <label class="font-medium">Pattern</label>
        <GolPatternEditor 
          v-if="newPattern.pattern"
          v-model="newPattern.pattern"
          :boundingX="newPattern.boundingX" 
          :boundingY="newPattern.boundingY"
        />
      </div>
    </form>
  </div>
</template>
<script>
import { createPattern, updatePattern } from "@/api/patterns.js";
import GolSimulator from "@/components/GolSimulator.vue";
import { getConfigurations } from "@/api/configurations.js"
import GolButton from "@/components/ui/GolButton.vue";
import GolPatternEditor from "@/components/patterns/GolPatternEditor.vue"

export default {
  components: { GolSimulator, GolButton, GolPatternEditor },
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
        cells: 0
      },
    };
  },
  async mounted() {
    this.configurations = await getConfigurations();

    if (this.pattern) {
      const { id, configuration, ...pattern } = this.pattern
      this.newPattern = { ...pattern };
    }
  },
  computed: {
    cellsLength() {
      return this.newPattern.pattern.filter((cell) => !!cell).length ?? 0;
    },
  },
  methods: {
    async submit(e) {
      e.preventDefault();
      e.stopPropagation()
      
      if (!this.pattern) {
        const cells = this.newPattern.pattern.filter((cell) => !!cell).length
        await createPattern({ ...this.newPattern, cells });
        return this.$router.push("/admin/patterns");
      }

      await updatePattern(this.pattern.id, { cells: this.cellsLength, ...this.newPattern });
      return this.$router.push("/admin/patterns");
    },
  },
  computed: {
    buttonLabel() {
      return !!this.pattern ? "Modifier le pattern" : "Ajouter un pattern";
    },
  }
};
</script>
