function* genFun(){
    yield "apoorv"
    let a = yield "patel"
    return a
}

let result = genFun()

console.log(result.next())
console.log(result.next())
console.log(result.next("i am apoorv"))