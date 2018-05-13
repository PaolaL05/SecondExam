describe('Addition of two numbers', function() {
	var calculator = new Calculator();
	it ('add two numbers', function(){
		expect(calculator.addition(3,4)).toEqual(7);
	});
});