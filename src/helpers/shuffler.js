export const shuffleArray = (array) => {

    if(!Array.isArray(array)) {
        return console.log('shuffleArray excepts only object type Array')
    }

    let i = array.length - 1,
      j,
      tempElement;

    while (i > 0) {
      j = randomNumberGenerator(i);
      tempElement = array[j];
      array[j] = array[i];
      array[i] = tempElement;
      i -= 1;
    }

    return array;
}

export const randomNumberGenerator = (num) => {
    return Math.floor(Math.random() * num);
}