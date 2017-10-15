// Game variables
var score = 0;
var adding = 1;

var multiple = 0;

var ovenPrice = 25;

// Called when simple button is pressed
function bake()
{
  score += adding;
  document.getElementById('number').innerHTML = score;
  refreshOptions();
}

// Called when buy a Oven button is pressed
function buyOven()
{
  if (score >= ovenPrice)
  {
    score -= ovenPrice;
    document.getElementById('number').innerHTML = score;
    adding += 1;
    multiple += 1;
    ovenPrice += multiple * 25;
    document.getElementById('ovenBtn').innerHTML = 'Buy Oven (' + ovenPrice + ')'
  }
  refreshOptions();
}

// Actualize buying options
function refreshOptions()
{
  if (score < ovenPrice) // Oven example cookie price
    document.getElementById('ovenBtn').disabled = true;
  else
    document.getElementById('ovenBtn').disabled = false;
}
