function reverseString(str) {
  //using inbuilt methods
  //   const result = str.split("").reverse().join("");
  //   return result;
  let strArr = str.split("");
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    let temp = strArr[start];
    strArr[start] = strArr[end];
    strArr[end] = temp;
    start++;
    end--;
  }
  return strArr.join("");
}

console.log(reverseString("frontend"));
