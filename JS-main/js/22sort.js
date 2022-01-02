let myarray=[7, 40, 300];
myarray.sort();
console.log(myarray);

let myarray=["Bob", "Bully", "Amy"];
myarray.reverse();
console.log(myarray);


let  a =[1, 23, 100, 3].sort(function(a, b){
    if (a > b)
        return 1;
    if (a < b)
        return -1;
    return 0
});
console.log(a);

const arr = [1,4,6,3,0,3,0,1].sort(function(a,b){
if (a > b)
     return 1;
if (a < b)
     return -1;
return 0
});
console.log(arr);


let array = [6,2,3,7,5,4,1,43,24,543];
function bubbleSort(arr) {
    for(let j=0; j < arr.length; j++) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i]>arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }      
    return arr;
}
console.log(bubbleSort(array));