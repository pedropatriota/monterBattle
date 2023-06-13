export const numbersFractionCalculator = (numbers: number[]) => {
  const hash = {positives: 0, negative: 0, zeros: 0}
  const length = numbers.length

  for(let num of numbers){
    if(num > 0){
      hash['positives'] += 1
    }else if(num < 0){
      hash['negative'] += 1
    }
    else{
      hash['zeros'] += 1
    }
  }

  for(let [key,value] of Object.entries(hash)){
    hash[key] = (value/length).toFixed(6)
  }

  return hash
};
