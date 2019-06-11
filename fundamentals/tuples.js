var emp;
emp = [1, 'A'];
emp.push(2, 'B');
// emp.forEach((v,i) => {
//     console.log(`${i} ${v}`);
// });
var newemp; // declaration
newemp = [0, {}]; // instantiating or set default value
newemp.push(1, { EmpNo: 101, EmpName: 'A' });
newemp.push(2, { EmpNo: 102, EmpName: 'B' });
newemp.push(3, { EmpNo: 103, EmpName: 'C' });
newemp.push(4, { EmpNo: 104, EmpName: 'D' });
console.log(JSON.stringify(newemp));
