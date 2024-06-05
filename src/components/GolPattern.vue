<template>
  <div>
    <div v-if="pattern.pattern" v-for="indexLine in pattern.pattern.length" :key="indexLine">
      <div class="flex">
        <div v-for="indexCase in pattern.pattern[indexLine-1].length" :key="indexCase">
          <div :style="`width: ${pattern.widthCase}px;height:${pattern.heightCase}px`" class="border border-gray-300 flex justify-center items-center">
            <div :style="`width: ${pattern.widthCase/1.5}px;height:${pattern.heightCase/1.5}px`" v-if="pattern.pattern[indexLine-1][indexCase-1]" class="bg-primary rounded"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-2 grid gap-y-2">
      <p class="bg-primarydark text-white px-4 py-2 rounded-full w-fit">{{pattern.type}}</p>
      <p class="text-xl font-bold">{{pattern.name}}</p>
      <p class="text-gray-400">{{pattern.description}}</p>
      <button @click="loadInSimulator(pattern.id)" class="bg-primary text-white px-4 py-2 rounded-full w-fit">Simuler</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pattern: Object
  },
  mounted() {
    //On cherche a savoir le ration de la taille des cases
    const maxWidth = 300;
    const maxHeight = 300;

    //On regarde si le pattern n'est pas carré afin de le rendre carré
    let regulateWidth = 0;
    let regulateHeight = 0;
    if(this.pattern.line !== this.pattern.col){
      if(this.pattern.line > this.pattern.col){
        regulateHeight = this.pattern.line-this.pattern.col;
      }
      else {
        regulateWidth = this.pattern.col-this.pattern.line;
      }
    }

    const widthCase = maxWidth/(this.pattern.line+4+regulateWidth);
    const heightCase = maxHeight/(this.pattern.col+4+regulateHeight);

    this.pattern.widthCase = widthCase;
    this.pattern.heightCase = heightCase;

    let pattern2D = [];

    //On définit le pattern d'une ligne vide en fonction de la longeur du pattern
    let line = [];
    line.push(0,0)
    for (let i=0;i<this.pattern.col;i++){
      line.push(0);
    }
    line.push(0,0);

    if(this.pattern.line !== this.pattern.col && this.pattern.line > this.pattern.col){
      let difference = this.pattern.line - this.pattern.col;
      for(let i=0;i<difference/2;i++){
        line.push(0);
        line.unshift(0);
      }
    }

    const emptyLine = line;

    pattern2D.push(emptyLine);
    pattern2D.push(emptyLine);

    let position=0;
    for (let i=0;i<this.pattern.line;i++){
      let line = [0,0];
      for (let i=0;i<this.pattern.col;i++){
        line.push(this.pattern.pattern[position]);
        position++;
      }
      line.push(0,0);

      if(this.pattern.line !== this.pattern.col && this.pattern.line > this.pattern.col){
        let difference = this.pattern.line - this.pattern.col;
        for(let i=0;i<difference/2;i++){
          line.push(0);
          line.unshift(0);
        }
      }

      pattern2D.push(line);
    }

    pattern2D.push(emptyLine);
    pattern2D.push(emptyLine);

    if(this.pattern.line !== this.pattern.col && this.pattern.col > this.pattern.line){
      let difference = this.pattern.col - this.pattern.line;
      for(let i=0;i<difference/2;i++){
        pattern2D.push(emptyLine);
        pattern2D.unshift(emptyLine);
      }
    }
    this.pattern.pattern = pattern2D;
  },
  methods: {
    loadInSimulator(idPattern) {
      this.$router.push({
        path: '/simulator',
        query: {
          idPattern: idPattern
        }
      })
    }
  }
};
</script>