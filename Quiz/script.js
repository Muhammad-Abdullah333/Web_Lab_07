function addToList() {
    var input = document.getElementById("input-text").value;
    var node = document.createElement("LI");
    var textnode = document.createTextNode(input);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
    document.getElementById("input-text").value = "";
}

document.getElementById("add-button").addEventListener("click", addToList);
