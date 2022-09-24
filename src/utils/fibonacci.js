function* fn() {
    let [x, y] = [0, 1]
    while (true) {
        yield y
        ;[x, y] = [y, x + y]
    }
}

function fibonacci(len) {
    const temp = []
    for (let i of fn()) {
        if (i > len) break
        temp.push(i)
    }
    return temp
}

// export default fibonacci

const label = 'fibonacci'
console.time(label)
const fib = fibonacci(100)
console.timeEnd(label)
console.log(fib)
