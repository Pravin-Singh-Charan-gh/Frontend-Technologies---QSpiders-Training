let parent = document.getElementById('parent')
let button = document.getElementById('child')

button.addEventListener("click", function (e) {
    console.log("Handler 1");

    e.stopImmediatePropagation();
});

button.addEventListener("click", function () {
    console.log("Handler 2");
});

parent.addEventListener("click", function () {
    console.log("Parent");
});