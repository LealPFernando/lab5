
let post = document.getElementById("ButtonPost");
let clear = document.getElementById("ButtonClear");
let mark = document.getElementById("ButtonMark");
let del = document.getElementById("ButtonDelete");
 
post.addEventListener("click",TodoPost);
clear.addEventListener("click",TodoClear);
mark.addEventListener("click",TodoMark);
del.addEventListener("click",TodoDel);


function TodoPost(e) {
    e.preventDefault();
    
    var todo = document.getElementById("todoText").value;
    var list = document.getElementById("todoList");
    
    let currentList = list.innerHTML;
    list.innerHTML = currentList + `<input type = "checkbox" name="todo" />  ${todo}  <br>  `
    console.log(list.length)

}
 
function TodoClear(e) {
    e.preventDefault();
    var listName = document.getElementsByName("todo");
    for(var i = 0; i < listName.length; i++){
        listName[i].checked = false
    }
    console.log(listName.length)

}
 
function TodoMark(e) {
    e.preventDefault();
    var listName = document.getElementsByName("todo");
    for(var i = 0; i < listName.length; i++){
        listName[i].checked = true
    }
    console.log(listName.length)

}
 
function TodoDel(e) {
    e.preventDefault();

    var list = document.getElementById("todoList");
    list.innerHTML = ''

}