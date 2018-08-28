// - input 2 numbers between 6 and 10

var left = process.argv.slice(2)[0]
var right = process.argv.slice(2)[1]

// console.log(left)
// console.log(right)

// - group fingers in left hand to represent first number according to this mapping:
//   - thumb = 6
//   - index = 7
//   - middle = 8
//   - ringer = 9
//   - pinky = 10

var leftGrouped = left - 5

//  - do the same with my right hand for the second number

var rightGrouped = right - 5

console.log("left grouped", leftGrouped)
console.log("right grouped", rightGrouped)

//  - join those 2 groups of fingers
//  - count them and multiply by 10   <--- RESULT 1

var grouped = (leftGrouped + rightGrouped) * 10

//  - count my left fingers left floating

var leftFloating = 5 - leftGrouped
var rightFloating = 5 - rightGrouped

console.log("left floating", leftFloating)
console.log("right floating", rightFloating)

//  - and multiply them by the fingers left floating in my right hand

var floating = leftFloating * rightFloating

//  - then ADD that number to RESULT 1

var final = grouped + floating

console.log ("final ", final)
console.log ("proof ", left * right)