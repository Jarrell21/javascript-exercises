const fibonacci = function(num) {
    if(num < 0) return 'OOPS';
    if(num === 0) return 0;
    if(num == 1 || num == 2) return 1;
    let currentNum = 1;
    let nextNum = 1;
    let sum = 1;
    let fiboArray = [currentNum, nextNum];
    for(let i = 0; i < num-2; i++){
        currentNum = nextNum;
        nextNum = sum;
        sum = currentNum+nextNum;
        fiboArray.push(sum);
    }

    return fiboArray[num-1]; 
};

// Do not edit below this line
module.exports = fibonacci;
