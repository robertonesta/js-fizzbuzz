const ulElement = document.createElemente("ul");

for (let i = 1; i < 101; i++) {

    const liElement = document.createElement("li")

    liElement.append(i);
    ulElement.append(liElement)
}

console.log(ulElement);