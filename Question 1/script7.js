// Function to right rotate array
function rightRotate(arr, k) {
    const n = arr.length;
    
    // If rotation is greater than size of array
    k = k % n;

    for (let i = 0; i < n; i++) {
        if (i < k) {
            // Printing rightmost kth elements
            process.stdout.write(arr[n + i - k] + " ");
        } else {
            // Prints array after 'k' elements
            process.stdout.write(arr[i - k] + " ");
        }
    }
    process.stdout.write("\n");
}

// Driver code
const Array = [1, 2, 3, 4, 5];
const K = 2;

rightRotate(Array, K);
