/*
*Admission Managmeny System using JS Arrays concept
student directory
add stddents
remove stuents
list student
upadate studet
CRUD
These are the tasks we should do in AMS
*/
let data = [
    "John",
    "Emily",
    "Michael",
    "Sophia",
    "David",
    "Emma",
    "James",
    "Olivia",
    "Daniel",
    "Ava"
];
const addStudent =(n)=>{
data.push(n);
return "Successfully added";
}
const removeStudent =(n)=> {
    //first find the index value
    let i=data.indexOf(n);
    data.splice(i,1);
    return `Student ${n} remove succesfully`;
}
const listStudents =()=>{
    return data;
}
const updateStudent = (n,nn)=> {
    i =data.indexOf(n);
    data[i]=nn;
    return "Updated";
}
console.log(addStudent("Eshwar"));
console.log(removeStudent("Ava"));
console.log(listStudents());
console.log(updateStudent("Olivia","ej"));
console.log(listStudents());


