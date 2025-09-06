// var array = [1, 2, 3, 4, 2, 4, 5, 6];
// [1, 2, 3, 4, 5, 6, 2, 4]
// Duplicate elements = [2, 4]

// Solution
function duplicate_elements(array){
    let sortedArray = array.sort().slice();
    let duplicateElements = [];

    // 0 < 8
    for(let i = 0; i < sortedArray.length - 1; i++){
        if(sortedArray[i + 1] === sortedArray[i]){
            duplicateElements.push(sortedArray[i]);
        }
    }

    return duplicateElements;
};

var array = [1, 2, 3, 4, 2, 4, 5, 6];
console.log(duplicate_elements(array));