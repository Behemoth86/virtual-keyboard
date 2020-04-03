const FButtons = ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'ScrL', 'P/B' ];
const FButtonCodes =['Escape','F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'ScrollLock', 'Pause'];

const ArrEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Insert', 'Home', 'PageUp',
               'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|', 'Delete', 'End', 'PageDown',
               'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter',
               'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', '&uarr;',
               'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;'];
const ArrRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Insert', 'Home', 'Page Up',
               'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Delete', 'End', 'PageDown',
               'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
               'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', '&uarr;',
               'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;'];
const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Insert', 'Home', 'PageUp',
                  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'End', 'PageDown',
                  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
                  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp',
                  'ControlLeft', 'WakeUp', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
const specialKeys = ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11',
                     'F12', 'ScrL', 'P/B', 'Tab', 'Backspace', 'CapsLock', 'Enter', 'Shift',
                     '&uarr;', 'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;',
                     'Backspace', 'Insert', 'Home', 'PageUp', 'Delete', 'End', 'PageDown', ];

let lang = localStorage.getItem('lang') || 'en';
/*let scroll = document.getModifierState("ScrollLock");
let num = document.getModifierState("NumLock");
let capsl = document.getModifierState("CapsLock");*/

function init(){
  document.body.classList.add('centralizer');
  // Создание основных элементов
  const textarea = document.createElement('textarea');
  document.body.append(textarea);
  textarea.classList.add('textarea');
  textarea.focus();
  // Создание блока клавиатуры
  const keyboarddiv = document.createElement('div');
  document.body.append(keyboarddiv);
  keyboarddiv.classList.add('keyboard');
  //Первая строка F1-Pause/Break
  const frow = document.createElement('div');
  keyboarddiv.append(frow);
  frow.classList.add('frow');
  //Вторая строка ё-backspace
  const srow = document.createElement('div');
  keyboarddiv.append(srow);
  srow.classList.add('row');
  //Третья строка tab-]
  const trow = document.createElement('div');
  keyboarddiv.append(trow);
  trow.classList.add('row');
  //Четвертая строка Caps Lock-Enter
  const forow = document.createElement('div');
  keyboarddiv.append(forow);
  forow.classList.add('row');
  //Пятая строка Shift-ArrowUp
  const firow = document.createElement('div');
  keyboarddiv.append(firow);
  firow.classList.add('row');
  //Шестая строка Ctrl-ArrowRight
  const sirow = document.createElement('div');
  keyboarddiv.append(sirow);
  sirow.classList.add('row');

  //Добавление radiobutton
  const radiopanel = document.createElement('div');
  keyboarddiv.append(radiopanel);
  radiopanel.classList.add('radiopanel');
  //
  const radioNumLock = document.createElement('div');
  radiopanel.append(radioNumLock);
  radioNumLock.classList.add('radioNumLock', 'radiobutton');
  /*if (num){
    radioNumLock.classList.add('radiobutton_active');
  }*/
  const radioCaps = document.createElement('div');
  radiopanel.append(radioCaps);
  radioCaps.classList.add('radioCaps', 'radiobutton');
  const radioScroll = document.createElement('div');
  radiopanel.append(radioScroll);
  radioScroll.classList.add('radioScroll', 'radiobutton');

  //Добавление первой строки Ф-ок большой клавиатуры
  function addfirstrowbuttons() {
    for (let i = 0; i < FButtons.length; i += 1) {
      const fbuttons = document.createElement('div');
      fbuttons.innerHTML = FButtons[i];
      fbuttons.classList.add('key');
      if (specialKeys.includes(FButtons[i])){
        fbuttons.classList.add('specials');
        fbuttons.classList.add(FButtons[i]);
      }
      fbuttons.setAttribute('id', FButtonCodes[i]);
      frow.append(fbuttons);
    }
  }
  function addrows(row,beginindex, endindex, lang){
    let ArrKey = [];
    if (lang==='en') {ArrKey = ArrEn}
    else {ArrKey = ArrRu}
    for (let i = beginindex; i<=endindex; i++){
      const buttons = document.createElement('div');
      buttons.innerHTML = ArrKey[i];
      buttons.classList.add('key');
      if (specialKeys.includes(ArrKey[i])){
        buttons.classList.add('specials');
        buttons.classList.add(ArrKey[i]);
      }
      buttons.setAttribute('id', keyCodes[i]);
      row.append(buttons);
    }
  }
  addfirstrowbuttons();
  addrows(srow, 0, 16, lang);
  addrows(trow,17, 33, lang);
  addrows(forow,34, 46,lang);
  addrows(firow,47, 59, lang);
  addrows(sirow,60, 68, lang );

  let version = '';
  version = 'Активная расладка ' + lang;
  version = version + '\n Создано Behemoth86 for Windows OS';

  const inform = document.createElement('div');
  document.body.append(inform);
  const informtext = document.createElement('p');
  inform.append(informtext);
  informtext.classList.add('inform');
  informtext.innerText = version;
};


window.addEventListener('DOMContentLoaded', () => {
  init();
});
