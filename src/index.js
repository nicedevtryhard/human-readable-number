module.exports = function toReadable (number) {
    number = number.toString();
    const numbers = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    };
  let digit = number.charAt(1) + number.charAt(2);
    if(number === '0') {
        return "zero";
    } else if(number.length === 1) {
        return `${numbers[number]}`;
    } else if(number.length === 2 && number.charAt(0) !== '1' && number.charAt(1) === '0') {
        return `${numbers[number]}`;
    } else if (number.length === 2 && number.charAt(0) !== '1' && number.charAt(1) !== '0') { 
        return `${numbers[number[0] + 0]} ${numbers[number[1]]}`;
    } else if(number.length === 2 && number.charAt(0) === '1' && number.charAt(1) !== '0'){
      return `${numbers[number]}`;
    } else if(number.length === 2 && number.charAt(0) === '1' && number.charAt(1) === '0'){
        return`${numbers[number]}`;
    } else if(number.length === 3 && number.charAt(1) !=='0' && number.charAt(1) !== '1' && number.charAt(2) !== '0') {
      return `${numbers[number[0]]} hundred ${numbers[number[1]+0]} ${numbers[number[2]]}`
    } else if(number.length === 3 && number.charAt(1)=== '1' ) {
      return `${numbers[number[0]]} hundred ${numbers[digit]}`
    }
    else if(number.length === 3 && number.charAt(1) !=='0') {
      return `${numbers[number[0]]} hundred ${numbers[number[1]+0]}`
    } else if(number.length === 3 && number.charAt(1) === '0' && number.charAt(2) !== '0') {
      return `${numbers[number[0]]} hundred ${numbers[number[2]]}`
    } else {
      return `${numbers[number[0]]} hundred`;
    }
}
