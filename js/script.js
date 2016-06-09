var n = 1, string = "";

while (n <= 100) {
	if (n % 3 === 0 && n % 5 === 0) {
		string += "<div class='fizzbuzz'>FizzBuzz</div><br>";
	} else if (n % 3 === 0) {
		string += "<div class='fizz'>Fizz</div><br>";
	} else if (n % 5 === 0) {
		string += "<div class='buzz'>Buzz</div><br>";
	} else {
		string += "<div class='number'>" + n + "</div><br>";
	}
	$('body').html(string);
	n++;
}