/*
	Following JS tutorial on promises
	A promise can be in one of 3 states:
		pending - does not know the result yet
		resolved - known success
		rejected - known failure
*/

//MAKING A PROMISE

var isMomHappy = false;

var willGetPhone = new Promise((resolve, reject) => {
	if(isMomHappy){
		//if mom is happy, resolve with phone data 
		resolve({name: "Apple", color: "silver"});
	} else {
		//if mom not happy, reject with error data
		reject(new Error("NO PHONE"));
	}
});

var showOff = (phone) => {
	return new Promise((resolve, reject) => {
		resolve("I have a new phone " + phone.name);
	});
}

var askMom = () => {
	willGetPhone
	.then(showOff)
	.then((resolvedData) => console.log(resolvedData))
	.catch((errorData) => console.log(errorData.message));
}


askMom();


//use a promise if you have a request that will take a long time and the function returns promptly
//the function will not have all that data before it returns
//use a promise so that it will be able to say what should be done after that


const testDispatch = () => {
	let dog = false;
	// setTimeout(() => { dog = 5; }, 500);
	return new Promise((resolve, reject) => {
		if(dog){
			resolve("has dog");
		}else{
			reject(new Error("no dog"));
		}
	})
}

const handler = () => {
	testDispatch().then((data) => console.log("resolved to " + data)).catch((data) => console.log("errored to " + data.message));
}

//would need a promise if have some piece of code that will take time to do and will not get done
//so set up a promise to tell i twhat to do when it returns when you need to do something with a operation
//that will take a really long time - wrap it in a promise
handler();