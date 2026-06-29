function isPalindrome(str) {
  const result = str.split("").reverse().join("");

  return str === result;
  // if (str === result) {
  //   return true;
  // } else {
  //   return false;
  // }
}

console.log(isPalindrome("frontend"));
console.log(isPalindrome("madam"));
