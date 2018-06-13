describe('FizzbuzzJS', function(){
  var fizzbuzzJS;

  describe('multiples of 3', function(){
    it("knows when a number is a multiple of 3", function(){
      fizzbuzzJS = new FizzbuzzJS;
      expect(fizzbuzzJS.isDivisibleByThree(3)).toBe (true)
    })
  })
});
