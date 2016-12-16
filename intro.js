var title = document.getElementsByTagName("h1")[0];
var ol = document.getElementById("thelist");
var ol2 = document.getElementById("fibonacci");
var li = document.getElementsByTagName("li");
var button1 = document.getElementById("b");
var button2 = document.getElementById("b2");

// Add handlers to existing list elements
for (var i = 0; i < li.length; i++) {
    var elem = li[i];
    addEvents(elem);
}

// Button click handler
button1.addEventListener("click", addListElement)
button2.addEventListener("click", addFib);

// When the button is clicked, append a li element with handlers attached
function addListElement(e) {
    var newElem = document.createElement("li");
    newElem.innerHTML = "BRAND NEW!!!";
    addEvents(newElem);
    ol.appendChild(newElem);
}

function addFib(e) {
    var newElem = document.createElement("li");
    var index = ol2.children.length;
    newElem.innerHTML = fib(index);
    addEvents(newElem);
    ol2.appendChild(newElem);
}

function fib(index) {
    if (index == 0 || index == 1) {
        return 1;
    }
    return fib(index-1) + fib(index-2);
}

function addEvents(li) {
    li.addEventListener("mouseenter", mouseenterHandler);
    li.addEventListener("mouseout", mouseoutHandler);
    li.addEventListener("click", clickHandler);
}

function mouseenterHandler(e) {
    title.innerHTML = this.innerHTML;
}

function mouseoutHandler(e) {
    title.innerHTML = "Hello World!";
}

function clickHandler(e) {
    this.remove();
}

