const students = [
  { name: "Alice", score: 92 },
  { name: "Bob", score: 80 },
  { name: "Charlie", score: 60 },
  { name: "Charlie", score: 98 },
];

function categorizeStudents(studentList) {
  const result = { A: [], B: [], C: [] };
  //   console.log(studentList[0].name);
  //   console.log(studentList[0].score);
  for (let i = 0; i < studentList.length; i++) {
    // console.log(studentList[i].score);
    if (studentList[i].score >= 90) {
      result.A.push(studentList[i].name);
    } else if (studentList[i].score >= 75) {
      result.B.push(studentList[i].name);
    } else {
      result.C.push(studentList[i].name);
    }
  }
  return result;
}

console.log(categorizeStudents(students));
