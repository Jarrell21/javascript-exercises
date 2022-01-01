const palindromes = function (str) {
    const strLowerCase = str.toLowerCase();
    const strNoSymbols = strLowerCase.replace(/!/g, '').replace(/ /g, '')
                            .replace(/,/g, '').replace('.', '');
    const strToArray = strNoSymbols.split('');
    const reverseArrayToString = strToArray.reverse().join('');
    if(strNoSymbols === reverseArrayToString){
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = palindromes;
