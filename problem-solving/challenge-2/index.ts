export const diceFacesCalculator = (
  dice1: number,
  dice2: number,
  dice3: number,
): number => {
  const hash = {};
  let max = 0;

  const dices = [dice1, dice2, dice3];

  for( let dice of dices){
    if(dice <1 || dice>6){
      throw new Error('Dice out of number range')
    }
  }

  for (let i of dices) {
    if (!hash[i]) {
      hash[i] = 1;
    } else {
      hash[i] += 1;
    }
  }

 

  for (let key of Object.keys(hash)) {
    const numKey = Number(key)
  
    if (hash[key] === 3) {
      return numKey * 3;
    } else if (hash[key] === 2) {
      return numKey * 2;
    } else {
      if (numKey > max) {
        max = numKey;
      }
    }
  }
  return max;
};
