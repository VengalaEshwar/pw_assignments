let set = new Set()
for(i=0;i<10;i++) {
    set.add(Math.trunc(Math.random()*10))
}
console.log(set.values());
let map = new Map()
a=[1,2,3,4,5,6]
for(i of set)
{
    map.set(i,i**2)
}
console.log(map.entries());