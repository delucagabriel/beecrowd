
module.exports=function tacografo(file) {
    const input = require('fs').readFileSync(file, 'utf8');    
    const lines = parseInt(input);
    for(let line = 0; line < lines; line++) {
        let first = line + 1;
        let second = first * first;
        let third = second * first;
        for (let row = 0; row < 3; row++) {
            second = first * first;
            third = second * first;
        }
        console.log(first, second, third);
    }
}