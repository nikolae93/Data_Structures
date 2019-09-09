// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                           Stack
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Node class for Stack class

class Node3 {
    constructor(val){
       this.val=val;
       this.next = null;
    }
}

// Main class

class Stack {
    constructor(){
        this.first=null;  // head
        this.last=null;   // tail
        this.size=0;
    }

    push(val){
        var node = new Node3(val);
        if(!this.first){this.first=node; this.last=node;}  
        else{
            var temp = this.first;
            this.first=node;
            this.first.next= temp;
        }
        this.size++;
        return this.size;
    }

    pop(){
        if(!this.first){return null;}
        var temp = this.first;

        if(this.first===this.last){
            this.last=null;
        }
    this.first=this.first.next;
    this.size--;
         return temp.val;
    }

}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++