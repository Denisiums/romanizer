'use strict';

const NUMERALS = [
  generateNumeral(1000, 'M'),
  generateNumeral(900, 'CM'),
  generateNumeral(500, 'D'),
  generateNumeral(400, 'CD'),
  generateNumeral(100, 'C'),
  generateNumeral(90, 'XC'),
  generateNumeral(50, 'L'),
  generateNumeral(40, 'XL'),
  generateNumeral(10, 'X'),
  generateNumeral(9, 'IX'),
  generateNumeral(5, 'V'),
  generateNumeral(4, 'IV'),
  generateNumeral(1, 'I'),
];

class RomanNumerals {

  static toRoman(number) {
    if (number === 0) {
      return '';
    }

    if (typeof number !== 'number' || !Number.isInteger(number)) {
      throw new TypeError('Argument not a Integer!');
    }

    if (number < 0 || number > 3999) {
      throw new Error('Number should be less 4000 and bigger or equal 0');
    }

    let result = '';
    let i = 0;
    while(number > 0 && i < NUMERALS.length) {
      const numeral = NUMERALS[i];
      if (number >= numeral.arabic) {
        result += numeral.roman;
        number -= numeral.arabic;
      } else {
        i++;
      }
    }
    return result;
  }

}

function generateNumeral(arabic, roman) {
  if (!arabic || !roman) {
    throw new TypeError('Invalid generateNumeral arguments');
  }

  return {
    arabic,
    roman
  };
}

module.exports = RomanNumerals;
