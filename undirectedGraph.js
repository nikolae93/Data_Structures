// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                          Graphs (adjecency list)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// undirected graph
class Graph {
    constructor(){
        this.adjList ={};
    }

    addVertex(name){
      if(!this.adjList[name]){this.adjList[name]=[];}
    }

    addEdge(ver1,ver2){
        if(!this.adjList[ver1] || !this.adjList[ver2]){return undefined;}
        this.adjList[ver1].push(ver2);
        this.adjList[ver2].push(ver1);
        // da je directed bilo bi veza samo u jednom pravcu
    }
    removeEdge(ver1,ver2){
        if(!this.adjList[ver1] || !this.adjList[ver2]){return undefined;}
        this.adjList[ver1] = this.adjList[ver1].filter(v => v !== ver2);
        this.adjList[ver2] = this.adjList[ver2].filter(v => v !== ver1);
    }
    removeVertex(ver){
        while(this.adjList[ver].length){
         const adjVertex = this.adjList[ver].pop();
         this.removeEdge(ver,adjVertex);
        }
        delete this.adjList[ver];
    }
    DFS_recursive(start){
        const result =[];
        const visited ={};
        const adjList=this.adjList;

        (function dfs (vertex){
            if(!vertex){return null;}
            visited[vertex]=true;
            result.push(vertex);

   adjList[vertex].forEach(ne=>{
       if(!visited[ne]){
           return dfs(ne);
       }
   });
        })(start);
        return result;
    }

    DFS_iterative(start){
              var stack =[start];
              var visited={};
              var result=[];
              let curr

              visited[start]=true;
              while(stack.length){
                 curr= stack.pop();
                  result.push(curr);

    this.adjList[curr].forEach(ne=>{
        if(!visited[ne]){
            visited[ne]=true;
            stack.push(ne);
        }
    });
              }
   return result;
    }

    BFS_iterative (start){
      const q=[start];
      const result=[];
      const visited={};
      let curr;

  visited[start]=true;
      while(q.length){
       curr=q.shift();
       result.push(curr);
       this.adjList[curr].forEach(ne=>{
if(!visited[ne]){visited[ne]=true;q.push(ne);}
       });
      }
    return  result;
    }
    
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++