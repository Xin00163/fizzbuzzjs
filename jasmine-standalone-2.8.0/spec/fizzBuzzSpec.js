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
  });
});
