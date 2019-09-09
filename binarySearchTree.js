// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                         Binary Search Trees
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class NodeT{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
    }
    
    class BinarySearchTree{
        constructor(){
            this.root=null;
        }
    
        insert(val){

            var node = new NodeT(val);

            if(this.root===null){this.root=node; return this;}
            else{
                var curr= this.root;

                while(true){
                    if(val===curr.val){return undefined;}

                    if(val<curr.val){
                        if(curr.left===null){curr.left=node; return this;}
                        else{curr=curr.left;}
      } 
      else if(val>curr.val){ if(curr.right===null){curr.right=node;
        return this;} else{curr=curr.right;}  }
                }
            }
    
        }
    
         find(value){
             if(this.root === null){return false;}

             var curr = this.root;
             var found = false;

             while(!found && curr){
                 if(value < curr.val){curr=curr.left;}
                 else if(value > curr.val){
                   curr= curr.right;
                 } 
                 else{found=true;}
    
             }
             if(!found){return false;}
             return curr ;
         }
    
         BFS() {
             var data=[];
             var queue=[];
             var node = this.root;

             queue.push(node);

             while(queue.length){
               node =  queue.shift();
               data.push(node.val);
               if(node.left){queue.push(node.left);}
               if(node.right){queue.push(node.right);}
             }
             return data;
         }
    
         PreOrderDFS(){
             var data=[];
             var curr=this.root;
    
// it would be cleaner if I made the separate traverse function , 
// but I intentionally wanted to do it this way

             function traverse (node){
                 data.push(node.val);
                 if(node.left){traverse(node.left);}
                 if(node.right){traverse(node.right);}
             }

              traverse(curr);
             return data;
         }
    
         PostOrderDFS(){
            var data =[];
            var curr = this.root;
    
            function traverse(node){
                if(node.left){traverse(node.left);}
                if(node.right){traverse(node.right);}
                data.push(node.val);
            }
            
            traverse(curr);
            return data;
        }
    
        InOrderDFS(){
          var data =[];
          var curr=this.root;

          function traverse(node){
              if(node.left){traverse(node.left);}
              data.push(node.val);
              if(node.right){traverse(node.right);}
          }

          traverse(curr);
          return data;
        }
    
    }
    
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++