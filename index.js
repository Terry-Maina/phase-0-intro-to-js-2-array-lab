// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function array(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

//push() used to add an item to the end of an array

function destructivelyAppendCat(name){
    cats.push('Ralph');
}

function destructivelyPrependCat(){
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    let copyOfCat = [...cats, "Broom"]
    return copyOfCat

}
function prependCat(name){
    let prepEnd = ["Arnold", ...cats]
    return prepEnd
}
function removeLastCat(){
    let removeLastCat = cats.slice(0,2)
    return removeLastCat
}
function removeFirstCat(){
    let removeFirstCat= cats.slice(1)
    return removeFirstCat
}
