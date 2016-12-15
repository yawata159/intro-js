var title = document.getElementsByTagName("h1")[0];
var ol = document.getElementById("thelist");
var button = document.getElementById("b");
    
// Add handlers to existing list elements
for (var i = 0; i < ol.children.length; i++) {
    var elem = ol.children[i];
    addEvents(elem);
}

// Button click handler
button.addEventListener("click", addListElement)

// When the button is clicked, append a li element with handlers attached
function addListElement(e) {
    var newElem = document.createElement("li");
    newElem.innerHTML = "BRAND NEW!!!"
    addEvents(newElem)
    ol.appendChild(newElem);
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

