
let animals: string[] = ["dog", "cat", "rabbit"];

console.log("Animals:");
for (let animal of animals) {
    console.log(animal);
}

console.log("\nStatements about each animal");
for (const animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

console.log("Common characteristic:");
console.log("Any of these animals would make a great pet!");
