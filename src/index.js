const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function toMorseCode (string) {
    let res = '';
    for(let k = 0; k < string.length; k+=2) {
        let sum;
        sum = string[k] + string[k + 1];
        k%10 == 0 && k != 0  ? res += " " : res;
        switch (sum) {
            case '10' :
                res += '.';
                break;
            case '11' :
                res += '-';
                break;
            default:
                res += '';    
        }
    }
    return res;
}

function morseTable(string) {
    let message = '';
    string.split(' ').map(function (letter) {
        message += MORSE_TABLE[letter];
    });
    message += ' ';
    console.log(message);
    return message;
}

function decode(expr) {
    let arrCode;
    let result = '';
    let morseResult = '';
    if ( expr.indexOf('**********') >= 0) {
        arrCode = expr.split('**********');
        for(let i = 0; i < arrCode.length; i++) {
            let arrStr = arrCode[i];
            result = toMorseCode(arrStr);
            morseResult += morseTable(result);
        }
    } else {
        arrCode = expr;
        result = toMorseCode(arrCode);
        morseResult += morseTable(result);
    }
    return morseResult.trim();
}

module.exports = {
    decode
}
