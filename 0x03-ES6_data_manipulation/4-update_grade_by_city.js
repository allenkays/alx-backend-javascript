export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
      const grade = studentGrade ? studentGrade.grade : 'N/A';
      return { ...student, grade };
    });
}
