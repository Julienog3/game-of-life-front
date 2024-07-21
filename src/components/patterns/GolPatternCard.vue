<template>
  <RouterLink :to="{ name: 'pattern_details', params: { id: pattern.id } }">
    <div class="flex flex-col border border-gray-200 w-fit rounded-lg overflow-hidden">
      <div
        v-if="pattern.pattern"
        v-for="indexLine in pattern.pattern.length"
        :key="indexLine"
      >
        <div class="flex">
          <div
            v-for="indexCase in pattern.pattern[indexLine - 1].length"
            :key="indexCase"
          >
            <div
              :style="`width: ${pattern.widthCase}px;height:${pattern.heightCase}px`"
              class="border border-gray-300 flex justify-center items-center"
            >
              <div
                :style="`width: ${pattern.widthCase / 1.5}px;height:${
                  pattern.heightCase / 1.5
                }px`"
                v-if="pattern.pattern[indexLine - 1][indexCase - 1]"
                class="bg-primary rounded"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-2 grid gap-y-2">
        <p class="bg-primarydark text-white px-4 py-2 rounded-full w-fit">
          {{ pattern.configuration.name }}
        </p>
        <p class="text-xl font-bold">{{ pattern.name }}</p>
        <p class="text-gray-400">{{ pattern.description }}</p>
        <button v-if="canDelete" class="bg-black text-white rounded w-8 h-8" @click="modalStore.open">S</button>
      </div>
    </div>
  </RouterLink>
</template>

<script>
import { useModalStore } from "@/stores/modal";
import { mapStores } from "pinia";
import { RouterLink } from "vue-router";

export default {
  props: {
    pattern: {
      type: Object,
      required: true
    },
    canEdit: {
      type: Boolean,
      required: false,
      default: false
    },
    canDelete: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  mounted() {
    console.log(this.canEdit, this.canDelete)

    //On cherche a savoir le ratio de la taille des cases
    const maxWidth = 200;
    const maxHeight = 200;

    //On regarde si le pattern n'est pas carré afin de le rendre carré
    let regulateWidth = 0;
    let regulateHeight = 0;

    if (this.pattern.boundingX !== this.pattern.boundingY) {
      if (this.pattern.boundingX > this.pattern.boundingY) {
        regulateHeight = this.pattern.boundingX - this.pattern.boundingY;
      } else {
        regulateWidth = this.pattern.boundingY - this.pattern.boundingX;
      }
    }

    const widthCase = maxWidth / (this.pattern.boundingX + 4 + regulateWidth);
    const heightCase =
      maxHeight / (this.pattern.boundingY + 4 + regulateHeight);

    this.pattern.widthCase = widthCase;
    this.pattern.heightCase = heightCase;

    let pattern2D = [];

    //On définit le pattern d'une ligne vide en fonction de la longeur du pattern
    let line = [];
    line.push(0, 0);
    for (let i = 0; i < this.pattern.boundingY; i++) {
      line.push(0);
    }
    line.push(0, 0);

    if (
      this.pattern.boundingX !== this.pattern.boundingY &&
      this.pattern.boundingX > this.pattern.boundingY
    ) {
      let difference = this.pattern.boundingX - this.pattern.boundingY;
      for (let i = 0; i < difference / 2; i++) {
        line.push(0);
        line.unshift(0);
      }
    }

    const emptyLine = line;

    pattern2D.push(emptyLine);
    pattern2D.push(emptyLine);

    let position = 0;
    for (let i = 0; i < this.pattern.boundingX; i++) {
      let line = [0, 0];
      for (let i = 0; i < this.pattern.boundingY; i++) {
        line.push(this.pattern.pattern[position]);
        position++;
      }
      line.push(0, 0);

      if (
        this.pattern.boundingX !== this.pattern.boundingY &&
        this.pattern.boundingX > this.pattern.boundingY
      ) {
        let difference = this.pattern.boundingX - this.pattern.boundingY;
        for (let i = 0; i < difference / 2; i++) {
          line.push(0);
          line.unshift(0);
        }
      }

      pattern2D.push(line);
    }

    pattern2D.push(emptyLine);
    pattern2D.push(emptyLine);

    if (
      this.pattern.boundingX !== this.pattern.boundingY &&
      this.pattern.boundingY > this.pattern.boundingX
    ) {
      let difference = this.pattern.boundingY - this.pattern.boundingX;
      for (let i = 0; i < difference / 2; i++) {
        pattern2D.push(emptyLine);
        pattern2D.unshift(emptyLine);
      }
    }
    this.pattern.pattern = pattern2D;
  },
  methods: {
    loadInSimulator(idPattern) {
      this.$router.push({
        path: "/simulator",
        query: {
          idPattern: idPattern,
        },
      });
    },
  },
  computed: {
    ...mapStores(useModalStore),
  },
};
</script>
