let count=0;

let countEl= document.getElementById("count-el");
console.log(countEl);

let decreaseEl = document.getElementById("decrease-el");
console.log(decreaseEl);

let resetEl= document.getElementById("reset-el");
console.log(resetEl);

let increaseEl = document.getElementById("increase-el");
console.log(increaseEl);

//Decrease
function decrease(){
    count= count-1;
    countEl.innerText=count;
    console.log(count);
}
decrease();

//Reset
function reset(){
    count= 0;
    countEl.innerText= count;
    console.log(count);
}
reset();

//Increase
function increase(){
    count+= 1;
    countEl.innerText= count;
    console.log(count);
}
increase();