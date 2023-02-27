var myMap = new Map();
myMap.set("name", "Mauricio");
myMap.set("stack", "HTML, CSS, JS");
console.log(myMap);

const name = myMap.get("name");
console.log(name);

console.log(myMap.size);
console.log(myMap.has("name"));

// myMap.clear();
// console.log(myMap.size);

for (var chave of myMap.keys()) {
    console.log(chave);
}

for (var values of myMap.values()) {
    console.log(values);
}

for (var entries of myMap.entries()) {
    console.log(entries);
}

for (var [values, entries] of myMap.entries()) {
    console.log(`${values}: ${entries}`);
}

myMap.delete("stack");
console.log(myMap);

/* =========================================================================================================================================================================================================== */

const CPFs = new Set();
CPFs.add('34335602189')
CPFs.add('96890187601')
CPFs.add('63327862567')
CPFs.add('37076685175')
CPFs.add('71808857119')

console.log(CPFs);
console.log(CPFs.keys());
console.log(CPFs.values());

CPFs.forEach((value) => {
    console.log(value);
})

//Remove item duplicado de uma Array
const array = ['Jose', 'Maria', 'Carlos', 'Sofia', 'Maria'];
const newArray = new Set([...array]);
const noDuplicate = [...newArray];

console.log(newArray);
console.log(noDuplicate);