const removeFromArray = function(array, elem1, 
                            elem2, elem3, elem4) {

    for(let i = 0; i < array.length; i++){
        if(elem1 === array[i]){
            const spliced = array.splice(i, 1);           
        }
    }

    for(let i = 0; i < array.length; i++){

        if(elem2 === array[i]){
            const spliced = array.splice(i, 1);
        }
    }

    for(let i = 0; i < array.length; i++){

        if(elem3 === array[i]){
            const spliced = array.splice(i, 1);
        }
    }
    
    for(let i = 0; i < array.length; i++){

        if(elem4 === array[i]){
            const spliced = array.splice(i, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
