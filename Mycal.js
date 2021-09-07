function Add(n) {
	document.getElementById("ans").value=document.getElementById("ans").value+n;
}
function operation(op){
	tempValue=document.getElementById("ans").value;
	document.getElementById("ans").value= "";
	tempOp=op;
}
function equal(){
	a=document.getElementById("ans");
	newValue=a.value;

	if(tempOp=="+"){
		a.value= parseFloat(tempValue) + parseFloat(newValue);

	}
	else if(tempOp=="-"){
		a.value= parseFloat(tempValue) - parseFloat(newValue);

	}
	else if(tempOp=="/"){
		a.value= parseFloat(tempValue) / parseFloat(newValue);

	}
	else if(tempOp=="X"){
		a.value= parseFloat(tempValue) * parseFloat(newValue);

	}
	else if(tempOp=="%"){
		a.value=parseFloat(tempValue)/100+a.value;
	}
	ho=document.getElementById("History");
	ho.innerHTML=ho.innerHTML +"<br>"+ tempValue + tempOp + newValue + "=" + a.value;	
}
function clearInput(){
	document.getElementById("ans").value="";
}
function removeLast(){
		temp=document.getElementById("ans").value;
		document.getElementById("ans").value=temp.substr(0,temp.length-1);

}