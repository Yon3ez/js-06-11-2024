//2

function sumTwoNumbers(a, b) {
	return a + b;
}
console.log(sumTwoNumbers(3, 7));

//3

function concatenateStrings(str1, str2) {
	return str1 + str2;
}
console.log(concatenateStrings("Hello", "World"));
console.log(concatenateStrings("123", "456"));

//4

function isEven(n) {
	return n % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));

//5

function rectangleArea(width, height) {
	return width * height;
}
console.log(rectangleArea(4, 5));

//6

function isPositive(n) {
	if (n >= 0) {
		return true;
	} else {
		return false;
	}
}
console.log(isPositive(-1));
console.log(isPositive(0));
console.log(isPositive(5));

//7

function minTwoNumbers(a, b) {
	return Math.min(a, b);
}
console.log(minTwoNumbers(4, 12));

//8

function isPalindrome(str) {
	if (str === str.split("").reverse().join("")) {
		return true;
	} else {
		return false;
	}
}
console.log(isPalindrome("level"));

//9

function maxThreeNumbers(a, b, c) {
	return Math.max(a, b, c);
}
console.log(maxThreeNumbers(4, 8, 78));

//10

function multiplyTwoNumbers(a, b) {
    return a * b;
  }
  console.log(multiplyTwoNumbers(4, 8))