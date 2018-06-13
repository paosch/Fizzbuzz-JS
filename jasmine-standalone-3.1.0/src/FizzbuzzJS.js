var FizzbuzzJS = function(){};

FizzbuzzJS.prototype.isDivisibleBy = function(number, divisor){
  return (number % divisor === 0);
};

FizzbuzzJS.prototype.isDivisibleByFifteen = function(number){
  return this.isDivisibleBy(number, 15);
}
FizzbuzzJS.prototype.isDivisibleByThree = function(number){
  return this.isDivisibleBy(number, 3);
};

FizzbuzzJS.prototype.isDivisibleByFive = function(number){
  return this.isDivisibleBy(number, 5);
};

FizzbuzzJS.prototype.says = function(number){
  if(this.isDivisibleByFifteen(number)){
    return 'fizzbuzz';
  }
  if(this.isDivisibleByThree(number)){
    return 'fizz';
  }
  if(this.isDivisibleByFive(number)){
    return 'buzz';
  }
};
