// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                            Doubly Linked List 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// node for doubly linked list
class Node2 {
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev= null;
    }
 }
 
// Main class

 class DoublyLinkedList {
     constructor(){
         this.head=null;
         this.tail = null ;
         this.length = 0; 
     }
 
     push(val){

         var node = new Node2(val);

       if(this.length===0){
           this.head= node;
           this.tail= node;
       } else{
           this.tail.next = node;
           node.prev = this.tail;
            this.tail = node ;
       }

       this.length++;
       return this ;
     }
 
     pop() {
         if(this.length===0){return  undefined;}

         var current = this.tail ;

         if(this.length===1){this.head=null; this.tail = null;}
         else{
           this.tail =  current.prev  ;
           this.tail.next = null ;
           current.prev = null;
         }
         this.length -- ;
         return current ;
     }
 
     shift(){
         if(this.length===0){return undefined;}

         var oldHead = this.head ;

         if(this.length===1){
             this.head=null;
             this.tail= null;
         } else{
             this.head=oldHead.next;
             this.head.prev=null;
             oldHead.next=null;
         }
         this.length--;
         return oldHead;
     }
 
     unshift(val){

         var node = new Node2(val);

         if(this.length===0){
             this.head= node;
             this.tail= node;
         } else{
             this.head.prev = node;
             node.next = this.head;
             this.head = node ;
         }
         
         this.length++;
         return this;
     }
 
     get(index){
         if(index<0 || index>=this.length){return null;}

         var count, current;

         if(index<= this.length/2){
              count =0;
          current = this.head;
         while(count !==index){
              current=current.next;
              count++; 
         }
         
         } else{
              count = this.length-1;
              current = this.tail ;

             while(count !== index){
                 current=current.prev;
                 count--;
 
             }
             
         }
         return current;
     }
 
     set(index,val){

     var foundNode =   this.get(index);

        if(foundNode != null){
            foundNode.val = val;
            return true ;
        }
        return false;
     }
 
     insert(index,val){

         if(index<0 || index>this.length){return false; }
         if(index===0){return this.unshift(val);}
         if(index===this.length){return this.push(val);}
 
         var newNode = new Node2(val);
         var prevNode = this.get(index-1);
         var afterNode = prevNode.next;
 
         prevNode.next = newNode;
         newNode.prev = prevNode;
 
         newNode.next = afterNode;
         afterNode.prev= newNode ;
         
         this.length++;
         return true;
     }
 
     remove(index){
         if(index>=this.length || index===0){return undefined;}
         if(index===0){return this.shift();}
         if(index===this.length-1){return this.pop();}
           
         var removedNode = this.get(index);

         removedNode.prev.next=removedNode.next;
         removedNode.next.prev = removedNode.prev;
         removedNode.next=null;
         removedNode.prev=null;

         this.length--;
         return removedNode;
 
     }
 
     reverse(){
         var currentNode = this.head;
          this.head = this.tail;
          
          while (currentNode !== null) {

       let prev = currentNode.prev;

       currentNode.prev = currentNode.next;
       currentNode.next = prev;
 
       if (currentNode.prev) {
         currentNode = currentNode.prev;
       } else {
         this.head = currentNode;
         break;
       }
     }
     return this;
     }
 
 }

 // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++