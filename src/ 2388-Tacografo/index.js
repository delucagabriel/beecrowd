
module.exports=function tacografo(file) {
    const input = require('fs').readFileSync(file, 'utf8');
    const lines = input.split('\n');
    
    const len = parseInt(lines.shift());
    let res = 0;
    for(let i = 0; i < len; i++) {
        const [a, b] = lines.shift().split(' ');
        res += parseInt(a) * parseInt(b);
    }
    console.log(res);
    return res;
}