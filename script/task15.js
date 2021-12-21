// Create a Queue Using Two Stacks
// This is a fairly common interview question.

// Write a function that creates a queue using two stacks. 
// Besides these two stacks, you may not use any additional 
// data structures in your implementation. 
// It should have the methods enqueue, dequeue, and size.

class Queue {
    constructor() {
        this._stack1 = [];
        this._stack2 = [];
    }
    
    enqueue(item) {
        this._stack1=[...this._stack1, item];
    }
    
    dequeue() {
        if (this._stack2.length!==0){
           return this._stack2.pop();
        }
        else if (this._stack1.length!==0){
            for(let i=0;i<this._stack1.length; i+=1){
                this._stack2.push(this._stack1.pop())
            }
            return this._stack2.pop();
        }
       return undefined;
    }
    
    get size() {
       return this._stack1.length+this._stack2.length;
    }
}

let myData=new Queue;
myData.enqueue("Vika");
myData.enqueue("Nika");
console.log(myData.dequeue());