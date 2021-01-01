class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }else{
            let current = this.root;
            while(true){
                if(value  === current.value) return undefined;
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                }else if (value>current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right
                }
            }

        }
    }

    find(value){
        if(this.root === null) return false;
        let current = this.root, 
            found = false;
        while(!found && current){
            if(value < current.value){
                current = current.left
            }else if(value > current.value){
                current = current.right
            }else{
                found = true;
            }
            if(!found) return undefined;
            return current;
        }
    }

    BFS(){
        let data = [],
            queue = 0;
        
        queue.push(this.root);
        while(queue.length){
            let node = queue.shift()
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    
        return data;
        
    
    }


}




var tree = new BinarySearchTree();
// tree.root = new Node(10)
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left = new Node(9);
tree.insert(10)
tree.insert(5)
console.log(tree)
tree.insert(13)
console.log(tree)
tree.insert(2)
console.log(tree)
tree.insert(10)