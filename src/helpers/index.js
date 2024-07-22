export function create2DArrayFromFlatArray(array, boundingX, boundingY) {
  let position = 0;
  let array2D = [];
  for (let i = 0;i < boundingX; i++) {
    let row = [];
    for (let j = 0; j < boundingY; j++) {
      row.push(!!array[position]);
      position++;
    }
    array2D.push(row);
  }

  return array2D
}

export function flatten2DArray(array) {
  return array.flat()
}