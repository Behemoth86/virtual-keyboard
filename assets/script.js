const FButtons = ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'ScrL', 'P/B' ];
const FButtonCodes =['Escape','F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'ScrollLock', 'Pause'];

const ArrEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Insert', 'Home', 'PageUp', 'NumLock', '/', '*', '-',
               'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'End', 'PageDown', 'Home', '↑', 'PageUp', '+',
               'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter',  '←', '', '→',
               'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', '↑', 'End', '↓', 'PageDown', 'Enter',
               'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→', 'Insert', 'Delete',];
const ArrRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Insert', 'Home', 'PageUp', 'NumLock', '/', '*', '-',
               'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete', 'End', 'PageDown', 'Home', '↑', 'PageUp', '+',
               'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',  '←', '', '→',
               'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', '↑', 'End', '↓', 'PageDown', 'Enter',
               'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→', 'Insert', 'Delete',];
const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Insert', 'Home', 'PageUp', 'NumLock', 'NumpadDivide', 'NumpadMultiply', 'NumpadSubtract',
                  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'End', 'PageDown', 'Numpad7', 'Numpad8', 'Numpad9', 'NumpadAdd',
                  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'Numpad4', 'Numpad5', 'Numpad6',
                  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'Numpad1', 'Numpad2', 'Numpad3', 'NumpadEnter',
                  'ControlLeft', 'WakeUp', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Numpad0', 'NumpadDecimal'];
const specialKeys = ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11',
                     'F12', 'ScrL', 'P/B', 'Tab', 'Backspace', 'CapsLock', 'Enter', 'Shift',
                     '↑', 'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', '←', '↓', '→',
                     'Backspace', 'Insert', 'Home', 'PageUp', 'Delete', 'End', 'PageDown', 'NumLock'];
const letterRu = ['ё', '-', '=', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
                  'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',
                  'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '/', ];
const letterEn = ['`', '-', '=', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
                  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'",
                  'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '|'];
const numpads =['Numpad0', 'NumpadDecimal', 'Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad7', 'Numpad8', 'Numpad9','NumpadDivide', 'NumpadMultiply', 'NumpadSubtract', 'NumpadAdd'];
const numpadunactive = ['0', '.', '1', '2', '3', '4', '5', '6', '7', '8', '9'] ;
const numpadactive = ['Insert', 'Delete', 'End', '↓', 'PageDown', '←', '', '→', 'Home', '↑', 'PageUp'];
const shiftEnactive =   ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', ':', '"', '|', '<', '>', '?'];
const shiftEnunactive = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '[', ']', ';', "'", '\\', ',', '.', '/'];
const shiftRuactive = ['!','"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '/', ','];
const shiftRuunactive =['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\', '.'];

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
	const letters = document.querySelectorAll('div');
	const informtext = document.querySelector('p.inform');
  tea.focus();
  const keyboard = document.getElementById('keyboard');
	let posit=0;
	let flagctrl=0;
	let flagshift=0;
	let flagalt=0;
	let flagcaps=0;
	let score =0;
  const numslocks = document.querySelectorAll('div');
  numslocks.forEach((e) => {
    if (numpads.includes(e.id)){
      e.classList.add('numpads');
    }
  });
  keyboard.addEventListener('click', (event) => {
    if (event.target.classList.contains('letter')||event.target.classList.contains('digit')){
			if ((tea.value.length===0)&&(score===0)){
				getlocks();
			}
			letterdigitclick();
    }
    if (event.target.id==="CapsLock"){
			if ((tea.value.length===0)&&(score===0)){
				getlocks();
			}
      capsclick();
    }
    if (event.target.id==="NumLock"){
			if ((tea.value.length===0)&&(score===0)){
				getlocks();
			}
      numclick();
    }
    if ((event.target.id==="Delete")||(event.target.classList.contains('Delete'))){
			if ((tea.value.length===0)&&(score===0)){
				getlocks();
			}
      deleteclick();
    }
    if (event.target.id==="Backspace"){
			if ((tea.value.length===0)&&(score===0)){
				getlocks();
			}
      backspaceclick();
    }
    if ((event.target.id==="Enter")||(event.target.id==="NumpadEnter")){
			if ((tea.value.length===0)&&(score===0)){
				getlocks();
			}
      enterclick();
    }
    if (event.target.id==="Tab"){
			if ((tea.value.length===0)&&(score===0)){
				getlocks();
			}
      tabspaceclick("Tab");
    }
    if (event.target.id==="Space"){
			if ((tea.value.length===0)&&(score===0)){
				getlocks();
			}
      tabspaceclick("Space");
    }
    if (event.target.id==="Escape"){
			if ((tea.value.length===0)&&(score===0)){
				getlocks();
			}
      escclick();
		}
		if ((event.target.id==="ControlLeft")||(event.target.id==="ControlRight")){
			if (event.target.id==="ControlLeft"){
				if ((tea.value.length===0)&&(score===0)){
					getlocks();
				}
				ctrlclick("ControlLeft");
				if (document.getElementById('ControlRight').classList.contains('key_active')){
					document.getElementById('ControlRight').classList.remove('key_active');
				}
			}
			else {
				if ((tea.value.length===0)&&(score===0)){
					getlocks();
				}
				ctrlclick("ControlRight");
				if (document.getElementById('ControlLeft').classList.contains('key_active')){
					document.getElementById('ControlLeft').classList.remove('key_active');
			  }	
			}
		}	
		if ((event.target.id==="AltLeft")||(event.target.id==="AltRight")){
			if (event.target.id==="AltLeft"){
				if ((tea.value.length===0)&&(score===0)){
					getlocks();
				}
				altclick("AltLeft");
				if (document.getElementById('AltRight').classList.contains('key_active')){
					document.getElementById('AltRight').classList.remove('key_active');
				}
			}
			else {
				if ((tea.value.length===0)&&(score===0)){
					getlocks();
				}
				altclick("AltRight");
				if (document.getElementById('AltLeft').classList.contains('key_active')){
					document.getElementById('AltLeft').classList.remove('key_active');
				}
			}	
		}
		if ((event.target.id==="ShiftLeft")||(event.target.id==="ShiftRight")){
			if (event.target.id==="ShiftLeft"){
				if ((tea.value.length===0)&&(score===0)){
					getlocks();
				}
				if (flagcaps===0){
					shiftclick("ShiftLeft");
					if (document.getElementById('ShiftRight').classList.contains('key_active')){
						document.getElementById('ShiftRight').classList.remove('key_active');
					}
				}	
			}
			else {
				if ((tea.value.length===0)&&(score===0)){
					getlocks();
				}
				if (flagcaps===0){
					shiftclick("ShiftRight");
					if (document.getElementById('ShiftLeft').classList.contains('key_active')){
						document.getElementById('ShiftLeft').classList.remove('key_active');
					}
				}
			}	
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
          symbol=event.target.innerHTML;
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
    if (document.getElementById("CapsLock").classList.contains('key_active')===false){
      document.getElementById("CapsLock").classList.add('key_active');
      document.getElementById("CapsLockP").classList.add('radiobutton_active');
      letters.forEach((e) => {
        if (e.classList.contains('letter')){
          e.innerHTML = e.innerHTML.toUpperCase();
        }
			});
			flagcaps=1;
    }
    else{
      document.getElementById("CapsLock").classList.remove('key_active');
      document.getElementById("CapsLockP").classList.remove('radiobutton_active');
      letters.forEach((e) => {
        if (e.classList.contains('letter')){
          e.innerHTML = e.innerHTML.toLowerCase();
        }
			});  
			flagcaps=0;
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
					e.classList.remove('specials')
					n = numpadactive.indexOf(e.innerText);
					if (n!==-1){
						e.innerText = numpadunactive[n];
						e.classList.add('digit');
					}
        }
      });
    }
    else{
      document.getElementById("NumLock").classList.remove('key_active');
      document.getElementById("NumLockP").classList.remove('radiobutton_active');
      nums.forEach((e) => {
        if (e.classList.contains('numpads')){
					n = numpadunactive.indexOf(e.innerText);
					if (n!==-1){
						e.innerText = numpadactive[n];
						e.classList.remove('digit'); 
					}
					if (specialKeys.includes(e.innerText)){
						e.classList.add('specials');
					} 
        }
      });  
    }
  }
	//функция нажатия scrolllock
	function scrollclick(){
		document.getElementById("ScrollLock").classList.toggle('key_active');
		document.getElementById("ScrollLockP").classList.toggle('radiobutton_active');		
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
	//функция нажатия Esc
  function escclick(){
    tea.value = '';
    posit=0;
	}
	//функция нажатия Ctrl
	function ctrlclick(control){
		if (document.getElementById(control).classList.contains('key_active')){
			document.getElementById(control).classList.remove('key_active');
			flagctrl=0;
		}
		else {
			document.getElementById(control).classList.add('key_active');
			flagctrl=1;
		}	
	}
	//функция нажатия Alt
	function altclick(control){
		if (document.getElementById(control).classList.contains('key_active')){
			document.getElementById(control).classList.remove('key_active');
			flagalt=0;
		}
		else {
			if (flagshift===1){
				document.getElementById('AltLeft').classList.remove('key_active');
				document.getElementById('AltRight').classList.remove('key_active');
				letters.forEach((e) => {
					if ((e.classList.contains('letter')||e.classList.contains('digit'))&&(!e.classList.contains('numpads'))){
						if (lang==='en'){
							n = shiftEnactive.indexOf(e.innerText);
							if (n!==-1){
								e.innerText = shiftEnunactive[n];
							}	
						}
						else if (lang==='ru'){
							n = shiftRuactive.indexOf(e.innerText);
							if (n!==-1){
								e.innerText = shiftRuunactive[n];
							}	
						}
					}
				});
				document.getElementById('ShiftLeft').classList.remove('key_active');
				document.getElementById('ShiftRight').classList.remove('key_active');
				changelanguage();
				flagalt=0;
				flagshift=0;
			}
			else{
			  document.getElementById(control).classList.add('key_active');
			  flagalt=1;
			}
		}	
	}
	//функция нажатия Shift
	function shiftclick(control){
		if (document.getElementById(control).classList.contains('key_active')){
			document.getElementById(control).classList.remove('key_active');
			letters.forEach((e) => {
				if ((e.classList.contains('letter')||e.classList.contains('digit'))&&(!e.classList.contains('numpads'))){
					if (lang==='en'){
						n = shiftEnactive.indexOf(e.innerText);
						if (n!==-1){
							e.innerText = shiftEnunactive[n];
						}
					}
					else if (lang==='ru'){
						n = shiftRuactive.indexOf(e.innerText);
						if (n!==-1){
						  e.innerText = shiftRuunactive[n];
					  }
					}
				}
			});
			flagshift=0;

		}
		else {
			if (flagalt===1){
				document.getElementById('AltLeft').classList.remove('key_active');
				document.getElementById('AltRight').classList.remove('key_active');
				changelanguage();
				flagalt=0;
				flagshift=0;
			}
			else{
			document.getElementById(control).classList.add('key_active');
			letters.forEach((e) => {
				if ((e.classList.contains('letter')||e.classList.contains('digit'))&&(!e.classList.contains('numpads'))){
					if (lang==='en'){
						n = shiftEnunactive.indexOf(e.innerText);
						if (n!==-1){

							e.innerText = shiftEnactive[n];
						}	
					}
					else if (lang==='ru'){
						n = shiftRuunactive.indexOf(e.innerText);
						if (n!==-1){
							e.innerText = shiftRuactive[n];
						}	
					}
				}
			});
			flagshift=1;
			}
		}	
	}
	//Вспомогательная функция смены раскладки клавиатуры
	function changelanguage(){
		let n=0;
		letters.forEach((e) => {
			if (e.classList.contains('letter')){
				if (lang==='en'){
					n = letterEn.indexOf(e.innerText.toLowerCase());
					if (flagcaps==1) {
						e.innerText = letterRu[n].toUpperCase();
					}
					else	e.innerText = letterRu[n];

				}
				else if (lang==='ru'){
					n = letterRu.indexOf(e.innerText.toLowerCase());
					if (flagcaps==1) {
						e.innerText = letterEn[n].toUpperCase();
					}
					else e.innerText = letterEn[n];

				}
			}
		});
		if (lang==='en'){
			lang = 'ru';
		}
		else if (lang==='ru'){
			lang = 'en';
		}
		localStorage.setItem('lang',lang);
		version = 'Активная расладка ' + lang;
		version = version + '\n Создано Behemoth86 for Windows OS';
		version = version + '\n Для переключения раскладки используйте Alt + Shift';
		version = version + '\n Для очистки поля используйте клавишу Esc';
		informtext.innerText = version;
	}
  //Вспомогательная функция проверки локов 
  function checklock(event, lock){
    var z = event.getModifierState(lock);
    return z;
	}
	//Вспомогательная функция срабатывания локов если любая кнопка нажимается первой
	function getlocks(){
		var res = checklock(event,"CapsLock");
		var res2 = checklock(event,"NumLock");
		var res3 = checklock(event,"ScrollLock");
		if (res) {capsclick();}
		if (res2) {numclick();}
		if (res3) {scrollclick();}
		score = 1;
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


