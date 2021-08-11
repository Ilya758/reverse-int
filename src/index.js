module.exports = function reverse(n) {

    const reg = /[0]*/g

    if (n % 10 === 0) {
        return String(n / 10).replace(reg, '').split('').reverse().join('');
    }
    return (n < 0) ? String(-n).split('').reverse().join('') : String(n).split('').reverse().join('');
}
