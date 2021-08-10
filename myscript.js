// document.write("hi world");
let isPrime = true;

let n = 11	;

let i = 2;

// while(i<n){
// 	if(n % i == 0){

// 		isPrime = false
// 		// console.log(i);
// 		break;
// 	}
// 	i++;
// }

// prime number ????
while(i< parseInt( n ** 0.5 ) + 1 ){
	if(n % i == 0){

		isPrime = false
		console.log(i);
		break;

	}
	i++;
}
console.log(n,isPrime);
