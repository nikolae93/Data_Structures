// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                          Weighted Graph
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
class weightedGraph {
    constructor(){
        this.adjList={};
    }
    addVertex(ver){
        if(!this.adjList[ver]){this.adjList[ver]=[]};
    }
    addEdge(ver1,ver2,weight){
        this.adjList[ver1].push({node:ver2,weight:weight});
        this.adjList[ver2].push({node:ver1,weight:weight});
    }

    Dijkstra(start,finish){
        const nodes = new PriorityQueueSimple();
        var distances = {};
        var previous ={};
        let smallest;
        let path =[];

        // build up initial state
        for(let vertex in this.adjList){
            if(vertex===start){
                distances[vertex]=0;
                nodes.enqueue(vertex,0)
            }else {
                distances[vertex]=Infinity;
                nodes.enqueue(vertex,Infinity)
            }
            previous[vertex]=null;
        }
        
        // as long as there is something to visit
        while(nodes.values.length){
          smallest=nodes.dequeue().val;
          if(smallest===finish){
              // done
        while(previous[smallest]){
            path.push(smallest);
            smallest=previous[smallest];
        }
        break;
          }
          if(smallest || distances[smallest] !==Infinity){
              for(let ne in  this.adjList[smallest]){
                  // ne === neighbor   , find one
                let  nextNode=this.adjList[smallest][ne];
                  // calculate distance
                 let candidate=distances[smallest]+nextNode.weight;
                 let nextne= nextNode.node;
                 if(candidate<distances[nextne]){
         distances[nextne]=candidate;
         previous[nextne]=smallest;
         nodes.enqueue(nextne,candidate);
                 }

              }
          }

        }
        return path.concat(smallest).reverse();

    }
}

class PriorityQueueSimple {
    constructor(){
        this.values=[];
    }
    enqueue(val,priority){
     this.values.push({val,priority});
     this.sort();
    };
    dequeue(){
        return this.values.shift();
    };
    sort(){
        this.values.sort((a,b)=>a.priority-b.priority);
    }
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++