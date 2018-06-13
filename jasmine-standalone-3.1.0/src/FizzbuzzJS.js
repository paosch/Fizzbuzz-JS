var FizzbuzzJS = function(){};

FizzbuzzJS.prototype.isDivisibleByThree = function(number){
  return (number % 3 === 0);
};

FizzbuzzJS.prototype.isDivisibleByFive = function(number){
  return (number % 5 === 0);
};
