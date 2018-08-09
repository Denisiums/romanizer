'use strict';
const RomanNumerals = require('./romanizer');

describe('.toRoman', () => {
  test('.toRoman exists', () => {
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
    expect(RomanNumerals.toRoman(30)).toBe('XXX');
    expect(RomanNumerals.toRoman(97)).toBe('XCVII');
    expect(RomanNumerals.toRoman(99)).toBe('XCIX');
    expect(RomanNumerals.toRoman(101)).toBe('CI');
    expect(RomanNumerals.toRoman(399)).toBe('CCCXCIX');
    expect(RomanNumerals.toRoman(1776)).toBe('MDCCLXXVI');
    expect(RomanNumerals.toRoman(1954)).toBe('MCMLIV');
    expect(RomanNumerals.toRoman(1990)).toBe('MCMXC');
    expect(RomanNumerals.toRoman(2008)).toBe('MMVIII');
    expect(RomanNumerals.toRoman(2014)).toBe('MMXIV');
    expect(RomanNumerals.toRoman(2018)).toBe('MMXVIII');
    expect(RomanNumerals.toRoman(3999)).toBe('MMMCMXCIX');
  });
});

describe('.fromRoman', () => {
  test('.fromRoman exists', () => {
    expect(RomanNumerals.fromRoman).toBeDefined();
  });

  test('.fromRoman should throw an error on invalid input', () => {
    expect(() => RomanNumerals.fromRoman()).toThrow();
    expect(() => RomanNumerals.fromRoman('')).toThrow();
    expect(() => RomanNumerals.fromRoman(null)).toThrow();
    expect(() => RomanNumerals.fromRoman(1)).toThrow();
    expect(() => RomanNumerals.fromRoman(0)).toThrow();
    expect(() => RomanNumerals.fromRoman(-1)).toThrow();
    expect(() => RomanNumerals.fromRoman('MVNOTAROMAN')).toThrow();
    expect(() => RomanNumerals.fromRoman('XDMC')).toThrow();
  });

  test('.fromRoman should return correct basic values', () => {
    expect(RomanNumerals.fromRoman('I')).toBe(1);
    expect(RomanNumerals.fromRoman('IV')).toBe(4);
    expect(RomanNumerals.fromRoman('V')).toBe(5);
    expect(RomanNumerals.fromRoman('IX')).toBe(9);
    expect(RomanNumerals.fromRoman('X')).toBe(10);
    expect(RomanNumerals.fromRoman('XL')).toBe(40);
    expect(RomanNumerals.fromRoman('L')).toBe(50);
    expect(RomanNumerals.fromRoman('XC')).toBe(90);
    expect(RomanNumerals.fromRoman('C')).toBe(100);
    expect(RomanNumerals.fromRoman('CD')).toBe(400);
    expect(RomanNumerals.fromRoman('D')).toBe(500);
    expect(RomanNumerals.fromRoman('CM')).toBe(900);
    expect(RomanNumerals.fromRoman('M')).toBe(1000);
  });

  test('.fromRoman should return correct custom values', () => {
    expect(RomanNumerals.fromRoman('II')).toBe(2);
    expect(RomanNumerals.fromRoman('III')).toBe(3);
    expect(RomanNumerals.fromRoman('VI')).toBe(6);
    expect(RomanNumerals.fromRoman('VIII')).toBe(8);
    expect(RomanNumerals.fromRoman('XII')).toBe(12);
    expect(RomanNumerals.fromRoman('XIV')).toBe(14);
    expect(RomanNumerals.fromRoman('XV')).toBe(15);
    expect(RomanNumerals.fromRoman('XVIII')).toBe(18);
    expect(RomanNumerals.fromRoman('XXX')).toBe(30);
    expect(RomanNumerals.fromRoman('XCVII')).toBe(97);
    expect(RomanNumerals.fromRoman('XCIX')).toBe(99);
    expect(RomanNumerals.fromRoman('CI')).toBe(101);
    expect(RomanNumerals.fromRoman('CCCXCIX')).toBe(399);
    expect(RomanNumerals.fromRoman('MDCCLXXVI')).toBe(1776);
    expect(RomanNumerals.fromRoman('MCMLIV')).toBe(1954);
    expect(RomanNumerals.fromRoman('MCMXC')).toBe(1990);
    expect(RomanNumerals.fromRoman('MMVIII')).toBe(2008);
    expect(RomanNumerals.fromRoman('MMXIV')).toBe(2014);
    expect(RomanNumerals.fromRoman('MMXVIII')).toBe(2018);
    expect(RomanNumerals.fromRoman('MMMCMXCIX')).toBe(3999);
  });
});
