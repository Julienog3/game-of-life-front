<template>
  <div class="grid gap-y-4">
    <div class="flex gap-x-4">
      <div class="grid">
        <div v-if="grid" v-for="x in maxLine" :key="x">
          <div class="flex">
            <div v-for="y in maxCol" :key="y">
              <GolCase
                :x="`${x-1}`"
                :y="`${y-1}`"
                :inLife="grid[x-1][y-1]"
                :colorCaseDeath="colorCaseDeath"
                :colorCaseInLife="colorCaseInLife"
                :handleClick="handleClick" 
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>Nombre d'itérations</p>
        <div class="bg-gray-200 p-4 rounded w-fit">
          {{ iterations }}
        </div>
      </div>

    </div>
    <div class="flex gap-x-8">
      <div class="rounded border border-gray-200 flex justify-center gap-x-4 w-fit p-4">
        <div @click="startInterval" v-if="!isIntervalRunning" class="flex gap-x-4 items-center cursor-pointer">
          <div class="p-4 rounded bg-gray-200">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L15 10L1 19V1Z" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p>Lancer</p>
        </div>
        <div @click="stopInterval" v-else class="flex gap-x-4 items-center cursor-pointer">
          <div class="p-4 rounded bg-gray-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 4H6V20H10V4Z" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18 4H14V20H18V4Z" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p>Arrêter</p>
        </div>
        <div @click="nextIteration" class="flex gap-x-4 items-center cursor-pointer">
          <div class="p-4 rounded bg-gray-200">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 4L15 12L5 20V4Z" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19 5V19" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p>Prochaine itération</p>
        </div>
        <div @click="reset" class="flex gap-x-4 items-center cursor-pointer">
          <div class="p-4 rounded bg-gray-200">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 4V10H17" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20.4899 15C19.8399 16.8399 18.6094 18.4187 16.984 19.4985C15.3586 20.5783 13.4263 21.1006 11.4783 20.9866C9.53026 20.8726 7.67203 20.1286 6.18363 18.8667C4.69524 17.6047 3.6573 15.8932 3.22625 13.9901C2.79519 12.0869 2.99436 10.0952 3.79374 8.31508C4.59313 6.53496 5.94942 5.06288 7.65823 4.12065C9.36705 3.17843 11.3358 2.81711 13.2678 3.09116C15.1999 3.3652 16.9905 4.25975 18.3699 5.64001L22.9999 10" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p>Réinitialiser</p>
        </div>
      </div>
      <div class="rounded border border-gray-200 flex justify-center gap-x-4 w-fit p-4">
        <div class="flex gap-x-4 items-center">
          <input v-model="colorCaseDeath" type="color" class="h-[50px]">
          <label>Couleur cellules mortes</label>
        </div>
        <div class="flex gap-x-4 items-center">
          <input v-model="colorCaseInLife" type="color" class="h-[50px]">
          <label>Couleur cellules vivantes</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GolCase from './GolCase.vue'
import { findPattern } from "@/api/patterns.js"
import { create2DArrayFromFlatArray } from "@/helpers/index.js"

export default {
  props: {
    maxLine: Number,
    maxCol: Number,
  },
  data() {
    return {
      grid: null,
      intervalID: null,
      isIntervalRunning: false,
      iterations: 0,
      colorCaseDeath: "#FFFFFF",
      colorCaseInLife: "#FFFF00",
      pattern: null,
    };
  },
  async mounted() {
    this.grid = Array.from({ length: this.maxLine }, () => Array.from({ length: this.maxCol }).fill(false));

    if (this.$route.query.idPattern){
      const idPattern = this.$route.query.idPattern;
      await this.fetchPattern(idPattern)

      const { boundingX, boundingY } = this.pattern
      
      this.pattern.pattern = create2DArrayFromFlatArray(this.pattern.pattern, boundingX, boundingY);
      console.log(this.pattern.pattern)

      //On cherche la position afin de centrer le patten chargé
      const postionLine = Math.round((this.maxLine - this.pattern.boundingX)/2);
      const postionCol = Math.round((this.maxCol-this.pattern.boundingY)/2);

      for (let i=0;i<this.pattern.boundingX;i++){
        for (let j=0;j<this.pattern.boundingY;j++){
          this.grid[i+postionLine][j+postionCol] = this.pattern.pattern[i][j];
        }
      }
    }
  },
  methods: {
    handleClick(x,y) {
      this.grid[x][y] = !this.grid[x][y];
    },
    startInterval() {
      this.intervalID = setInterval(this.nextIteration, 50);
      this.isIntervalRunning = true;
    },
    stopInterval() {
      clearInterval(this.intervalID);
      this.isIntervalRunning = false;
    },
    reset() {
      this.grid = Array.from({ length: this.maxLine }, () => Array.from({ length: this.maxCol }).fill(false));
      if (this.isIntervalRunning) {
        this.stopInterval();
      }
      this.iterations = 0;
    },
    nextIteration() {
      let gridNow = Array.from({ length: this.maxLine }, () => Array.from({ length: this.maxCol }).fill(false));
      this.grid.forEach((line, x) => {
        line.forEach((cellStatut, y) => {
          let cellSuroundInLife = 0;
          for (let i=-1;i<2;i++){
            for (let j=-1;j<2;j++){
              if(x != 0 && x != this.maxLine-1 && y != 0 && y != this.maxCol-1 && (i != 0 || j != 0) && this.grid[x+(i)][y+(j)] == true){
                cellSuroundInLife = cellSuroundInLife+1;
              }
            }
          }
          if((cellStatut == false && cellSuroundInLife == 3) || (cellStatut == true && (cellSuroundInLife >= 2 && cellSuroundInLife <= 3))) {
            gridNow[x][y] = true;
          }
          else {
            gridNow[x][y] = false;
          }
        })
      });
      this.grid = gridNow;
      this.iterations++;
    },
    async fetchPattern(id) {
      this.pattern = await findPattern(id)
    }
  },
  components: {
    GolCase
  }
};
</script>
