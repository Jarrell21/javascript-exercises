const sumAll = function(number1, number2) {
    if(number1 < 0 || number2 < 0 || 
        typeof number1 != typeof NaN|| 
        typeof number2 != typeof NaN){
        return 'ERROR';
    }

    if(number1 < number2){
        let sum = number1;
        for (let i = number1; i < number2; i++){
            let nextNum = i + 1;
            sum = sum + nextNum;
        }
        return sum;
    }
    else if(number1 > number2){
        let sum = number1;
        for (let i = number1; i > number2; i--){
            let nextNum = i - 1;
            sum = sum + nextNum;
        }
        return sum;
    }
    
    
};

// Do not edit below this line
module.exports = sumAll;
