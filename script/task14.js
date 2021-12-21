// Create a queue data structure with O(1) insertion, deletion, and size calculation.

// A queue is a data structure that keeps track of data in the order in which it was entered. 
// Items are inserted into the back of the queue and removed from the front of the queue.

// A real-world analogy would be a line at a grocery store. 
// Everyone enters the line at the back. 
// The first person who enters will be the first person served.

// Common operations available to perform on a queue are:
// enqueue, or adding someone to the back of the queue
// dequeue, or removing someone from the front of the queue
// size, or checking the number of items in the queue

class Queue {
    constructor() {
        // Your code here
        this.data={};
        this.firstIndex=0;
        this.lastIndex=0;
    }
    
    enqueue(item) {
        // Your code here
        this.data[this.lastIndex]=item;
        this.lastIndex+=1;
    }
  
    dequeue() {
        // Your code here
        if (this.size=0){
            return undefined;
        }
        
        let elementToReturn=this.data[this.firstIndex]
        
        delete this.data[this.firstIndex];
        this.firstIndex+=1;
        return elementToReturn;
    }
  
    get size() {
        return this.lastIndex-this.firstIndex; 
    }
}

let myData=new Queue;
myData.enqueue("Vika");
console.log(myData.data, myData.size);

