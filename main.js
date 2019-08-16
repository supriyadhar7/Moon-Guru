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
  $('.hi').text(`Nice to meet you, ${name}!`)
}


buttonYes.on("click", displayAdviceYes);

function displayAdviceYes() {
  mental.css('display', 'inline');
  buttonYes.css('background-color', '#dcdde1');
  mental.append(`<h3>Mental</h3>`);
  mental.append(`<img class ="mentalPic" src ="http://dmec.org/wp-content/uploads/Mental-Well-Being-Resources-300x275.png">`);
  mental.append(`<p><strong>Be kind to your mind.</strong><p>`);
  mental.append(`<p>If you or someone you know has a mental illness, there are ways to get help.</p><p> Use these resources to find help for you, a friend, or a family member.</p>`);

  mental.append(`<p>National Suicide Prevention Lifeline </p><p>(1-800-273-8255).</p>`);
  mental.append(`<p>(SAMHSA) Treatment Referral Helpline </p><p>1-800-662-HELP (4357)</p>`);

}

buttonNo.on("click", displayAdviceNo);

function displayAdviceNo() {
  mental.css('display', 'inline');
  buttonNo.css('background-color', '#dcdde1');
  mental.append(`<h3>Mental</h3>`);
  mental.append(`<img class="mentalPic" src ="http://dmec.org/wp-content/uploads/Mental-Well-Being-Resources-300x275.png">`);
  mental.append(`<p><strong>The ability to triumph begins with you</strong></p>`)
  mental.append(`<p>Continue to look after your mental health by incorporating mind relaxing rituals into your morning or night routine. For example, try meditating for 15 minutes!</p> `)
  //next page
}

buttonSkip.on("click", displayAdviceSkip)

function displayAdviceSkip() {
  mental.css('display', 'inline');
  buttonSkip.css('background-color', '#dcdde1');
  mental.append(`<h3>Mental</h3>`);
  mental.append(`<img class="mentalPic" src ="http://dmec.org/wp-content/uploads/Mental-Well-Being-Resources-300x275.png">`);
  mental.append(`<p><strong>If your ship doesn’t come in, swim out to it</strong></p>`);
  mental.append(`<p>Try bullet journaling as a form of expression. Get creative with fun colors and cool accessories!</p>`);
}

button1.on("click", displayAdvice1);

function displayAdvice1() {
  physical.css('display', 'inline');
  button1.css('background-color', '#dcdde1');
  physical.append(`<h3>Physical</h3>`);
  physical.append(`<img class="physicalPic" src ="https://www.liderazgohoy.com/wp-content/uploads/2016/02/sunset-summer-golden-hour-paul-filitchkin-1024x768.jpg">`);
  physical.append(`<p><strong>Dwell on the beauty of life. Watch the stars, and see yourself running with them.</strong><p/>`)
  physical.append(`<p>Set small goals for yourself, like going for a walk! Also, create a playlist of all you favorite songs to listen to!.<p>`);

}

button2.on("click", displayAdvice2);

function displayAdvice2() {
  physical.css('display', 'inline');
  button2.css('background-color', '#dcdde1');
  physical.append(`<h3>Physical</h3>`);
  physical.append(`<img class="physicalPic" src ="https://www.liderazgohoy.com/wp-content/uploads/2016/02/sunset-summer-golden-hour-paul-filitchkin-1024x768.jpg">`);
  physical.append(`<p><strong>Put your heart, mind, and soul into even your smallest acts</strong></p>`)
  physical.append(`<p>Keep it up! Try incorporating new fun and hip workout trends into your routine.</p>`);

}

button3.on("click", displayAdvice3);

function displayAdvice3() {
  physical.css('display', 'inline');
  button3.css('background-color', '#dcdde1');
  physical.append(`<h3>Physical</h3>`);
  physical.append(`<img class="physicalPic" src ="https://www.liderazgohoy.com/wp-content/uploads/2016/02/sunset-summer-golden-hour-paul-filitchkin-1024x768.jpg">`);
  physical.append(`<p><strong>The roots of education are bitter, but the fruit is sweet</strong></p>`)
  physical.append(`<p>You're doing great! With all of this exercise, make sure you're staying hydrated and getting all of the proper nutrients.</p>`);
}

button4.on("click", displayAdvice4);

function displayAdvice4() {
  physical.css('display', 'inline');
  button4.css('background-color', '#dcdde1');
  physical.append(`<h3>Physical</h3>`);
  physical.append(`<img class="physicalPic" src ="https://www.liderazgohoy.com/wp-content/uploads/2016/02/sunset-summer-golden-hour-paul-filitchkin-1024x768.jpg">`);
  physical.append(`<p><strong>Keep your face always toward the sunshine</strong</p>`)
  physical.append(`<p>You're doing great! With all of this exercise, make sure you're staying hydrated and getting all of the proper nutrients</p>`);
}

button5.on("click", displayAdvice5);

function displayAdvice5() {
  spiritual.css('display', 'inline');
  button5.css('background-color', '#dcdde1');
  spiritual.append(`<h3>Spiritual</h3>`);
  spiritual.append(`<img class="spiritualPic" src ="https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">`);
  spiritual.append(`<p><strongKeep your face always toward the sunshine></strong></p>`)
  spiritual.append(`<p>Try aroma therapy with essential oils and get in tune with your innerself.</p>`);
}

button6.on("click", displayAdvice6);

function displayAdvice6() {
  spiritual.css('display', 'inline');
  button6.css('background-color', '#dcdde1');
  spiritual.append(`<h3>Spiritual</h3>`);
  spiritual.append(`<img class="spiritualPic" src ="https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">`);
  spiritual.append(`<p><strong>To keep your balance you must keep moving</strong></p>`);
  spiritual.append(`<p>Goal: Take a walk in the rain. Forget where you have to be, what you have to do, and who you need to be and just give yourself to a rainwater cleanse</p>`)
}

button7.on("click", displayAdvice7);

function displayAdvice7() {
  spiritual.css('display', 'inline');
  button7.css('background-color', '#dcdde1');
  spiritual.append(`<h3>Spiritual</h3>`);
  spiritual.append(`<img class="spiritualPic" src ="https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">`);
  spiritual.append(`<p><strong>Dream big and dare to fail</strong></p>`);
  spiritual.append(`<p>It’s important to be aware of the people/situations that drain our energies and debilitate our auric potential</p>`)
  spiritual.append(`<p>Keep your aura close you. To do this, simply imagine it tightly surrounding you: compact and impenetrable. This way, your aura crosses less with others’ and makes it less vulnerable to outside forces.</p>`)
}

button8.on("click", displayAdvice8);

function displayAdvice8() {
  spiritual.css('display', 'inline');
  button8.css('background-color', '#dcdde1');
  spiritual.append(`<h3>Spiritual</h3>`);
  spiritual.append(`<img class="spiritualPic" src="https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">`);
  spiritual.append(`<p><strong>I’m not afraid of storms, for I’m learning to sail my ship</strong></p>`);
  spiritual.append(`<p>Find a quiet, alone spot and lay down. Allow your body and mind to relax–let go of life’s noise and centre in on yourself</p>`)
}

button9.on("click", displayAdvice9);

function displayAdvice9() {
  emotional.css('display', 'inline');
  button9.css('background-color', '#dcdde1');
  emotional.append(`<h3>Emotional</h3>`);
  emotional.append(`<img class="emotionalPic" src="https://i.pinimg.com/originals/07/cf/52/07cf52c9249aa06460c677b696361360.jpg">`);
  emotional.append(`<p><strong>Go confidently in the direction of your dreams</strong></p>`)
  emotional.append(`<p>Happiness in its truest sense is the unselfish ability to love other people. Perchance that is why it is better to lose at love than never to love at all.</p>`)
}

button10.on("click", displayAdvice10);

function displayAdvice10() {
  emotional.css('display', 'inline');
  button10.css('background-color', '#dcdde1');
  emotional.append(`<h3>Emotional</h3>`);
  emotional.append(`<img class="emotionalPic" src="https://i.pinimg.com/originals/07/cf/52/07cf52c9249aa06460c677b696361360.jpg">`);
  emotional.append(`<p><strong>The greatest act of faith some days is to simply get up and face another day</strong></p>`)
  emotional.append(`<p>Take charge of your life by avoiding avoidance. Practice facing one fear at a time to eleviate personal anxieties</p>`);
}

button11.on("click", displayAdvice11);

function displayAdvice11() {
  emotional.css('display', 'inline');
  button11.css('background-color', '#dcdde1');
  emotional.append(`<h3>Emotional</h3>`);
  emotional.append(`<img class="emotionalPic" src="https://i.pinimg.com/originals/07/cf/52/07cf52c9249aa06460c677b696361360.jpg">`);
  emotional.append(`<p><strong>Defeat may serve as well as victory to shake the soul and let the glory out</strong></p>`)
  emotional.append(`<p>When you're feeling sad, it can be beneficial to take note of everything you're grateful for. Try starting a gratitude journal.</p>`);
}

button12.on("click", displayAdvice12);

function displayAdvice12() {
  emotional.css('display', 'inline');
  button12.css('background-color', '#dcdde1');
  emotional.append(`<h3>Emotional</h3>`);
  emotional.append(`<img class="emotionalPic" src="https://i.pinimg.com/originals/07/cf/52/07cf52c9249aa06460c677b696361360.jpg">`);
  emotional.append(`<p><strong>Boldness has genius, power, and magic in it</strong></p>`)
  emotional.append(`<p>Release yourself to spontaneous action when you’re inspired by your own spiritual life force</p>`);
}

button13.on("click", displayAdvice13);

function displayAdvice13() {
  environmental.css('display', 'inline');
  button13.css('background-color', '#dcdde1');
  environmental.append(`<h3>Environmental</h3>`);
  environmental.append(`<img class="environmentalPic" src="https://images.unsplash.com/photo-1445217143695-467124038776?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1133&q=80">`);
  environmental.append(`<p><strong>Make yourself proud</strong></p>`)
  environmental.append(`<p>Start with small acts of interacting with nature to help improve its wellness and yours.`);
  environmental.append(`<p>Try growing at least one plant yourself and slowly add more to your collection. Plants allow great air circulation and purification within homes!</p> `);
}


button14.on("click", displayAdvice14);

function displayAdvice14() {
  environmental.css('display', 'inline');
  button14.css('background-color', '#dcdde1');
  environmental.append(`<h3>Environmental</h3>`);
  environmental.append(`<img class="environmentalPic" src="https://images.unsplash.com/photo-1445217143695-467124038776?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1133&q=80">`);
  environmental.append(`<p><strong>It is not the mountain we conquer but ourselves</strong></p>`)
  environmental.append(`<p>Continue on in your journey of excellence!</p>`);
  environmental.append(`<P>Try setting small goals to improve the environment of someone or something arounf you. For example, try "plogging", jogging while picking up trash, as a fun and active way to get invovled</p>`);
}

button15.on("click", displayAdvice15);

function displayAdvice15() {
  environmental.css('display', 'inline');
  button15.css('background-color', '#dcdde1');
  environmental.append(`<h3>Environmental</h3>`);
  environmental.append(`<img class="environmentalPic" src="https://images.unsplash.com/photo-1445217143695-467124038776?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1133&q=80">`);
  environmental.append(`<p><strong>Try with all your might. Self-made or never made</strong></p>`)
  environmental.append(`<p>Improve your environment by removing one negative attribute at a time. This can be done temporarily with short breaks from the situation, or permanently through leaving the situation physically or mentally. </p>`);
}
