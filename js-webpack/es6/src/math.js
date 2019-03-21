import { reduce } from 'lodash'

let sum = (arr) => reduce(arr, (total, n) => total + n)

let mean = (arr) => sum(arr) / arr.length

let even = (arr) => arr.length % 2 === 0

let findMiddleItem = (arr) => arr[(arr.length-1)/2]

let findMiddleArray = (arr) => [arr[(arr.length/2)-1], arr[arr.length/2]]

let median = (arr) => {
  if (even(arr)) {
    return mean(findMiddleArray(arr))
  } else {
    return findMiddleItem(arr)
  }
}

export { sum, mean, median }