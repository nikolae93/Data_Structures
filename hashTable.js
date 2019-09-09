// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                          Hash tables
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Basic far from optimal function
function HashBasic (key,arrLength){
    let total =0;
    for (let char of key) {
        // dodaje "a" 1 , "b" 2 "c" 3
        let value = char.charCodeAt(0)-96;
        total = (total * value) % arrLength;
    }
    return total ;
}

// Improved one (with prime numbers)
function HashBetter (key , arrLength){
    let total =0;
   let prime =31;

   for(let i=0;i<Math.min(key.length,100);i++){
       let char=key[i];
       let value = char.charCodeAt(0)-96;
       total = (total *prime+value) % arrLength;
   }
   return total;
}

// Main class 

class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size);
    }

    hash(key) {
        let total =0;
        let prime =31 ;

        for (let i=0; i<Math.min(key.length,100);i++){
            let char = key[i];
            let value = char.charCodeAt(0)-96;
            total = (total*prime +value) % this.keyMap.length;

        }
        return total ;
    }

    set(key,value){
     var index= this.hash(key);

     if(!this.keyMap[index]){
         this.keyMap[index] =[];
     }
     this.keyMap[index].push([key,value]);
    }

    get(key){
     var index = this.hash(key);

     if(this.keyMap[index]){

       for(let i=0; i<this.keyMap[index].length;i++){
           if(this.keyMap[index][i][0]===key){
               return this.keyMap[index][i] ;
           }
       }
     }
     return undefined;
    }

    values(){
        var valuesArr =[];
        for(var i=0;i<this.keyMap.length;i++){
            if(this.keyMap[i]){

                 for(let j=0;j<this.keyMap[i].length;j++){
             if(!valuesArr.includes(this.keyMap[i][j][1])){
                valuesArr.push(this.keyMap[i][j][1])
             }
                     
                 }

            }
        }
        return valuesArr;
    }

    keys(){
        var keysArr =[];
        for(var i=0;i<this.keyMap.length;i++){
            if(this.keyMap[i]){

                 for(let j=0;j<this.keyMap[i].length;j++){
                    keysArr.push(this.keyMap[i][j][0]);
                     
                 }

            }
        }
        return keysArr;
    }

}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++