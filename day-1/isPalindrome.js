function isPalindrome(str) {
  const result = str.split("").reverse().join("");

  str === result ? true : false;
  //   if (str === result) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}

console.log(isPalindrome("frontend"));
console.log(isPalindrome("madam"));
