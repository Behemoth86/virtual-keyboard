const FButtons = ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'ScrL', 'P/B' ];
const FButtonCodes =['Escape','F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'ScrollLock', 'Pause'];

const ArrEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Insert', 'Home', 'PageUp', 'NumLock', '/', '*', '-',
               'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'End', 'PageDown', 'Home', '↑', 'PageUp', '+',
               'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter',  '←', '', '→',
               'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', '↑', 'End', '↓', 'PageDown', 'Enter',
               'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→', 'Insert', 'Delete',];
const ArrRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Insert', 'Home', 'PageUp', 'NumLock', '/', '*', '-',
               'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete', 'End', 'PageDown', 'Home', '↑', 'PageUp', '+',
               'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',  '←', '', '→',
               'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', '↑', 'End', '↓', 'PageDown', 'Enter',
               'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→', 'Insert', 'Delete',];
const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Insert', 'Home', 'PageUp', 'NumLock', 'NumpadDivide', 'NumpadMultiply', 'NumpadSubtract',
                  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'End', 'PageDown', 'Numpad7', 'Numpad8', 'Numpad9', 'NumpadAdd',
                  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'Numpad4', 'Numpad5', 'Numpad6',
                  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'Numpad1', 'Numpad2', 'Numpad3', 'NumpadEnter',
                  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Numpad0', 'NumpadDecimal'];
const specialKeys = ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11',
                     'F12', 'ScrL', 'P/B', 'Tab', 'Backspace', 'CapsLock', 'Enter', 'Shift',
                     '↑', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→',
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
  //Дбавление в радиопанель индикаторов
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
  //Добавление любой строки клавиатуры кроме первой
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
  let flagnum=0;
  let flagscroll=0;
	let score =0;
  const numslocks = document.querySelectorAll('div');
  numslocks.forEach((e) => {
    if (numpads.includes(e.id)){
      e.classList.add('numpads');
    }
  });
  //События при нажатии кнопок на реальной клавиатуре
  document.addEventListener('keydown', (event) => {
    if ((tea.value.length===0)&&(score===0)){
      getlocks();
    }
    const key=document.getElementById(event.code);
		if ((event.code!=="CapsLock")&&(event.code!=="NumLock")&&(event.code!=="ScrollLock")&&(event.code!=='ShiftLeft')
			&&(event.code!=="ShiftRight")&&(event.code!=="ControlLeft")&&(event.code!=="ControlRight")&&(event.code!=="AltLeft")&&(event.code!=="AltRight")
			&&(event.code!=='F1')&&(event.code!=='F2')&&(event.code!=='F3')&&(event.code!=='F4')&&(event.code!=='F6')&&(event.code!=='F7')
			&&(event.code!=='F8')&&(event.code!=='F9')&&(event.code!=='F10')&&(event.code!=='F11')&&(event.code!=='F12')){
    key.classList.add('key_active');}
    posit = getCaretPos();
		if (event.code==="CapsLock"){
      event.preventDefault ? event.preventDefault() : (event.returnValue=false);
      if (tea.value.length===0){
        if (score>1){
          capsclick();
        }
        else {
          score=score+1;
        }
      }  
      else{
        capsclick();
      }  
    }
		else if (event.code==="ScrollLock"){
      event.preventDefault ? event.preventDefault() : (event.returnValue=false);
      if (tea.value.length===0){
        if (score>1){
          scrollclick();
        }
        else {
          score=score+1;
        }
      }  
      else{
        scrollclick();
      }  
    }
    else if (event.code==="NumLock"){
      event.preventDefault ? event.preventDefault() : (event.returnValue=false);
      if (tea.value.length===0){
        if (score>1){
          numclick();
        }
        else {
          score=score+1;
        }
      }  
      else{
        numclick();
      }  
    }
    else if ((event.code==="Delete")||(key.classList.contains('Delete'))){deleteclick();}
    else if (event.code==="Backspace"){backspaceclick();}
    else if ((event.code==="Enter")||(event.code==="NumpadEnter")){enterclick();}
    else if (event.code==="Tab"){
			event.preventDefault ? event.preventDefault() : (event.returnValue=false);
			tabspaceclick("Tab");
		}
		else if (event.code==="MetaLeft"){
			event.preventDefault ? event.preventDefault() : (event.returnValue=false);
		}
    else if (event.code==="Space"){tabspaceclick("Space");}
    else if (event.code==="Escape"){escclick();}
    else if (event.code==="End"){endclick();}
    else if (event.code==="Home"){homeclick();}
    else if (event.code==="Insert"){insertclick();}
		else if ((event.code==="ControlLeft")||(event.code==="ControlRight")){
			event.preventDefault ? event.preventDefault() : (event.returnValue=false);
			ctrlclick(event.code);
		}	
		else if (event.code==="AltLeft"){
			event.preventDefault ? event.preventDefault() : (event.returnValue=false);
			altclick("AltLeft");
		}
		else if (event.code==="AltRight"){
			event.preventDefault ? event.preventDefault() : (event.returnValue=false);
			altclick("AltRight");
		}	
		else if (event.code==='ShiftLeft'){
			event.preventDefault ? event.preventDefault() : (event.returnValue=false);
      shiftclick('ShiftLeft');
      if (document.getElementById('ShiftRight').classList.contains('key_active')){
        document.getElementById('ShiftRight').classList.remove('key_active')
      }
		}
		else if (event.code==='ShiftRight'){
			event.preventDefault ? event.preventDefault() : (event.returnValue=false);
      shiftclick('ShiftRight');
      if (document.getElementById('ShiftLeft').classList.contains('key_active')){
        document.getElementById('ShiftLeft').classList.remove('key_active')
      }
    }
		else if ((event.code==='F1')||(event.code==='F2')||(event.code==='F3')||(event.code==='F4')||(event.code==='F6')||(event.code==='F7')||
				(event.code==='F8')||(event.code==='F9')||(event.code==='F10')||(event.code==='F11')||(event.code==='F12')){
				event.preventDefault ? event.preventDefault() : (event.returnValue=false);
				key.classList.add('key_active');
				fclick(document.getElementById(event.code));
				key.classList.remove('key_active');
			}	
		else if (document.getElementById(event.code).classList.contains('letter')||document.getElementById(event.code).classList.contains('digit')){
			event.preventDefault ? event.preventDefault() : (event.returnValue=false);
			letterdigitclick(document.getElementById(event.code));
		}	
		tea.focus(); 
		tea.setSelectionRange(posit,posit);
	});
  //События при отпускании кнопок на реальной клавиатуре
  document.addEventListener('keyup', (event) => {
    const key=document.getElementById(event.code);
    if ((event.code!=="CapsLock")&&(event.code!=="NumLock")&&(event.code!=="ScrollLock")&&(event.code!=='ShiftLeft')
			&&(event.code!=="ShiftRight")&&(event.code!=="ControlLeft")&&(event.code!=="ControlRight")&&(event.code!=="AltLeft")&&(event.code!=="AltRight")
			&&(event.code!=='F1')&&(event.code!=='F2')&&(event.code!=='F3')&&(event.code!=='F4')&&(event.code!=='F6')&&(event.code!=='F7')
			&&(event.code!=='F8')&&(event.code!=='F9')&&(event.code!=='F10')&&(event.code!=='F11')&&(event.code!=='F12')){
      key.classList.remove('key_active');
    }
  });
  //События при нажатии кнопок мышкой на виртуальной клавиатуре
  keyboard.addEventListener('click', (event) => {
    if ((tea.value.length===0)&&(score===0)){
      getlocks();
      score=1;
    }
    if (event.target.classList.contains('letter')||event.target.classList.contains('digit')){letterdigitclick(event.target);}
    if (event.target.id==="CapsLock"){capsclick();}
    if (event.target.id==="NumLock"){numclick();}
    if ((event.target.id==="Delete")||(event.target.classList.contains('Delete'))){deleteclick();}
    if (event.target.id==="Backspace"){backspaceclick();}
    if ((event.target.id==="Enter")||(event.target.id==="NumpadEnter")){enterclick();}
    if (event.target.id==="Tab"){tabspaceclick("Tab");}
    if (event.target.id==="Space"){tabspaceclick("Space");}
    if (event.target.id==="Escape"){escclick();}
		if ((event.target.id==="End")||(event.target.classList.contains('End'))){endclick();}
		if (event.target.id==="ScrollLock"){
      if (flagscroll===0){
        scrollclick();
      }
    }  
		if ((event.target.id==="Home")||(event.target.classList.contains('Home'))){homeclick();}
		if ((event.target.id==="PageUp")||(event.target.classList.contains('PageUp'))){pageupclick();}
		if ((event.target.id==="PageDown")||(event.target.classList.contains('PageDown'))){pagedownclick();}
    if (event.target.id==="Insert"){insertclick();}
    if ((event.target.id==="ArrowUp")||((event.target.classList.contains("specials")&&(event.target.classList.contains("↑"))))){arrowupclick();}
    if ((event.target.id==="ArrowDown")||((event.target.classList.contains("specials")&&(event.target.classList.contains("↓"))))){arrowdownclick();}
    if ((event.target.id==="ArrowLeft")||((event.target.classList.contains("specials")&&(event.target.classList.contains("←"))))){arrowleftclick();}
    if ((event.target.id==="ArrowRight")||((event.target.classList.contains("specials")&&(event.target.classList.contains("→"))))){arrowrightclick();}   
		if ((event.target.id==="ControlLeft")||(event.target.id==="ControlRight")){
			if (event.target.id==="ControlLeft"){
				ctrlclick("ControlLeft");
				if (document.getElementById('ControlRight').classList.contains('key_active')){
					document.getElementById('ControlRight').classList.remove('key_active');
				}
			}
			else {
				ctrlclick("ControlRight");
				if (document.getElementById('ControlLeft').classList.contains('key_active')){
					document.getElementById('ControlLeft').classList.remove('key_active');
			  }	
			}
		}	
		if ((event.target.id==="AltLeft")||(event.target.id==="AltRight")){
			if (event.target.id==="AltLeft"){
				altclick("AltLeft");
				if (document.getElementById('AltRight').classList.contains('key_active')){
					document.getElementById('AltRight').classList.remove('key_active');
				}
			}
			else {
				altclick("AltRight");
				if (document.getElementById('AltLeft').classList.contains('key_active')){
					document.getElementById('AltLeft').classList.remove('key_active');
				}
			}	
		}
		if ((event.target.id==="ShiftLeft")||(event.target.id==="ShiftRight")){
			if (event.target.id==="ShiftLeft"){
				shiftclick("ShiftLeft");
				if (document.getElementById('ShiftRight').classList.contains('key_active')){
					document.getElementById('ShiftRight').classList.remove('key_active');
				}
			}	
			else {
				shiftclick("ShiftRight");
				if (document.getElementById('ShiftLeft').classList.contains('key_active')){
					document.getElementById('ShiftLeft').classList.remove('key_active');
				}
			}
		}
		if ((event.target.id==='F1')||(event.target.id==='F2')||(event.target.id==='F3')||(event.target.id==='F4')||(event.target.id==='F6')||(event.target.id==='F7')||
				(event.target.id==='F8')||(event.target.id==='F9')||(event.target.id==='F10')||(event.target.id==='F11')||(event.target.id==='F12')){
				fclick(document.getElementById(event.target.id));
			}
  tea.focus(); 
	tea.setSelectionRange(posit,posit);
  });
  //функция для нажатия стрелки вверх
  function arrowupclick(){
    posit=getCaretPos();
    if (posit-70<0){
      posit=0;
    }
    else posit=posit-70;
  }
  //функция для нажатия стрелки вниз
  function arrowdownclick(){
    posit=getCaretPos();
    if (posit+70>tea.value.length){
      posit=tea.value.length;
    }
    else posit=posit+70;
  }
  //функция для нажатия стрелки влево
  function arrowleftclick(){
    posit=getCaretPos();
    posit=posit-1;
  }
  //функция для нажатия стрелки вправо
  function arrowrightclick(){
    posit=getCaretPos();
    posit=posit+1;
	}
	//функция для нажатия pageup
	function pageupclick(){
		posit=getCaretPos();
		if (posit-500<0){
			posit=0;
		}
		else posit=posit-500;
	}
	//функция для нажатия pagedown
	function pagedownclick(){
    if (posit+500>tea.value.length){
      posit=tea.value.length;
		}
		else posit=posit+500;
  }
  //функция для нажатия буквы или цифры
  function letterdigitclick(letter){
    let pos = getCaretPos();
      let text = tea.value;
      let len =text.length;
      let symbol=letter.innerHTML;
      if (pos===0){
        if (len===0){
          symbol=letter.innerHTML;
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
			if (flagshift===1){
				if (document.getElementById('ShiftLeft').classList.contains('key_active')){
					shiftclick('ShiftLeft');
				}
				else shiftclick('ShiftRight');
			}	
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
          if (flagshift===0){
            e.innerHTML = e.innerHTML.toLowerCase();
          }
          else if (flagshift===1){
            e.innerHTML = e.innerHTML.toUpperCase();
          }
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
      flagnum=1;
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
      flagnum=0;  
    }
  }
	//функция нажатия scrolllock
	function scrollclick(){
    if (document.getElementById("ScrollLock").classList.contains('key_active')===false){
      document.getElementById("ScrollLock").classList.add('key_active');
      document.getElementById("ScrollLockP").classList.add('radiobutton_active');		
      flagscroll=1;
    }
    else{
		  document.getElementById("ScrollLock").classList.remove('key_active');
      document.getElementById("ScrollLockP").classList.remove('radiobutton_active');		
      flagscroll=0;
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
  //функция нажатия End
	function endclick(){
    posit = tea.value.length;
  }
  //функция нажатия Home
	function homeclick(){
    posit = 0;
  }
  //функция нажатия Insert
	function insertclick(){
    posit=getCaretPos();
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
            if (flagcaps===0){
              e.innerHTML = e.innerHTML.toLowerCase();
            }
            else if (flagcaps===1){
              e.innerHTML = e.innerHTML.toUpperCase();
            } 	
						n = shiftEnactive.indexOf(e.innerText);
						if (n!==-1){
							e.innerText = shiftEnunactive[n];
						}
					}
					else if (lang==='ru'){
						if (flagcaps===0){
              e.innerHTML = e.innerHTML.toLowerCase();
            }
            else if (flagcaps===1){
              e.innerHTML = e.innerHTML.toUpperCase();
            }
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
              if (flagcaps===0){
                e.innerHTML = e.innerHTML.toUpperCase();
              }
              else if (flagcaps===1){
                e.innerHTML = e.innerHTML.toLowerCase();
              }
							n = shiftEnunactive.indexOf(e.innerText);
							if (n!==-1){
								e.innerText = shiftEnactive[n];
							}	
						}
						else if (lang==='ru'){
							if (flagcaps===0){
                e.innerHTML = e.innerHTML.toUpperCase();
              }
              else if (flagcaps===1){
                e.innerHTML = e.innerHTML.toLowerCase();
              }
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
	//функция нажатия любой ф-ки кроме F5, она для обновления страницы
	function fclick(f){
		f.classList.add('key_active');  
		alert('Проект полнофункциональной клавиатуры! Отличия от реальных \n нажатий имеют функциональные кнопки, а также стрелки.\n Единственное отличие по кнопкам, это отсутствие PrntScr,\n т.к. не нашел пока по ней документацию.')
		f.classList.remove('key_active');
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


