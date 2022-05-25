// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name) 
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name) {
    cats.pop()
}
function destructivelyRemoveFirstCat () {
    cats.shift()
}
function removeLastCat() {
    cats.pop()
}
const copyCats = [...cats, "Broom"];
function appendCat(name) {
return copyCats;
}
function prependCat(name) {
    return prependCat =[name, ...cats];
}   
function removeLastCat(name) {
    return cats.slice(0, cats.length -1);
 } 
 function removeFirstCat(name) {
     return cats.slice(1);
 }