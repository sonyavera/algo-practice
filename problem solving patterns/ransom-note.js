var canConstruct = function(ransomNote, magazine) {
    let hM = {};
    for(i = 0; i < ransomNote.length; i++){
        if(!(ransomNote[i] in hM)){
             hM[ransomNote[i]] = 0
        }
         hM[ransomNote[i]] +=1
    }
    for(j = 0; j < magazine.length; j++){
        if(magazine[j] in hM){
            hM[magazine[j]] -=1
            if(hM[magazine[j]] === 0){
                delete hM[magazine[j]]
            }
        }
    }
    return Object.keys(hM).length === 0
};