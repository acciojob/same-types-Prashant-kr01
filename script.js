function isSameType(value1, value2) {
  //your js code here
 if (Number.isNaN(value1) && Number.isNaN(value2)) {
        return true;
    }
	if(Number.isNaN(value1)){
		return false;
	}
	if(Number.isNaN(value2)){
		return false;
	}
return typeof value1 === typeof value2;
    // Check if both values have the same type
}




// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
