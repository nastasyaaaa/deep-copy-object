function deepCopy (object) {

	if(typeof object !== 'object'){
		throw new Error(`argument must be type of object, ${typeof object} given.`);
	}	

	const newObject = new object.constructor();

	Object.entries(object).forEach(([propName, propValue]) => {

		if( typeof object[propName] === 'object' ){

			newObject[propName] = deepCopy(object[propName]);
		}else{
			
			Object.defineProperty(newObject, propName, Object.getOwnPropertyDescriptor(object, propName));
		}
	});


	return newObject;
}

const nana = {
	name : "nana",
	age : 19,
	friends : [
	{
		name : "tanya",
		age : 45, 
		hobby : ["baking", "racing"]
	},
	{
		name : "alex",
		age : 22, 
		parents : [ "mama", "papa" ]
	}

	]};

	const copyNana = deepCopy(nana);