<template>
  <div class="flex gap-x-4">
    <div class="grid">
      <div v-for="x in maxX" :key="x">
        <div class="flex">
          <div v-for="y in maxY" :key="y">
            <GolCase :x="`${x-1}`" :y="`${y-1}`" :inLife="grid[x-1][y-1]" :handleClick="handleClick"></GolCase>
          </div>
        </div>
      </div>
    </div>
    <button @click="nextIteration">Suivant</button>
    <button @click="startInterval" v-if="!isIntervalRunning">Démarrer Interval</button>
    <button @click="stopInterval" v-else>Arrêter Interval</button>
    <button @click="reset">Reset</button>

    <p>Nombre d'itérations {{ iterations }}</p>
  </div>

</template>

<script>
import GolCase from './GolCase.vue'

export default {
  props: {
    maxX: Number,
    maxY: Number,
  },
  data() {
    return {
      grid: Array.from({ length: this.maxX }, () => Array.from({ length: this.maxY }).fill(false)),
      intervalID: null,
      isIntervalRunning: false,
      iterations: 0
    };
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
      this.grid = Array.from({ length: this.maxX }, () => Array.from({ length: this.maxY }).fill(false));
      if(this.isIntervalRunning){
        this.stopInterval();
      }
      this.iterations = 0;
    },
    nextIteration() {
      let gridNow = Array.from({ length: this.maxX }, () => Array.from({ length: this.maxY }).fill(false));
      this.grid.forEach((line, x) => {
        line.forEach((cellStatut, y) => {
          let cellSuroundInLife = 0;
          for (let i=-1;i<2;i++){
            for (let j=-1;j<2;j++){
              if(x != 0 && x != this.maxX-1 && y != 0 && y != this.maxY-1 && (i != 0 || j != 0) && this.grid[x+(i)][y+(j)] == true){
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
  },
  components: {
    GolCase
  }
};
</script>
