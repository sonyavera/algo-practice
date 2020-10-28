function bubbleSort(arr){
    let noSwaps;
    for(let i=arr.length; i>0; i--){
        for(let j=0; j<i-1; j++){
            if(arr[j]>arr[j+1]){
                const temp = arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr
}

console.log(bubbleSort([23,45,6,12,13]) )

//should be [6, 12, 13, 23, 45]