describe('FizzbuzzJS', function(){
  var fizzbuzzJS;

  describe('multiples of 3', function(){
    it("knows when a number is divisible by 3", function(){
      fizzbuzzJS = new FizzbuzzJS;
      expect(fizzbuzzJS.isDivisibleByThree(3)).toBe (true)
    })
  })
  describe('multiples of 5', function(){
    it('knows when a number is divisible by 5', function(){
      fizzbuzzJS = new FizzbuzzJS;
      expect(fizzbuzzJS.isDivisibleByFive(5)).toBe (true)
    })
  })
});
