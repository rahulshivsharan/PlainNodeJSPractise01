function Circle(radius){
	var obj = {};

	obj.area = area;

	function r_squared(){
		return Math.pow(radius,2);
	}	

	function area(){
		return Math.PI * r_squared();
	}

	return obj;
}

module.exports = Circle;