const GRADE_POINTS = {
  O: 10,
  "A+": 9,
  A: 8,
  "B+": 7,
  B: 6,
  C: 5,
  P: 4,
  F: 0,
};

class Student {
  constructor(name, branch, subjects) {
    this.name = name;
    this.branch = branch;
    this.subjects = subjects;
    this.cgpa = this.calculateCgpa();
  }

  calculateCgpa() {
    let totalCredits = 0;
    let totalPoints = 0;

    for (const subject of this.subjects) {
      const grade_point = GRADE_POINTS[subject.grade];

      totalCredits += subject.credit;
      totalPoints += subject.credit * subject * grade_point;
    }
    return (totalPoints / totalCredits).toFixed(2);
  }
}
