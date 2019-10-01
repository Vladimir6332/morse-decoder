const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let alphabetBinary = {
    '10' : '.',
    '11' : '-'
  };
  let arrExpr = expr.split('');
  let arrLettersBinary = [];
  let temp;
  for (let i = arrExpr.length(); i > 0;) {
    arrLettersBinary.push(arrExpr.splice(0, 10));
  };
  arrLettersBinary.reduce((acc, cur, index, arr) => {
    if (index % 2 === 0) {
      temp = arr[index] + arr[index + 1];
      if (alphabetBinary[temp]) return acc.push(alphabetBinary[temp])
    }
    cur.map(())
    return acc
  }, []);
}

module.exports = {
  decode
}