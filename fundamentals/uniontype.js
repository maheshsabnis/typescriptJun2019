var data;
data = 100;
data = 'TypeScript';
data = true;
var anyArray = new Array();
anyArray.push("10");
anyArray.push(10);
var collection;
collection = [10, 20, 30];
collection.push(40);
collection = ["A", "B", "C"];
collection.push("D");
function printValues(values) {
    var sum;
    var numSum = 0;
    for (var i = 0; i < values.length; i++) {
        if (typeof (values[i]) === 'number') {
            console.log('dd');
            sum += parseInt(values[i].toString()).toString();
        }
        else {
            sum += values[i].toString();
        }
    }
    // console.log(numSum);
    console.log(sum);
}
printValues([10, 20, 30, 40]);
printValues(["A", "B", "C", "D"]);
