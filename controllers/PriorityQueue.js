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

        if ( pi >= 0 && this.arr[pi] < this.arr[childIdx]) {
            this.swap(pi, childIdx);
            this.upHeapify(pi);
        }

    }

    downHeapify( idx ) {
        let lci = 2 * idx + 1;
        let rci = 2 * idx + 2;
        
        let maxIdx = idx;

        if (lci < this.arr.length && this.arr[lci] > this.arr[idx]) maxIdx = lci;

        if (rci < this.arr.length && this.arr[rci] > this.arr[maxIdx]) maxIdx = rci;

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

// const pq = new PriorityQueue();
// pq.add(10);
// pq.add(20);
// pq.add(30);
// pq.add(40);
// pq.add(130);
// pq.add(102);
// pq.add(104);
// pq.add(150);
// pq.add(100);
// pq.add(105);
// pq.add(1002);
// pq.add(120);
// pq.add(110);



// while (!pq.isEmpty()) {
//     console.log(pq.remove());
// }