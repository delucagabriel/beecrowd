
module.exports=function notasDasProvas(file) {
    const input = require('fs').readFileSync(file, 'utf8');
    const lines = input.split('\n');
    const grades = [
        {grade: 'E', min: 0, max: 0}, 
        {grade: 'D', min: 1, max: 35}, 
        {grade: 'C', min: 36, max: 60}, 
        {grade: 'B', min: 61, max: 85}, 
        {grade: 'A', min: 86, max: 100}, 
    ];
    const score = parseInt(lines.shift());
    const res = grades
        .find(grade => grade.min <= score && grade.max >= score)
        .grade;
    console.log(res);
    return res;
}