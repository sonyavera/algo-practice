function processData(input) {
    const numQueries = parseInt(input.split(/\r?\n/)[0])
    let stack1 = []
    let stack2 = []
    const inputArgs = input.split(/\r?\n/)
    inputArgs.shift()
    for(i=0; i<inputArgs.length; i++){
        const query = inputArgs[i].split(" ")
        if(query[0]==="1"){
            queue(query[1], stack1, stack2)
        }
        if(query[0]==='2'){
            dequeue(stack1, stack2)
        }
        if(query[0]==='3'){
            peek(stack1, stack2)
        }
    }
} 

function dequeue(stack1, stack2){
    if(stack2.length === 0){
        while(stack1.length !== 0){
            stack2.push(stack1.pop())
        }
        return(stack2.pop())
    }else{
        return(stack2.pop())
    }
}

function peek(stack1, stack2){
    if(stack2.length ===0){
        while(stack1.length !==0){
        stack2.push(stack1.pop())
        }
    }
    console.log(stack2[stack2.length-1])
}

function queue(ele, stack1, stack2){
    stack1.push(ele)
}