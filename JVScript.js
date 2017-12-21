alert('ejecutando archivo java script');
let x = 1;
x = x + 5;
let apples = '2';
let oranges = 3;
console.log(apples + oranges);
console.log('El valor de x es ', x);
switch(oranges){
	case 1:

	break;
	case 2:

	break;
	case 3:
		console.log('El vato se la chake todos los dias');
	break;
	default:
	break;
}

function printMessage(){
	console.log("Volando por un sueno")
}
["Natalia","Natasha",'Crazy B',"Come on!","Forger it"].forEach(console.log);

printMessage();


function arguFunt(arg1, arg2, arg3){
	console.log(arg1 + ' yeah!! ' + arg2 + ' vamos a ver ' + arg3 + '  en el olvido ');
}

arguFunt('Maria','Natalia','Crazy')


function retorno(a , b){
	return a + b;
}

console.log(retorno(3,7));

 // permision this is a very nice funtion

function checkage(age){
	if( age > 18) {
		return true;
	}
	else {
		return confirm("Got a permision from the papi?");
	}

}

let age = prompt("How old are you?", 10);

if (checkage(age)){
	alert("Simon si se arma")
}
else {
	alert("Vali madre")
}
