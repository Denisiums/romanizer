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
    let numeralIndex = 0;
    while(number > 0 && numeralIndex < NUMERALS.length) {
      const numeral = NUMERALS[numeralIndex];
      if (number >= numeral.arabic) {
        result += numeral.roman;
        number -= numeral.arabic;
      } else {
        numeralIndex++;
      }
    }
    return result;
  }

  static fromRoman(roman) {
    const invalidArgumentError = new TypeError('Invalid roman string!');

    if (!roman || typeof roman !== 'string') {
      throw invalidArgumentError;
    }

    const romanString = roman.toUpperCase();
    let result = 0;
    let numeralIndex = 0;
    let cursor = 0;
    while (numeralIndex < NUMERALS.length && cursor < romanString.length) {
      const numeral = NUMERALS[numeralIndex];
      if (romanString.substr(cursor, numeral.roman.length) === numeral.roman) {
        result += numeral.arabic;
        cursor += numeral.roman.length;
      }
      else {
        numeralIndex++;
      }
    }

    if (cursor < romanString.length) {
      throw invalidArgumentError;
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
