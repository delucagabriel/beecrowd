
module.exports=function seqSecrt(file) {
    const input = require('fs').readFileSync(file, 'utf8');
    const lines = input.split('\n');
    
    const len = parseInt(lines.shift());
    let res = 0;
    for(let i = 0; i < len; i++) {
        const current = parseInt(lines[i]);
        const previous = parseInt(lines[i - 1]) || 0;
        if(current !== previous){
            res++;
        }
    }
    console.log(res);
    return res;
}