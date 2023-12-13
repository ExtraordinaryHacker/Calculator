let display = document.getElementById('input1');
let buttons = document.querySelectorAll('button');

function cal(value) {
  display.value += value;
}

function del() {
  display.value = '';
  display.placeholder = '0';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function equal() {
  try {
    if (display.value == '') {
      display.value = ''
      display.placeholder = '0';
    }
    else {
      display.value = eval(display.value);
    }
  }
  catch (error) {
    display.value = '';
    display.placeholder = 'Error';
  }
}