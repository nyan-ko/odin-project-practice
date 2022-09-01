const module = (function() {
    const math = function(a, b) {
        const _add = () => {
            return a + b;
        }
        const _subtract = () => {
            return a - b;
        }
        const _multiply = () => {
            return a * b;
        }
        const _divide = () => {
            return a / b;
        }

        const magic = () => {
            return _add() + _subtract() + _multiply() + _multiply() + _divide();
        }

        return () => {
            console.log({a, b});
            return magic() + _add() + _add();
        }
    }

    return {math};
})()

const meff = module;
console.log(meff);
console.log(meff.math);
console.log(meff.math(5, 10));
console.log(meff.math(5, 10)());