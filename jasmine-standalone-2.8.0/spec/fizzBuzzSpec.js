describe ('Fizzbuzz', function(){

  var fizzbuzz;

  describe("knows when a number is", function(){

    it('divisible by 3', function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.play(3)).toEqual("Fizz");
    });

    it('is not divisible by 3', function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.play(10)).not.toEqual("Fizz");
    });

    it('divisible by 5', function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.play(5)).toEqual("Buzz");
    });

    it('is not divisible by 5', function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.play(11)).not.toEqual("Buzz");
    });

    it('is divisible by 15', function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.play(15)).toEqual("FizzBuzz");
    });

  });

});
