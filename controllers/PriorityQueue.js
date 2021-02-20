class PriorityQueue{
    constructor() {
        this.arr = []; 
    }

    size() {
        return this.arr.length;
    }

    isEmpty(){
        return this.arr.length===0;
    }

    add(val) {
       //console.log(this.arr);
        this.arr.push(val);
        this.upHeapify(this.arr.length - 1);
    }

    remove() {
      
        const max = this.arr[0];
        const temp = this.arr.pop();
        if(!this.isEmpty()) {
            this.arr[0] = temp;
            this.downHeapify(0);
        }
       
        return max;
    }

    upHeapify( childIdx ) {
        let pi = Math.floor((childIdx - 1) / 2);

        if ( pi >= 0 && this.arr[pi][0] < this.arr[childIdx][0]) {
            this.swap(pi, childIdx);
            this.upHeapify(pi);
        }

    }

    downHeapify( idx ) {
        let lci = 2 * idx + 1;
        let rci = 2 * idx + 2;
        
        let maxIdx = idx;

        if (lci < this.arr.length && this.arr[lci][0] > this.arr[idx][0]) maxIdx = lci;

        if (rci < this.arr.length && this.arr[rci][0] > this.arr[maxIdx][0]) maxIdx = rci;

        if (idx !== maxIdx) {
            this.swap(maxIdx, idx);
            this.downHeapify(maxIdx);
        } 

    }

    swap(i, j) {
        let temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }
    
}

module.exports.PriorityQueue = PriorityQueue


// const pq = new PriorityQueue();
// pq.add([10,1]);
// pq.add([103,2]);
// pq.add([1320,3]);
// pq.add([10,4]);
// pq.add([103,5]);
// pq.add([1022,6]);
// pq.add([1042,7]);
// pq.add([10,8]);
// pq.add([130,9]);
// pq.add([140,10]);
// pq.add([1320,11]);


// while (!pq.isEmpty()) {
//     console.log(pq.remove());
// }