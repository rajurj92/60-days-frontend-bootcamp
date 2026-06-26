function reverseWords(str) {
  const result = str.split(" ").reverse().join(" ");
  return result;
}

console.log(reverseWords("Hello World"));
console.log(reverseWords("Javascript is fun"));
