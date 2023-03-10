const ulElement = document.createElement("ul");
let fizz = "fizz";
let buzz = "buzz";
let fizzbuzz = "fizzbuzz";


for (let i = 1; i < 101; i++) {
    const liElement = document.createElement("li")
    ulElement.append(liElement)

    if (i % 3 == 0 && i % 5 == 0) {
        liElement.innerHTML = `${fizzbuzz}`
    } else if (i % 3 == 0) {
        liElement.innerHTML = `${fizz}`
    } else if (i % 5 == 0){
        liElement.innerHTML = `${buzz}`
    }
    else {
        liElement.innerHTML = `${i}`
    }   
}

console.log(ulElement);
document.body.append(ulElement)