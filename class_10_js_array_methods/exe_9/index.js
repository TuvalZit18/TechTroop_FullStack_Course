let studentScores = [
  92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81,
];

const gradeCount = studentScores.reduce(
  (acc, score) => {
    if (score >= 90 && score <= 100) {
      acc["A"]++;
    }
    if (score >= 80 && score <= 89) {
      acc["B"]++;
    }
    if (score >= 70 && score <= 79) {
      acc["C"]++;
    }
    if (score < 70) {
      acc["F"]++;
    }
    return acc;
  },
  { A: 0, B: 0, C: 0, F: 0 },
);
console.log("🚀 ~ gradeCount:", gradeCount);
