

function add(){

	if(document.getElementById("input").value==""){
		alert("please insert something");
	}else{
	var li=document.createElement("li");
	var span=document.createElement("span");
	var c=document.createTextNode(document.getElementById("input").value);
	var del=document.createElement("button");
	var mod=document.createElement("button");
	del.appendChild(document.createTextNode("delete"));
	mod.appendChild(document.createTextNode("edit"));
	span.appendChild(document.createTextNode(document.getElementById("input").value));
	li.appendChild(span);
	li.appendChild(c);
	li.appendChild(del);
	li.appendChild(mod);
	var ul=document.getElementById("ul");
	ul.appendChild(li);
	document.getElementById("input").value="";
	del.classList.add("del");
	mod.classList.add("mod");
	span.classList.add("hide");
	del.addEventListener("click",delfun);
	mod.addEventListener("click",modfun);
}
}
function delfun(){
	this.parentNode.parentNode.removeChild(this.parentNode);
}

function modfun(){
	document.getElementById("input").value=this.parentNode.childNodes[0].innerHTML;
	this.parentNode.parentNode.removeChild(this.parentNode);
}
