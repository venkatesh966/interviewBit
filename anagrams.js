function anagrams(input) {
let array= input;
let splitArray = []
for(let i = 0;i<array.length;i++) {
    let j=0
    splitArray[i]= array[i].split("");
}

let outputArray = checkExists(splitArray)

return outputArray
}

function checkExists(splitArray) {
    let indexArray = []
    for(let i=0;i<splitArray.length;i++) {
        for(let j=i+1;j<splitArray.length;j++){
            var value = compare(splitArray[i],splitArray[j])
            if(value) {
                let k = i +'' +j
                indexArray[i] = k
            }
    }
  
}
return indexArray
}
function compare(array,array1) {
    let count=0
    array.forEach(element => {
        if(array1.includes(element)) {
            count=count+1
        }
        
    });
    if(count == array1.length) {
return true
    }
    
}
var output = anagrams(['rasp','cat','tac','psar'])
console.log(output)