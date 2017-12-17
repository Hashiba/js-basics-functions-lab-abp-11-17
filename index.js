// Code your solution in this file!
// function calculateVertical(start, destination){
//  return (destination - start)*264;}
function distanceFromHqInBlocks(start){
  return Math.abs(start -42);
}

function distanceFromHqInFeet(start){
return (Math.abs(start -42))*264;
}

function distanceTravelledInFeet(start, destination){
return (Math.abs(start -destination))*264;
}

function calculatesFarePrice(start, destination){

if (distance < 400){
  let fare = 0;
}

if (distance >= 400 && distance < 2000){
  let fare = (distance *2)/100;
}

if (distance >= 2000 && distance < 2500){
  let fare = 25;
}

if (distance >= 2500){
  let fare = 25;
}

return fare;
}

calculatesFarePrice: Given the same starting and ending block,
return the fare for the customer. The first four hundred feet are free.
For a distance between 400 and 2000 feet, the price is 2 cents per foot.
Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet.
Finally Scuber does not allow any rides over 2500 feet
- the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
