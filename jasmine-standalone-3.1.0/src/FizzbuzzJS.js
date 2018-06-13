var FizzbuzzJS = function(){};

FizzbuzzJS.prototype.isDivisibleBy = function(number, divisor){
  return (number % divisor === 0);
};
FizzbuzzJS.prototype.isDivisibleByThree = function(number){
  return this.isDivisibleBy(number, 3);
};

FizzbuzzJS.prototype.isDivisibleByFive = function(number){
  return this.isDivisibleBy(number, 5);
};
