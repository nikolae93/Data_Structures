// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                            Singly Linked List 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Node {
   constructor (val){
        this.val=val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor (){
        this.length=0;
        this.head =null;
        this.tail=null;
    }

    push(val){
        
      var node = new Node(val);
      
      if( !this.head ){
          this.head=node;
         this.tail=this.head;} 
      else{
        this.tail.next = node ;
        this.tail = node ;
      }
      this.length++;
      return this;
    }

    pop () {

   if(!this.head){ return undefined ;  }

   var current = this.head ;
   var newTail = current ;

   while(current.next){
       newTail= current;
       current = current.next; 
   }
     this.tail = newTail ;
     this.tail.next =null;
     this.length--;

     if(this.length===0){
         this.head=null;
         this.tail=null;
     }

     return current ;
    }

    shift(){
      if(!this.head){
          return undefined ;
      }  

      var currentHead = this.head ;
      this.head = currentHead.next ;
      this.length--;

      if(this.length===0){
        this.tail=null;
    }
      return currentHead ;

    }

    unshift (val) {

        let node = new Node(val);

        if( !this.head ){
            this.head=node;
           this.tail=this.head;} 
        else{
            node.next=this.head ;
            this.head = node ;
        }
        this.length++ ;
        return this ;
    }

    get(index){
       if(index<0 || index>=this.length){return null;}

       var count =0; 
       var current =this.head;

       while(count !==index){
        current = current.next;
           count++ ;
       }
      return current ;
    }

    set ( index , val ) {
        if(index<0 || index>=this.length){return false;}
        var count =0; var current =this.head;
        while(count !==index){
            current = current.next;
               count++ ;
           }
        current.val = val ;
        return true;    
    }

    insert (index,val){

        if(index<0 || index>this.length){return false;}
        if(index===this.length){return !!this.push(val);}
        if(index===0){return !!this.unshift(val);}

        var node = new Node(val);
   var previous = this.get(index-1);
   var temp = previous.next;

   previous.next = node;
   node.next = temp ;
   this.length++;
   return true;    
    }

    remove(index){
        if(index<0 || index>=this.length){return undefined;}
        if(index===0){ return this.shift();  }
        if(index === this.length-1){return this.pop(); }

        var previous = this.get(index-1);
        var removed = previous.next;
        previous.next = removed.next;
        this.length--;
        return removed ;
    }

    reverse(){
         var node = this.head;
         this.head = this.tail;
         this.tail = node ;
          var previous = null;
          var next = null;

          for(var i=0; i<this.length;i++){
           next = node.next ;
           node.next = previous;
           previous= node;
           node = next ;
          }

         return this ;
    }

    // opcioni pomocni metod
    // print is more like a helper method, it is not essential
    print(){
        var arr =[];
        var current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next ;
        }
        console.log(arr);
    }

}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++