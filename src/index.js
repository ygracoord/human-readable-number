module.exports = function toReadable (number) {
  let firstGroup = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let secondGroup = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let thirdGroup = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number == 0) return 'zero';
  if (number < 10) return firstGroup[number];
  if (number >= 10 && number < 20) return secondGroup[number%10];
  if (number >= 20 && number < 100) {
      if (number % 10 == 0) return thirdGroup[number / 10];
      else return thirdGroup[Math.trunc(number / 10)] + ' ' + firstGroup[number%10];
  }
  if (number >= 100 && number < 1000) {
      if (number % 100 == 0) return firstGroup[number / 100] + ' hundred';
      else if (Math.trunc(number%100/10) == 1) return firstGroup[Math.trunc(number / 100)] + ' hundred ' + secondGroup[number%10];
      else if (Math.trunc(number%100/10) == 0) return firstGroup[Math.trunc(number / 100)] + ' hundred ' + firstGroup[number%10];
      else return `${firstGroup[Math.trunc(number/100)]} hundred ${thirdGroup[Math.trunc(number%100/10)]} ${firstGroup[number%10]}`.trim();
  }
}
