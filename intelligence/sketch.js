let textfield;


function setup() {
  createCanvas(400, 400);
  createP('psych thats the wrong number');
  textfield = createInput();

  textfield.changed(newText);
  textfield.input(newTyping);
}

function newText() {
  console.log(textfield.value());
}

function newTyping() {
  createP(textfield.value());
}