function averagePair(ints, avg){
        let start = 0;
        let end = ints.length -1;
        if(ints.length < 2){
            return false;
        }
        
        while(start<end){
            let currentAvg= ints[start] + ints[end] / 2;
            if(currentAvg === avg) return true;
            if(currentAvg < avg ) start++;
            if(currentAvg > avg) end--;
         }
         return false;
  }