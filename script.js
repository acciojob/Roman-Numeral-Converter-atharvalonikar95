function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
  const values = [
    obj[0][1], 900,
    obj[1][1], 400,
    obj[2][1], 90,
    obj[3][1], 40,
    obj[4][1], 9,
    obj[5][1], 4,
    obj[6][1]
  ];

  const symbols = [
    obj[0][0], "CM",
    obj[1][0], "CD",
    obj[2][0], "XC",
    obj[3][0], "XL",
    obj[4][0], "IX",
    obj[5][0], "IV",
    obj[6][0]
  ];

  let result = "";

  // Forward greedy
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += symbols[i];
      num -= values[i];
    }
  }

  return result;
	
} 
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
