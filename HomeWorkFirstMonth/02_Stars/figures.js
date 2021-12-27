function figureOne(n) {
    let result = '';

    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            result += ' * '
        }
        result += '\n';
    }
    return result;
}

console.log(figureOne(7))

function figureTwo(n) {
   let result = '';

   for (let i = 0; i <= n - 1; i++) {
       result += " * ";
       for (let j = 0; j < n - 2; j++) {
           if (i !== n - 1 && i !== 0) {
               result += "   ";
           } else result += " * ";
       }
       result += '* \n';
   }
   return result;
}

console.log(figureTwo(7))

function figureThree(n) {
    let result = '';

    for (let i = 0; i < n; i++) {
        result += ' * ';
        for (let j = 0; j < n - 1; j++) {
            if (i === 0 || j === n - i - 2) {
                result += ' * ';
            } else result += '   ';
        }
        result += ' \n';
    }
    return result;
}

console.log(figureThree(7))

function figureFour(n) {
    let result = '';

    for (let i = 0; i < n; i++) {
        result += ' * ';
        for (let j = 0; j < n - 1; j++) {
            if (i === n - 1 || j === i - 1) {
                result += ' * ';
            } else result += '   ';
        }
        result += '\n';
    }
    return result;
}

console.log(figureFour(7))

function figureFive(n) {
    let result = '';

    for (let i = 0; i < n; i++) {
        result += '  ';
        for (let j = 0; j < n - 1; j++) {
            if (i === n - 1 || j === n - (i + 1)) {
                result += ' * ';
            } else result += '   ';
        }
        result += '*\n';
    }
    return result;
}

console.log(figureFive(7))

function figureSix(n) {
    let result = '';

    for (let i = 0; i < n; i++){
        result += '   ';
        for (let j = 0; j < n - 1; j++) {
            if (i === 0 || j === i) {
                result += ' * ';
            } else result += '   ';
        }
        result += ' *\n';
    }
    return result;
}

 console.log(figureSix(7))

function figureSeven(n) {
    let result = '';

    for (let i = 0; i < n; i++) {
        result += '  ';
        for (let j = 0; j < n; j++) {
            if (i === j || j === n - i - 1) {
                result += ' * ';
            } else result += '   ';
        }
        result += '\n'
    }
    return result;
}

console.log(figureSeven(7))

function figureEight(n) {
    let result = '';

    for (let i = 0; i < n; i++) {
        result += '  ';
        for (let j = 0; j < n; j++) {
            if (i < n / 2) {
             if (i === 0 || j === i || j === n - i - 1) {
                result += ' * ';
            } else result += '   ';
          }
        }
        result += ' \n';
    }
    return result;
}

console.log(figureEight(7))

function figureNine(n) {
    let result = '';

    for (let i = 0; i < n; i++) {
        result += '  ';
        for (let j = 0; j < n; j++) {
            if (i > n / 2 - 1) {
                if (i === n - 1 || j === i || j === n - i - 1) {
                    result += ' * ';
                } else result += '   ';
            }
        }
        result += ' \n';
    }
    return result;
}

console.log(figureNine(7))

function kek(i) {
    let image = '';
    if (i === 1) {
        image = '*  *  *  *  *  *  *' +
                '\n*              *' +
                '\n*           *' +
                '\n*        *' +
                '\n*     *' +
                '\n*  *' +
                '\n*'
    }
    return image;
}

console.log(kek(1))


module.exports = {
    figureOne,
    figureTwo,
    figureThree,
    figureFour,
    figureFive,
    figureSix,
    figureSeven,
    figureEight,
    figureNine,
    kek
}