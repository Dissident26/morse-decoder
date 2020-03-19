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

function decode(expr) {
    let str1 = String(expr.match(RegExp(/\d{10}|\*{10}/g)));
    let str2 = str1.replace(/11/g, '-').replace(/10/g, '.').replace(/0/g, '').split(',');
    let arr = [];
    function morse (n){
      return MORSE_TABLE[n]
    } 
    for ( let i = 0; i < str2.length; i++){
      if ( str2[i] === '**********' ){
        arr.push(' ')
      } arr.push(morse(str2[i]))
    } return arr.join('')
}

module.exports = {
    decode
}