//dob bot the dob should be less then currect date
function dob(da) {
    let d=new Date(da);
    let p=new Date();
    return d>p ?"Invalid Date":"Valid Date";  
}
console.log(dob('2025-01-01'));