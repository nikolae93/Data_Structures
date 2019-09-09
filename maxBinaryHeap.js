// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                         Max Binary Heap
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class MaxBinaryHeap {
    constructor(){
        this.values=[];
    }

    insert(el){
        this.values.push(el);
        this.bubbleUp();
    }

    bubbleUp(){
      let index=  this.values.length-1;
        let element = this.values[index];
        while(index>0){
            let parentI = Math.floor((index-1)/2);
            let parent = this.values[parentI];
            if(element<=parent){break;}
            
                this.values[parentI]=element;
                this.values[index]= parent;
                index=parentI;
            
        }
    }

   extractMax (){
     const max = this.values[0];
     const end = this.values.pop();

     if(this.values.length>0){
        this.values[0]=end;
        // bubble down proccess
        this.sinkDown();
     }
     return max;

   }
   sinkDown(){
       let index = 0;
       const length = this.values.length;
       const element = this.values[0];

       while(true){
           let leftIndex= 2*index+1;
           let rightIndex=2*index+2;
           let left,right;
           let swap= null;

           if(leftIndex<length){
               left = this.values[leftIndex] ;
              if (left > element){swap=leftIndex;}
            }

            if(rightIndex<length){
                right=this.values[rightIndex];
                if((swap===null && right>element) || (swap !==null && right>left)){
                     swap = rightIndex;         
                }
            }

           if(swap===null){break;}
           this.values[index]=this.values[swap];
           this.values[swap]= element;
           index=swap;
       }

   }

}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++