const keyboard = document.getElementById("keyboard");
const textarea = document.getElementById("text");
const themeBtn = document.getElementById("themeBtn");
let caps = false;
const keys = [
["1","2","3","4","5","6","7","8","9","0"],
["q","w","e","r","t","y","u","i","o","p"],
["a","s","d","f","g","h","j","k","l"],
["Caps","z","x","c","v","b","n","m","Back"],
["Space","Enter"]
];
function createKeyboard(){
keyboard.innerHTML="";
keys.forEach(row=>{
const rowDiv=document.createElement("div");
rowDiv.className="row";
row.forEach(key=>{
const btn=document.createElement("button");
btn.innerText=key;
btn.className="key";
if(key==="Space")
btn.classList.add("space");
if(key==="Caps" || key==="Back" || key==="Enter")
btn.classList.add("wide");
btn.onclick=()=>pressKey(key);
rowDiv.appendChild(btn);
});
keyboard.appendChild(rowDiv);
});
}
function pressKey(key){
switch(key){
case "Space":
textarea.value+=" ";
break;
case "Enter":
textarea.value+="\n";
break;
case "Back":
textarea.value=textarea.value.slice(0,-1);
break;
case "Caps":
caps=!caps;
break;
default:
textarea.value+=caps?key.toUpperCase():key.toLowerCase();
}
}
themeBtn.onclick=()=>{
document.body.classList.toggle("dark");
if(document.body.classList.contains("dark"))
themeBtn.innerHTML="☀️ Light Mode";
else
themeBtn.innerHTML="🌙 Dark Mode";
};
document.addEventListener("keydown",(e)=>{
if(e.key==="Backspace"){
e.preventDefault();
textarea.value=textarea.value.slice(0,-1);
return;
}
if(e.key==="Enter"){
textarea.value+="\n";
return;
}
if(e.key===" "){
textarea.value+=" ";
return;
}
if(e.key.length===1){
textarea.value+=caps?e.key.toUpperCase():e.key;
}
});
createKeyboard();
