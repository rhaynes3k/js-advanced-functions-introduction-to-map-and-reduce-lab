// Your code here
function mapToNegativize(sourceArray){
  let newArr = []
  for(var n = 0; n < sourceArray.length; n++){
    let newWork = sourceArray[n] * -1
    newArr.push(newWork)
  }
    return newArr
}

function mapToNoChange(sourceArray) {
  let newArr = []
  for(var n = 0; n < sourceArray.length; n++){
    newArr.push(sourceArray[n])
  }
    return newArr
}

function mapToDouble(sourceArray){
  let newArr = []
  for(var n = 0; n < sourceArray.length; n++){
    let newWork = sourceArray[n] * 2
    newArr.push(newWork)
  }
    return newArr
}

function mapToSquare(sourceArray){
  let newArr = []
  for(var n = 0; n < sourceArray.length; n++){
    let newWork = sourceArray[n] * sourceArray[n]
    newArr.push(newWork)
  }
    return newArr
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let tot = startingPoint
  for(var n=0; n<sourceArray.length; n++){
    tot = tot + sourceArray[n]
  }
  return tot
}

function reduceToAllTrue(sourceArray){
  for(var n = 0; n<sourceArray.length; n++){
    if(sourceArray[n] == false)
      return false
  }
      return true
  }

  function reduceToAnyTrue(sourceArray) {
    for(var n = 0; n < sourceArray.length; n++){
      if (sourceArray[n])
      return true
    }
      return false
  }
