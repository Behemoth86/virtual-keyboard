const FButtons = ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'ScrL', 'P/B' ];
const FButtonCodes =['Escape','F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'ScrollLock', 'Pause'];

const ArrEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Insert', 'Home', 'PageUp', 'NumLock', '/', '*', '-',
               'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\/', 'Delete', 'End', 'PageDown', '7', '8', '9', '+',
               'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter', '4', '5', '6',
               'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', '&uarr;', '1', '2', '3', 'Enter',
               'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;', '0', '.'];
const ArrRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Insert', 'Home', 'PageUp', 'NumLock', '/', '*', '-',
               'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\/', 'Delete', 'End', 'PageDown', '7', '8', '9', '+',
               'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', '4', '5', '6',
               'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', '&uarr;', '1', '2', '3', 'Enter',
               'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;', '0', '.'];
const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Insert', 'Home', 'PageUp', 'NumLock', 'NumpadDivide', 'NumpadMultiply', 'NumpadSubtract',
                  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'End', 'PageDown', 'Numpad7', 'Numpad8', 'Numpad9', 'NumpadAdd',
                  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'Numpad4', 'Numpad5', 'Numpad6',
                  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'Numpad1', 'Numpad2', 'Numpad3', 'NumpadEnter',
                  'ControlLeft', 'WakeUp', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Numpad0', 'NumpadDecimal'];
const specialKeys = ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11',
                     'F12', 'ScrL', 'P/B', 'Tab', 'Backspace', 'CapsLock', 'Enter', 'Shift',
                     '&uarr;', 'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;',
                     'Backspace', 'Insert', 'Home', 'PageUp', 'Delete', 'End', 'PageDown', 'NumLock'];
const letterRu = ['ё', '-', '=', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\/',
                  'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',
                  'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '/', ];
const letterEn = ['`', '-', '=', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\/',
                  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"',
                  'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '|'];
const numpads =['Numpad0', 'NumpadDecimal', 'Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad7', 'Numpad8', 'Numpad9'];
const numpadunactive = ['0', '.', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const numpadactive = ['Insert', 'Delete', 'End', '&darr;', 'PageDown', '&larr;', '', '&rarr;', 'Home', '&uarr;', 'PageUp'];

let lang = localStorage.getItem('lang') || 'en';

function init(){
  document.body.classList.add('centralizer');
  // Создание основных элементов
  const textareaa = document.createElement('textarea');
  document.body.append(textareaa);
  textareaa.classList.add('textarea');
  textareaa.setAttribute("id","textarea");
  // Создание блока клавиатуры
  const keyboarddiv = document.createElement('div');
  document.body.append(keyboarddiv);
  keyboarddiv.classList.add('keyboard');
  keyboarddiv.setAttribute('id', 'keyboard');
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
  radioNumLock.setAttribute("id","NumLockP")
  const radioCaps = document.createElement('div');
  radiopanel.append(radioCaps);
  radioCaps.classList.add('radioCaps', 'radiobutton');
  radioCaps.setAttribute("id","CapsLockP");
  const radioScroll = document.createElement('div');
  radiopanel.append(radioScroll);
  radioScroll.classList.add('radioScroll', 'radiobutton');
  radioScroll.setAttribute("id","ScrollLockP");

  //Добавление первой строки Ф-ок клавиатуры
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
    let ArrLetter =[]; 
    if (lang==='en') {
      ArrKey = ArrEn;
      ArrLetter = letterEn;
    }
    else {
      ArrKey = ArrRu;
      ArrLetter = letterRu;
    }
    for (let i = beginindex; i<=endindex; i++){
      const buttons = document.createElement('div');
      buttons.innerHTML = ArrKey[i];
      buttons.classList.add('key');
      if (specialKeys.includes(ArrKey[i])){
        buttons.classList.add('specials');
        buttons.classList.add(ArrKey[i]);
      }
      if (ArrLetter.includes(ArrKey[i])){
        buttons.classList.add('letter');
      }
      if (ArrKey[i].match('[0-9]')){
        buttons.classList.add('digit');
      }
      buttons.setAttribute('id', keyCodes[i]);
      row.append(buttons);

    }
  }
  addfirstrowbuttons();
  addrows(srow, 0, 20, lang);
  addrows(trow,21, 41, lang);
  addrows(forow,42, 57,lang);
  addrows(firow,58, 74, lang);
  addrows(sirow,75, 85, lang );

  let version = '';
  version = 'Активная расладка ' + lang;
  version = version + '\n Создано Behemoth86 for Windows OS';
  version = version + '\n Для переключения раскладки используйте Alt + Shift';
  version = version + '\n Для очистки поля используйте клавишу Esc';

  const inform = document.createElement('div');
  document.body.append(inform);
  const informtext = document.createElement('p');
  inform.append(informtext);
  informtext.classList.add('inform');
  informtext.innerText = version;
};

window.addEventListener('DOMContentLoaded', () => {
  init();
  const tea=document.getElementById("textarea");
  tea.focus();
  const keyboard = document.getElementById('keyboard');
  let posit=0;
  const numslocks = document.querySelectorAll('div');
  numslocks.forEach((e) => {
    if (numpads.includes(e.id)){
      e.classList.add('numpads');
    }
  });
  keyboard.addEventListener('click', (event) => {
    if (event.target.classList.contains('letter')||event.target.classList.contains('digit')){
      letterdigitclick()
    }
    if (event.target.id==="CapsLock"){
      capsclick();
    }
    if (event.target.id==="NumLock"){
      numclick();
    }
    if (event.target.id==="Delete"){
      deleteclick();
    }
    if (event.target.id==="Backspace"){
      backspaceclick();
    }
    if ((event.target.id==="Enter")||(event.target.id==="NumpadEnter")){
      enterclick();
    }
    if (event.target.id==="Tab"){
      tabspaceclick("Tab");
    }
    if (event.target.id==="Space"){
      tabspaceclick("Space");
    }
    if (event.target.id==="Escape"){
      escclick();
    }

  tea.focus(); 
  tea.setSelectionRange(posit,posit);
  });
  //функция для нажатия буквы или цифры
  function letterdigitclick(){
    let pos = getCaretPos();
      let text = tea.value;
      let len =text.length;
      let symbol=event.target.innerHTML;
      if (pos===0){
        if (len===0){
          var res = checklock(event,"CapsLock");
          var res2 = checklock(event,"NumLock");
          var res3 = checklock(event,"ScrollLock");
          if (res){capsclick(); symbol=event.target.innerHTML;}
          if (res2){numclick();}
          tea.value = symbol;
          posit = pos+1;
        }
        else {
          tea.value = symbol+text;
          posit = pos+1;
        }
      }
      else if (pos===len){
        tea.value = text + symbol;
        posit = pos+1;
      }
      else if((pos>0)&&(pos<len)){
        tea.value = text.substring(0,pos) + symbol +text.substring(pos, len+1);
        posit = pos+1;
      }
  }
  //функция для нажатия CapsLock
  function capsclick(){
    const letters = document.querySelectorAll('div');
    if (document.getElementById("CapsLock").classList.contains('key_active')===false){
      document.getElementById("CapsLock").classList.add('key_active');
      document.getElementById("CapsLockP").classList.add('radiobutton_active');
      letters.forEach((e) => {
        if (e.classList.contains('letter')){
          e.innerHTML = e.innerHTML.toUpperCase();
        }
      });
    }
    else{
      document.getElementById("CapsLock").classList.remove('key_active');
      document.getElementById("CapsLockP").classList.remove('radiobutton_active');
      letters.forEach((e) => {
        if (e.classList.contains('letter')){
          e.innerHTML = e.innerHTML.toLowerCase();
        }
      });  
    }
  }
  //функция для нажатия NumLock
  function numclick(){
    const nums = document.querySelectorAll('div');
    let n=0;
    if (document.getElementById("NumLock").classList.contains('key_active')===false){
      document.getElementById("NumLock").classList.add('key_active');
      document.getElementById("NumLockP").classList.add('radiobutton_active');
      nums.forEach((e) => {
        if (e.classList.contains('numpads')){
          n = numpadunactive.indexOf(e.innerHTML);
          e.innerHTML = numpadactive[n];
        }
      });
    }
    else{
      document.getElementById("NumLock").classList.remove('key_active');
      document.getElementById("NumLockP").classList.remove('radiobutton_active');
      nums.forEach((e) => {
        if (e.classList.contains('numpads')){
          alert(e.innerHTML);
          n = numpadactive.indexOf(e.innerHTML);
          e.innerHTML = numpadunactive[n];  
        }
      });  
    }
  }

  //функция для нажатия delete
  function deleteclick() {
    let pos = getCaretPos();
    if (tea.selectionStart===tea.selectionEnd) {
      tea.setRangeText('', tea.selectionStart, tea.selectionEnd + 1, 'end');
    }
    else if (tea.selectionStart !== tea.selectionEnd) {
      tea.setRangeText('', tea.selectionStart, tea.selectionEnd, 'end');
    }
    posit = pos;
  }
  //функция для нажатия backspace
  function backspaceclick(){
    let pos = getCaretPos();
    if (tea.selectionStart===tea.selectionEnd) {
      tea.setRangeText('', tea.selectionStart-1, tea.selectionEnd, 'end');
    }
    else if (tea.selectionStart !== tea.selectionEnd) {
      tea.setRangeText('', tea.selectionStart, tea.selectionEnd, 'end');
    }
    posit = pos-1;
  }
  //Функция для нажатия Enter
  function enterclick(){
    let pos = getCaretPos();
    let text = tea.value;
    let len =text.length;
    if (len>0){
      if((pos>0)&&(pos<len)){
        tea.value = text.substring(0,pos) + '\r\n' +text.substring(pos, len+1);
        pos = pos+1;
      }
      else if (pos===len){
        tea.value = text + '\r\n';
        pos = pos+1;
      }
    }  
    else{
      tea.value +=tea.value + '\r\n';
      pos = pos+1;
    }  
    posit = pos;
  }
  //функция для нажатия Tab или Space
  function tabspaceclick(gap){
    pos = getCaretPos();
    let text = tea.value;
    let len =text.length;
    let tab='';
    let sp = 0;
    if (gap==="Tab"){
      tab='    ';
      sp=4;
    }
    else if (gap==="Space"){
      tab=' ';
      sp=1;
    }  
    if (pos===0){
      if (len===0){
        tea.value =tab;
        posit = pos+sp;
      }
      else {
        tea.value = tab+text;
        posit = pos+sp;
      }
    }
    else if (pos===len){
      tea.value = text + tab;
      posit = pos+sp;
    }
    else if((pos>0)&&(pos<len)){
      tea.value = text.substring(0,pos) + tab +text.substring(pos, len+1);
      posit = pos+sp;
    }
  }
  function escclick(){
    tea.value = '';
    posit=0;
  }
  //Вспомогательная функция проверки локов 
  function checklock(event, lock){
    var z = event.getModifierState(lock);
    return z;
  }
  //Вспомогательная функция поиска позиции в textarea
  function getCaretPos() {
    if (document.selection) { 
      var sel = document.selection.createRange();
      var clone = sel.duplicate();
      sel.collapse(true);
      clone.moveToElementText(tea);
      clone.setEndPoint('EndToEnd', sel);
      return clone.text.length;
    } 
    else if (tea.selectionStart!==false) return tea.selectionStart;
    else return 0;
  }

});


