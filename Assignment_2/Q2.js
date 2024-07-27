let ages=[19,22,19,24,25,26,25,25,24];
ages.sort();
console.log("sorted array",ages);
//min and max element
console.log(ages[0] ," ",ages[ages.length-1]);
//median 
let l=ages.length;
console.log(l%2===0 ? (ages[l/2]+ages[(l/2)-1])/2 : ages[(l-1)/2]);

let sum=0;
for(i=0;i<l;i++) {
    sum+=ages[i];
}
//average
console.log(sum/l);
//range
console.log(ages[0] ," ",ages[ages.length-1]);
//compare of min-avg,max-avg
console.log(Math.abs(ages[0]-(sum/l))<Math.abs(ages[l-1]-(sum/l)));