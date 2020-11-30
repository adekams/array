let myList = [
  ['MacBook Pro 2020', 2],
  ['Iphone 12 pro', 5],
  ['Backpack', 1],
  ['Passport', 3],
  ['Books', 19]
]

//remove first element and store in a variable
const firstElement = myList.shift()

//remove last element and store in a variable
const lastElement = myList.pop()

//change the entry at number 3
myList.splice(2, 1, ['Orange Juice', 17])

console.log(firstElement)
console.log(lastElement)

console.log(myList)

//loop through and print an object
let arrObj = {}
for(let i=0; i< myList.length; i++) {
  let child = myList[i]

  arrObj[child[0]] = child[1]
}
console.log(arrObj)


/*myList.forEach((list) => {
  console.log(`{${list[0]} : ${list[1]}}`)
})*/



