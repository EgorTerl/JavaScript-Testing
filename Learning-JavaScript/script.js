//inputs
var r = parseInt(prompt("Please enter a value to either (select in the javascript section): \n 1) calculate the area of a circle with that value \n 2) find its factorial \n 3) check if its even or odd \n 4) find the remainder after dividing it by 2"))
var pi = Math.PI
var fact1 = 5


//functions
function CircleArea()
{
  return document.getElementById('answer').innerHTML = "The area of the circle with a radius " + r + " is " + r*r*pi 
}

function factorial(r)
{
    
    if(r == 0 || r == 1)
    {
        return 1;
  
    }
    else
    {
        return r * factorial(r-1);
    }
}

function findOddEven()

{
  if ( r % 2 == 0) 
  {
  return document.getElementById('answer').innerHTML = r + ' is an even number';
  }
  else
  {
  return document.getElementById('answer').innerHTML = r + ' is an odd number';
  }
}    

function divisor()

{
  return document.getElementById('answer').innerHTML = "The divisor is " + r + " and the remainder is " + r%2
}

//Calculations

answer = divisor(); // choose one of the functions based on the wanted outcome ==> CircleArea (pi,r), factorial(r), findOddEven(), divisor ()

// Put the answer on the page

ans = document.getElementById("answer")
ans.innerHTML = answer



// I cannot seem to declare a seperate variable for each function and then only use that variable when I want to use that function. E.g. declare a specific variable for the divisor function so that I can allow the user to choose their own divisor