class SnapshotArray {
    constructor(length) {
        // each element will be an array of [val, snapId] values
        this.elements = Array(length).fill(null).map(el => []);    // O(n)
        this.snapId = 0;
    }
    set(index, val) {   // O(1)
        this.elements[index].push([val, this.snapId]);
    }
    snap() {    // O(1)
        ++this.snapId;
        return this.snapId - 1;
    }
	// find the value for snapId <= snap_id. in case no value is found, return 0
    get(index, snap_id) {   // O(log(s))
        const element = this.elements[index];
        let left = 0,
            right = element.length - 1,
            mid, id = -1;
        
        // we use binary search
        while(left <= right) {
            mid = left + Math.floor((right - left) / 2);
            if(element[mid][1] <= snap_id) {
                id = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return id === -1 ? 0 : element[id][0];
    }
}