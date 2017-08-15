//set local storage

localStorage.setItem('str', JSON.stringify(["Strength", 2]));
localStorage.setItem('dex', JSON.stringify(["Dexterity", 3]));
localStorage.setItem('sta', JSON.stringify(["Stamina", 2]));
localStorage.setItem('cha', JSON.stringify(["Charisma", 2]));
localStorage.setItem('man', JSON.stringify(["Manipulation", 5]));
localStorage.setItem('app', JSON.stringify(["Appearance", 2]));
localStorage.setItem('per', JSON.stringify(["Perception", 3]));
localStorage.setItem('int', JSON.stringify(["Intelligence", 3]));
localStorage.setItem('wit', JSON.stringify(["Wits", 4]));


function drawAttributes(){
  document.getElementById('main').innerHTML = `<button id="str" class="str attr-selector-btn" type="button" name="button">Strength</button>
  <button id="dex" class="dex attr-selector-btn" type="button" name="button">Dexterity</button>
  <button id="sta" class="sta attr-selector-btn" type="button" name="button">Stamina</button>
  <button id="cha" class="cha attr-selector-btn" type="button" name="button">Charisma</button>
  <button id="man" class="man attr-selector-btn" type="button" name="button">Manipulation</button>
  <button id="app" class="app attr-selector-btn" type="button" name="button">Appearance</button>
  <button id="per" class="per attr-selector-btn" type="button" name="button">Perception</button>
  <button id="int" class="int attr-selector-btn" type="button" name="button">Intelligence</button>
  <button id="wit" class="wit attr-selector-btn" type="button" name="button">Wits</button>`;
}

function drawMain(){
  document.getElementById('main').innerHTML = `<button class="btn attribute-btn" type="button" name="button">Attributes</button>
  <button class="btn ability-btn" type="button" name="button">Abilities</button>
  <button class="btn specialty-btn" type="button" name="button">Specialties</button>
  <button class="btn bonus-btn" type="button" name="button">Bonus</button>`;
}

$('#main').on('click', '.attribute-btn', drawAttributes);

$('#main').on('click', '.attr-selector-btn', selectAttr);

function selectAttr() {
  // console.log($(event.target).attr('id'));
  let attrArray = JSON.parse(localStorage.getItem($(event.target).attr('id')))
  // console.log(attrArray);
  $('#attribute').text(attrArray[0])
  $('#attribute-dice').text(attrArray[1])
  drawMain();
}

function updateTotal() {
  let diceArray = $('.dice-number')
  let total = 0;
  console.log(diceArray);
  diceArray.forEach(function($dice){
    let current = parseInt(dice.text());
    if (!isNaN(current)){
      total = total + current;
    }
  })
  $('.total-dice-num').text(total);
}
