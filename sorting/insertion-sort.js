function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let currentVal = arr[i];
        for(var j=i-1; j>=0 && arr[j]> currentVal; j--){
            console.log(arr)
            arr[j+1] = arr[j]
            console.log(arr)
        }
        arr[j+1] = currentVal;
        console.log(arr)
    }
    return arr;
}