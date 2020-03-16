// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 20;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  
  item.addEventListener('click', function(e) {
    anchors.forEach(function(item){
		item.style.color="white";
	});
	item.style.color="red";
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});

const img_portfolio=document.getElementsByClassName("wrapper_1");
console.log(img_portfolio);
function border_func(e){
	for(var i=0;i<img_portfolio.length;i++){
		img_portfolio[i].querySelectorAll('img').forEach(function(item){
			item.style.border="none";
		});
	}
	e.toElement.style.border="5px solid #F06C64";
}
for (var i=0;i<img_portfolio.length;i++){
	
	for (var k=0;k<img_portfolio[i].querySelectorAll('img').length;k++){
		img_portfolio[i].querySelectorAll('img')[k].addEventListener('click',border_func);
	}
	
}

var but = document.getElementsByTagName('button');
console.log(but);
var dialog_form = document.getElementsByClassName('Dialog_form');
console.log(dialog_form);
var form = document.getElementsByTagName('form');
console.log(form);

function func(){
	dialog_form[0].innerHTML="";
	let br = document.createElement('br');
	let br1 = document.createElement('br');
	let br2 = document.createElement('br');
	let br3 = document.createElement('br');
	let p2 = document.createElement('span');
	let p3 = document.createElement('span');
	let p4 = document.createElement('span');
	console.log("dsdsd");
	dialog_form[0].style.width="200px";
	dialog_form[0].style.height="200px";
	dialog_form[0].style.backgroundColor="lightgray";
	dialog_form[0].style.border="5px solid black";
	dialog_form[0].style.borderRadius="20px 20px";
	dialog_form[0].style.position="absolute";
	dialog_form[0].style.top="200px";
	dialog_form[0].style.left="100px";
	dialog_form[0].append(p4);
	p4.innerText="письмо отправленно";
	dialog_form[0].append(br3)
	let p1 = document.createElement('span');
	dialog_form[0].append(br);
	dialog_form[0].append(p1);
	if (form[0].elements[2].value==''){
		p1.innerText="без темы";
	}
	else{
		p1.innerText=form[0].elements[2].value;
	}
	dialog_form[0].append(br1);
	dialog_form[0].append(p2);
	if (form[0].elements[3].value==''){
		p2.innerText="без описания"
	}
	else{
		p2.innerText=form[0].elements[3].value;
	}
	
	
	
	
	dialog_form[0].append(br2);
	dialog_form[0].append(p3);
	p3.innerText="OK"
	
	dialog_form[0].style.display="block";
	
	let but_ok=document.createElement('button');
	dialog_form[0].append(br);
	dialog_form[0].append(but_ok);
	
	but_ok.style.width="50px";
	but_ok.style.height="50px";
	but_ok.style.type="text";
	but_ok.innerHTML="ok";
	but_ok.addEventListener('click',function(e){
		dialog_form[0].innerHTML="";
		dialog_form[0].style.display="none";
		
	});
	
}


function iphone1(){
	console.log("ghbdtn");
	var iphone_vertical=document.getElementsByClassName('vertical_iphone');
	
	console.log(iphone_vertical);
	
	if ((iphone_vertical[0].style.opacity==="0")||(iphone_vertical[0].style.opacity==="")){
		  iphone_vertical[0].style.opacity="1";
			return true;
	}
	else if (iphone_vertical[0].style.opacity==="1"){
		 iphone_vertical[0].style.opacity="0";
		return true;
	}
	
	
}

function iphone2(){
	console.log("ghbdtn");
	var iphone_gorizontal=document.getElementsByClassName('gorizontal_iphone');
	
	console.log();
	
	if ((iphone_gorizontal[0].style.opacity==="0")||(iphone_gorizontal[0].style.opacity==="")){
		  iphone_gorizontal[0].style.opacity="1";
			return true;
	}
	else if (iphone_gorizontal[0].style.opacity==="1"){
		 iphone_gorizontal[0].style.opacity="0";
		return true;
	}
	
	
}


