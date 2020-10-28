//piece of data - val
// reference to next node - next


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    pop(){
        if(!this.head) return undefined
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }


    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode 
        }
        this.length++
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, newVal){
        let foundNode = this.get(index)
        if(foundNode){
            foundNode.value = newVal;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length ) return false;
        if(index === length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        let newNode = new Node(val);
        var previous = this.get(index-1);
        let temp = previous.next;
        previous.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return null;
        if(index===0) return this.shift();
        if(index===this.length-1) return this.pop();
        let previousNode = this.get(index-1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let previous = null;
        for(let i =0; i< this.length; i++){
            next = node.next
            node.next = prev;
            node = next;
        }
        return this;
    }

    print(){
        let arr = []
        let current = this.head;
        while(current){
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr);
    }



}


var list = new SinglyLinkedList()
list.push("hello")
list.push("goodbye")
list.push("!")
list.push("<3")
list.push(": )")
// console.log(list.pop())
// console.log(list.pop())
// console.log(list.pop())
// console.log(list.head)
// console.log('shift', list.shift())
// console.log(list.head)
// console.log(list.unshift(5))
// console.log(list.get(0))
console.log(list.print())
