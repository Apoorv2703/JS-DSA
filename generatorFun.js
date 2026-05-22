// function* genFun(){
//     yield "apoorv"
//     let a = yield "patel"
//     return a
// }

// let result = genFun()

// console.log(result.next())
// console.log(result.next())
// console.log(result.next("i am apoorv"))

//normal function can return only once but generator function can return (yield) more than 1


// function* genFunc(){
//     yield console.log('this is 1st line')
//     yield console.log('this is 2nd line')
//     yield console.log('this is 3rd line')
//     yield console.log('this is 4th line')
// }

// let generator1 = genFunc()

// console.log(generator1.next())
//ans this is 1st line
// { value: undefined, done: false } same on next 3 as well
// console.log(generator1.next())
// console.log(generator1.next())
// console.log(generator1.next())



function* genFunc(){
    yield ('this is 1st line')
    yield ('this is 2nd line')
    yield ('this is 3rd line')
    yield ('this is 4th line')
}

let neww = genFunc()

console.log(neww.next().value);
// ans = this is 1st line (value)
console.log(neww.next().done);
//ans = false (status)


