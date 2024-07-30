module.exports = function toReadable (number) {
  const zeroToNine = [
		'zero', 'one', 'two', 
		'three', 'four', 'five', 
		'six', 'seven', 'eight', 
		'nine'
	];

	const tenToNineteen = [
		'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
		'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
	];

	const twentyToNinety = [
		'twenty', 'thirty', 'forty', 
		'fifty', 'sixty', 'seventy',
		'eighty', 'ninety' 
	];

	let result = '';

	if (number < 10) {
		result = zeroToNine[number];
	}

	if (number >= 10 && number < 20) {
		result = tenToNineteen[number - 10];
	}

	if (number >= 20 && number < 100) {
		const lastNum = toReadable(number % 10);
    if (lastNum !== 'zero') {
		  result = twentyToNinety[((number - number % 10) / 10) - 2] + ' ' + lastNum;
    }
    if (lastNum === 'zero') {
      result = twentyToNinety[((number - number % 10) / 10) - 2];
    }
	}

	if (number >= 100 && number < 1000) {
		const lastNum = toReadable(number % 100);
		if (lastNum !== 'zero') {
		  result = zeroToNine[Math.floor(number / 100)] + ' hundred ' + lastNum;
    }
    if (lastNum === 'zero') {
      result = zeroToNine[Math.floor(number / 100)] + ' hundred';
    }
	}
	
	return result;
}
