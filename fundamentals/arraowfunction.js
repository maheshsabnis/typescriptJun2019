var data = [10, 20, 30];
function print(n, i) {
    console.log("Element at index " + i + " is " + n);
}
// data.forEach(print);
data.forEach(function (n, i) {
    console.log("Element at index " + i + " is " + n);
});
