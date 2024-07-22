<template>
  <div class="bg-white">
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
  </div>
</template>

<script>
export default {
  props: {
    pattern: Object,
  },
  mounted() {
    //On cherche a savoir le ration de la taille des cases
    const maxWidth = 250;
    const maxHeight = 250;

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
};
</script>
