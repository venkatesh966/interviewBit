function sumArray(array, target) {
    const arr = sort(array);
    const arrLength = arr.length
    let sumValueArray = [];
    let value = 0
    for (let i = 0; i < arrLength; i++) {
        for (let j = i + 1; j < arrLength; j++) {
            for (let k = j + 1; k < arrLength; k++) {
                if (target == arr[i] + arr[j] + arr[k]) {
                    return target
                } else if (target < arr[i] + arr[j] + arr[k]) {
                    break;
                } else {
                    sumValueArray[value] = arr[i] + arr[j] + arr[k];
                    value = value + 1;
                }
            }
        }
    }
    var sortedArray = sort(sumValueArray)
    return sortedArray[sortedArray.length-1]
}
function sort(array) {
    var flag = false;
    while (!flag) {
        flag = true;
        for (let i = 1; i < array.length; i = i + 1) {
            if (array[i - 1] > array[i]) {
                flag = false;
                let temp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = temp;
            }
        }
    }

    return array;
}



var array = [ -5, 1, 4, -7, 10, -7, 0, 7, 3, 0, -2, -5, -3, -6, 4, -7, -8, 0, 4, 9, 4, 1, -8, -6, -6, 0, -9, 5, 3, -9, -5, -9, 6, 3, 8, -10, 1, -2, 2, 1, -9, 2, -3, 9, 9, -10, 0, -9, -2, 7, 0, -4, -3, 1, 6, -3 ]

var val = sumArray(array, -1)
console.log(val)