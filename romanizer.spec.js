'use strict';
const RomanNumerals = require('./romanizer');

describe('toRoman', () => {
  test('toRoman exists', () => {
    expect(RomanNumerals.toRoman).toBeDefined();
  });

  test('.toRoman should throw an error on invalid input', () => {
    expect(() => RomanNumerals.toRoman()).toThrow();
    expect(() => RomanNumerals.toRoman('some')).toThrow();
    expect(() => RomanNumerals.toRoman(null)).toThrow();
    expect(() => RomanNumerals.toRoman(-1)).toThrow();
    expect(() => RomanNumerals.toRoman(4000)).toThrow();
    expect(() => RomanNumerals.toRoman(15.5)).toThrow();
  });

  test('.toRoman should return correct basic values', () => {
    expect(RomanNumerals.toRoman(0)).toBe('');
    expect(RomanNumerals.toRoman(1)).toBe('I');
    expect(RomanNumerals.toRoman(4)).toBe('IV');
    expect(RomanNumerals.toRoman(5)).toBe('V');
    expect(RomanNumerals.toRoman(9)).toBe('IX');
    expect(RomanNumerals.toRoman(10)).toBe('X');
    expect(RomanNumerals.toRoman(40)).toBe('XL');
    expect(RomanNumerals.toRoman(50)).toBe('L');
    expect(RomanNumerals.toRoman(90)).toBe('XC');
    expect(RomanNumerals.toRoman(100)).toBe('C');
    expect(RomanNumerals.toRoman(400)).toBe('CD');
    expect(RomanNumerals.toRoman(500)).toBe('D');
    expect(RomanNumerals.toRoman(900)).toBe('CM');
    expect(RomanNumerals.toRoman(1000)).toBe('M');
  });

  test('.toRoman should return correct custom values', () => {
    expect(RomanNumerals.toRoman(2)).toBe('II');
    expect(RomanNumerals.toRoman(3)).toBe('III');
    expect(RomanNumerals.toRoman(6)).toBe('VI');
    expect(RomanNumerals.toRoman(8)).toBe('VIII');
    expect(RomanNumerals.toRoman(12)).toBe('XII');
    expect(RomanNumerals.toRoman(14)).toBe('XIV');
    expect(RomanNumerals.toRoman(15)).toBe('XV');
    expect(RomanNumerals.toRoman(18)).toBe('XVIII');
    expect(RomanNumerals.toRoman(97)).toBe('XCVII');
    expect(RomanNumerals.toRoman(99)).toBe('XCIX');
    expect(RomanNumerals.toRoman(101)).toBe('CI');
    expect(RomanNumerals.toRoman(399)).toBe('CCCXCIX');
    expect(RomanNumerals.toRoman(1776)).toBe('MDCCLXXVI');
    expect(RomanNumerals.toRoman(1954)).toBe('MCMLIV');
    expect(RomanNumerals.toRoman(1990)).toBe('MCMXC');
    expect(RomanNumerals.toRoman(2014)).toBe('MMXIV');
    expect(RomanNumerals.toRoman(2018)).toBe('MMXVIII');
    expect(RomanNumerals.toRoman(3999)).toBe('MMMCMXCIX');
  });
});