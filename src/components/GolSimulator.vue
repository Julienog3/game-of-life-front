<template>
  <div class="flex gap-x-4">
    <div class="grid">
      <div v-for="x in 50" :key="x">
        <div class="flex">
          <div v-for="y in 50" :key="y">
            <GolCase :x="`${x-1}`" :y="`${y-1}`" :handleClick="handleClick"></GolCase>
          </div>
        </div>
      </div>
    </div>
    <button @click="nextIteration">Suivant</button>
    <button @click="startInterval" v-if="!isIntervalRunning">Démarrer Interval</button>
    <button @click="stopInterval" v-else>Arrêter Interval</button>
  </div>

</template>

<script>
import GolCase from './GolCase.vue'

export default {
  data() {
    return {
      grid: Array.from({ length: 50 }, () => Array.from({ length: 50 }).fill(0)),
      intervalID: null,
      isIntervalRunning: false
    };
  },
  methods: {
    handleClick(event) {
      const clickedDiv = event.target;
      this.updateGrid(clickedDiv);
    },
    updateGrid(cell) {
      const parties = cell.id.split("-");
      const x = parties[0];
      const y = parties[1];
      cell.classList.toggle('bg-pink-500');
      if(this.grid[x][y] == 0){
        this.grid[x][y] = 1;
      }
      else {
        this.grid[x][y] = 0;
      }
    },
    startInterval() {
      this.intervalID = setInterval(this.nextIteration, 10);
      this.isIntervalRunning = true;
    },
    stopInterval() {
      clearInterval(this.intervalID);
      this.isIntervalRunning = false;
    },
    nextIteration() {
      let gridNow = Array.from({ length: 50 }, () => Array.from({ length: 50 }).fill(0));
      this.grid.forEach((line, x) => {
        line.forEach((cellStatut, y) => {
          const cell = document.getElementById(x+'-'+y);
          let cellSuroundInLife = 0;
          if(cellStatut == 0){
            //Naissance
            //Ligne du dessus
            if(x != 0){
              if(this.grid[x-1][y-1] == 1) {
                cellSuroundInLife = cellSuroundInLife+1;
              }
              if(this.grid[x-1][y] == 1) {
                cellSuroundInLife = cellSuroundInLife+1;
              }
              if(this.grid[x-1][y+1] == 1) {
                cellSuroundInLife = cellSuroundInLife+1;
              }
            }

            //Ligne de la case
            if(this.grid[x][y-1] == 1) {
              cellSuroundInLife = cellSuroundInLife+1;
            }
            if(this.grid[x][y+1] == 1) {
              cellSuroundInLife = cellSuroundInLife+1;
            }

            if(x != 49){
              //Ligne du dessous
              if(this.grid[x+1][y-1] == 1) {
                cellSuroundInLife = cellSuroundInLife+1;
              }
              if(this.grid[x+1][y] == 1) {
                cellSuroundInLife = cellSuroundInLife+1;
              }
              if(this.grid[x+1][y+1] == 1) {
                cellSuroundInLife = cellSuroundInLife+1;
              }
            }
            if(cellSuroundInLife == 3){
              cell.classList.toggle('bg-pink-500');
              gridNow[x][y] = 1;
            }
          }
          else {
            //Mort
            //Ligne du dessus
            if(x != 0){
              if(this.grid[x-1][y-1] == 1) {
                cellSuroundInLife = cellSuroundInLife+1;
              }
              if(this.grid[x-1][y] == 1) {
                cellSuroundInLife = cellSuroundInLife+1;
              }
              if(this.grid[x-1][y+1] == 1) {
                cellSuroundInLife = cellSuroundInLife+1;
              }
            }

            //Ligne de la case
            if(this.grid[x][y-1] == 1) {
              cellSuroundInLife = cellSuroundInLife+1;
            }
            if(this.grid[x][y+1] == 1) {
              cellSuroundInLife = cellSuroundInLife+1;
            }

            if(x != 49){
              //Ligne du dessous
              if(this.grid[x+1][y-1] == 1) {
                cellSuroundInLife = cellSuroundInLife+1;
              }
              if(this.grid[x+1][y] == 1) {
                cellSuroundInLife = cellSuroundInLife+1;
              }
              if(this.grid[x+1][y+1] == 1) {
                cellSuroundInLife = cellSuroundInLife+1;
              }
            }

            if(cellSuroundInLife < 2 || cellSuroundInLife > 3 ){
              cell.classList.toggle('bg-pink-500');
              gridNow[x][y] = 0;
            }
            else {
              gridNow[x][y] = 1;
            }
          }
        })
      });
      this.grid = gridNow;
    },
  },
  components: {
    GolCase
  }
};
</script>
