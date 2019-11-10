var btn = document.querySelector('button');
var img = document.getElementById('PNG');
console.log("test1");
function remove(){
  img.src = "waving-characterBG.gif"
  console.log("test2");
}
btn.addEventListener("click", remove);
