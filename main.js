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
var mental = $('.mental');
var environmental = $('.environmental');
var physical = $('.physical');
var spiritual = $('.spiritual');
var emotional = $('.emotional');
var buttonEnter = $('.enter');

mental.css('display', 'none');
physical.css('display', 'none');
environmental.css('display', 'none');
emotional.css('display', 'none');
spiritual.css('display', 'none');

buttonEnter.on("click", enterButton);

function enterButton() {
  var name = $('.name-input').val();
  $('.prescription').text(`${name}'s health and wellness prescription`);
  $('.hi').text(`Nice to meet you, ${name}.`)
}


buttonYes.on("click", displayAdviceYes);

function displayAdviceYes() {
  mental.css('display', 'inline');
  buttonYes.css('background-color', 'pink');
  mental.append(`<h3>Mental</h3>`);
  mental.append(`<img class ="mentalPic" src ="http://dmec.org/wp-content/uploads/Mental-Well-Being-Resources-300x275.png">`);
  mental.append(`<p><strong>Be kind to your mind.</strong><p>`);
  mental.append(`<p>If you or someone you know has a mental illness, there are ways to get help.</p><p> Use these resources to find help for you, a friend, or a family member.</p>`);

  mental.append(`<p>National Suicide Prevention Lifeline </p><p>(1-800-273-8255).</p>`);
  mental.append(`<p>(SAMHSA) Treatment Referral Helpline </p><p>1-800-662-HELP (4357)</p>`);

  //next page
}

buttonNo.on("click", displayAdviceNo);

function displayAdviceNo() {
  mental.css('display', 'inline');
  buttonNo.css('background-color', 'pink');
  mental.append(`<h3>Mental</h3>`);
  mental.append(`<img class="mentalPic" src ="http://dmec.org/wp-content/uploads/Mental-Well-Being-Resources-300x275.png">`);
  //next page
}

buttonSkip.on("click", displayAdviceSkip)

function displayAdviceSkip() {
  mental.css('display', 'inline');
  buttonSkip.css('background-color', 'pink');
  mental.append(`<h3>Mental</h3>`);
  mental.append(`<img class="mentalPic" src ="http://dmec.org/wp-content/uploads/Mental-Well-Being-Resources-300x275.png">`);
}

button1.on("click", displayAdvice1);

function displayAdvice1() {
  physical.css('display', 'inline');
  button1.css('background-color', 'pink');
  physical.append(`<h3>Physical</h3>`);
  physical.append(`<img class="physicalPic" src ="https://www.liderazgohoy.com/wp-content/uploads/2016/02/sunset-summer-golden-hour-paul-filitchkin-1024x768.jpg">`);
  physical.append(`<p>Set small goals for yourself, like going for a walk! Make it fun and get creative.<p>`);

}

button2.on("click", displayAdvice2);

function displayAdvice2() {
  physical.css('display', 'inline');
  button2.css('background-color', 'pink');
  physical.append(`<h3>Physical</h3>`);
  physical.append(`<img class="physicalPic" src ="https://www.liderazgohoy.com/wp-content/uploads/2016/02/sunset-summer-golden-hour-paul-filitchkin-1024x768.jpg">`);
  physical.append(`<p>Keep it up! Try incorporating new fun and hip workout trends into your routine.</p>`);

}

button3.on("click", displayAdvice3);

function displayAdvice3() {
  physical.css('display', 'inline');
  button3.css('background-color', 'pink');
  physical.append(`<h3>Physical</h3>`);
  physical.append(`<img class="physicalPic" src ="https://www.liderazgohoy.com/wp-content/uploads/2016/02/sunset-summer-golden-hour-paul-filitchkin-1024x768.jpg">`);
  physical.append(`<p>You're doing great! With all of this exercise, make sure you're staying hydrated and getting all of the proper nutrients.</p>`);
}

button4.on("click", displayAdvice4);

function displayAdvice4() {
  physical.css('display', 'inline');
  button4.css('background-color', 'pink');
  physical.append(`<h3>Physical</h3>`);
  physical.append(`<img class="physicalPic" src ="https://www.liderazgohoy.com/wp-content/uploads/2016/02/sunset-summer-golden-hour-paul-filitchkin-1024x768.jpg">`);
  physical.append(`<p>You're doing great! With all of this exercise, make sure you're staying hydrated and getting all of the proper nutrients</p>`);
}

button5.on("click", displayAdvice5);

function displayAdvice5() {
  spiritual.css('display', 'inline');
  button5.css('background-color', 'pink');
  spiritual.append(`<h3>Spiritual</h3>`);
  spiritual.append();
}

button6.on("click", displayAdvice6);

function displayAdvice6() {
  spiritual.css('display', 'inline');
  button6.css('background-color', 'pink');
  spiritual.append(`<h3>Spiritual</h3>`);
  spiritual.append();
}

button7.on("click", displayAdvice7);

function displayAdvice7() {
  spiritual.css('display', 'inline');
  button7.css('background-color', 'pink');
  spiritual.append(`<h3>Spiritual</h3>`);
  spiritual.append();
}

button8.on("click", displayAdvice8);

function displayAdvice8() {
  spiritual.css('display', 'inline');
  button8.css('background-color', 'pink');
  spiritual.append(`<h3>Spiritual</h3>`);
  spiritual.append();
}

button9.on("click", displayAdvice9);

function displayAdvice9() {
  emotional.css('display', 'inline');
  button9.css('background-color', 'pink');
  emotional.append(`<h3>Emotional</h3>`);
  emotional.append();
}

button10.on("click", displayAdvice10);

function displayAdvice10() {
  emotional.css('display', 'inline');
  button10.css('background-color', 'pink');
  emotional.append(`<h3>Emotional</h3>`);
  emotional.append();
}

button11.on("click", displayAdvice11);

function displayAdvice11() {
  emotional.css('display', 'inline');
  button11.css('background-color', 'pink');
  emotional.append(`<h3>Emotional</h3>`);
  emotional.append(`<p>When you're feeling sad, it can be beneficial to take note of everything you're grateful for. Try starting a gratitude journal.</p>`);
}

button12.on("click", displayAdvice12);

function displayAdvice12() {
  emotional.css('display', 'inline');
  button12.css('background-color', 'pink');
  emotional.append(`<h3>Emotional</h3>`);
  emotional.append();
}

button13.on("click", displayAdvice13);

function displayAdvice13() {
  environmental.css('display', 'inline');
  button13.css('background-color', 'pink');
  environmental.append(`<h3>Environmental</h3>`);
  environmental.append();
}

button14.on("click", displayAdvice14);

function displayAdvice14() {
  environmental.css('display', 'inline');
  button14.css('background-color', 'pink');
  environmental.append(`<h3>Environmental</h3>`);
  environmental.append();
}

button15.on("click", displayAdvice15);

function displayAdvice15() {
  environmental.css('display', 'inline');
  button15.css('background-color', 'pink');
  environmental.append(`<h3>Environmental</h3>`);
  environmental.append();
}
