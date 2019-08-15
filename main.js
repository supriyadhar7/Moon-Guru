var button1 = $('.1');
var button2 = $('.2');
var button3 = $('.3');
var button4 = $('.4');
var button5 = $('.5');
var button6 = $('.6');
var button7 = $('.7');
var button8 = $('.8');
var button9 = $('.9');
var button10 = $('.10');
var button11 = $('.11');
var button12 = $('.12');
var button13 = $('.13');
var button14 = $('.14');
var button15 = $('.15');
var buttonYes = $('.Yes');
var buttonNo = $('.No');
var buttonSkip = $('.Skip');
var medicine = $('.medicine')

buttonYes.on("click", displayAdviceYes);

function displayAdviceYes() {
  medicine.append("");
  //next page
}

buttonNo.on("click", displayAdviceNo);

function displayAdviceNo() {
  medicine.append("");
  //next page
}

buttonSkip.on("click", displayAdviceSkip)

function displayAdviceSkip() {
  medicine.append("");
}
