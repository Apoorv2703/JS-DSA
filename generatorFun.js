function* genFun(){
    yield "apoorv"
    let a = yield "patel"
    return a
}

let result = genFun()

console.log(result.next())
console.log(result.next())
console.log(result.next("i am apoorv"))

//normal function can return only once but generator function can return (yield) more than 1