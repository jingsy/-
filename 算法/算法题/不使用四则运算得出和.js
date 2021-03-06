/**
 * 公式 a + b = (a ^ b) + ((a & b) << 1)
 * @param {*} a 
 * @param {*} b 
 */

function sum(a, b) {
    if (a == 0) return b
    if (b == 0) return a
    let newA = a ^ b
    let newB = (a & b) << 1
    return sum(newA, newB)
}