// CGPA calculator
const GRADE_POINTS = { 'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'F': 0 };

class Student {
  constructor(name, branch, mathsGpa, scienceGpa, socialGpa, englishGpa) {
    this.name = name;
    this.branch = branch;
    this.mathsGpa = mathsGpa;
    this.scienceGpa = scienceGpa;
    this.socialGpa = socialGpa;
    this.englishGpa = englishGpa;

    if (scienceGpa === undefined && socialGpa === undefined && englishGpa === undefined) {
            this.cgpa = mathsGpa; 
            this.mathsGpa = 0;
            this.scienceGpa = 0;
            this.socialGpa = 0;
            this.englishGpa = 0;
        } else {
            // Otherwise, store individual GPAs and calculate the CGPA later
            this.mathsGpa = mathsGpa || 0;
            this.scienceGpa = scienceGpa || 0;
            this.socialGpa = socialGpa || 0;
            this.englishGpa = englishGpa || 0;
            this.cgpa = this.calculateCgpa();
        }
  }

  

  displayStudent() {
    console.log(`Name of the Student is: ${this.name}`);
    console.log(`The overall cgpa is: ${this.cgpa}`);
    console.log(`He is from ${this.branch} Department`);
  }

  calculateCgpa() {
    const totalCredit =
      mathsCredit + sciencCredit + socialCredit + englishCredit;

    const totalPoints =
      mathsCredit * this.mathsGpa +
      sciencCredit * this.scienceGpa +
      socialCredit * this.socialGpa +
      englishCredit * this.englishGpa;

      return (totalPoints/ totalCredit).toFixed(2);
  }

  
}

let courseList = [];

