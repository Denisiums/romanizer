# Romanizer
Roman to Arabic (and vice versa) numerical converter.
Minimum Arabic is 0 (returns empty string), maximum is 3999.

## Examples

```javascript
const RomanNumerals = require('romanizer');

RomanNumerals.toRoman(2008); // MMVIII
RomanNumerals.fromRoman('MMVIII'); // 2008
```

## Tests
`npm install && npm test` to execute tests.

