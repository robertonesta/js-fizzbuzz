const ulElement = document.createElemente("ul");
let fizz;
let buzz;
let fizzbuzz;
const liElement = document.createElement("li")
for (let i = 1; i < 101; i++) {

    if (i % 3 == 0) {
        i = "fizz";
    } else if (i % 5 == 0) {
        i = "buzz";
    } else if (i % 3 == 0 && i % 5 == 0){
        i = "fizzbuzz";
    }

    liElement.append(i);
    ulElement.append(liElement)
}

console.log(ulElement);