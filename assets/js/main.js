const ulElement = document.createElement("ul");
let fizz = "fizz";
let buzz = "buzz";
let fizzbuzz = "fizzbuzz";


for (let i = 1; i < 101; i++) {
    const liElement = document.createElement("li");
    ulElement.append(liElement);
    
    if (i % 3 == 0 && i % 5 == 0) {
        i = "fizzbuzz";
    } else if (i % 3 == 0) {
        i = "fizz";
    } else if (i % 5 == 0){
        i = "buzz";
    }

    liElement.append(`${i}${fizz}${buzz}${fizzbuzz}`);
   
}

console.log(ulElement);