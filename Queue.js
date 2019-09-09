// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                           Queue
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Node4 {
    constructor(val){
      this.val=val;
      this.next=null;
    }
}

// dodajemo na kraju a sa pocetka oduzimamo

class Queue {
    constructor(){
        this.first=null;
        this.last = null;
        this.size=0;
    }

    enqueue(val){
        var node = new Node4(val);

        if(!this.first){this.first=node;this.last=node;} 
        else {
            this.last.next=node;
            this.last = node;
        }
        this.size++;
        return this.size;
    }

    dequeue(){
        if(!this.first){return null;}

        var temp = this.first;

        if(this.first===this.last){this.last=null;}
        this.first=this.first.next;
        this.size--;
        return temp.val;
        
    }
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++