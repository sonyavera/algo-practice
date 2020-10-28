function linearSearch(arr, val){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === val) return i
    }
    return -1
  }

  arr = [1, 2, 3]

  linearSearch(arr, 3)